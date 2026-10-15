import {
  CancellationError,
  Configuration,
  OrderCloudError,
  Products,
  Tokens,
  isCancellation,
} from '../src'
import { makeToken } from './utils'

const token = makeToken()

beforeEach(() => {
  Tokens.SetAccessToken(token)
  Configuration.Set({
    baseApiUrl: 'https://api.ordercloud.io',
    apiVersion: 'v1',
    timeoutInMilliseconds: 60 * 1000,
    clientID: undefined,
    fetch: undefined,
    onRequest: undefined,
    onResponse: undefined,
  })
})

test('rejects OrderCloud errors from a non-2xx response', async () => {
  globalThis.fetch = jest.fn(async () => {
    return new Response(
      JSON.stringify({
        Errors: [
          {
            ErrorCode: 'NotFound',
            Message: 'missing',
            Data: { ObjectType: 'Product', ObjectID: 'x' },
          },
        ],
      }),
      { status: 404, statusText: 'Not Found' }
    )
  }) as any

  try {
    await Products.Get('x')
    throw new Error('expected rejection')
  } catch (error) {
    expect((error as Error).message).toBe('Product x not found')
    expect(error).toMatchObject({
      isOrderCloudError: true,
      status: 404,
      errorCode: 'NotFound',
      message: 'Product x not found',
    })
  }
})

test('cancellation is not an OrderCloud error', async () => {
  const controller = new AbortController()
  globalThis.fetch = jest.fn((_url, init) => {
    return new Promise((_resolve, reject) => {
      const abort = () => {
        reject(new DOMException('The operation was aborted.', 'AbortError'))
      }
      if (init.signal.aborted) {
        abort()
        return
      }
      init.signal.addEventListener('abort', abort)
    })
  }) as any

  const pending = Products.List({}, { signal: controller.signal })
  controller.abort()
  await expect(pending).rejects.toThrow('This request was cancelled')
  await expect(pending).rejects.toMatchObject({ isCancellation: true })
  try {
    controller.abort()
    await Products.List({}, { signal: controller.signal })
  } catch (error) {
    expect(isCancellation(error)).toBe(true)
    expect(error).not.toBeInstanceOf(OrderCloudError)
  }
})

test('timeout is not an OrderCloud error', async () => {
  Configuration.Set({ timeoutInMilliseconds: 20 })
  globalThis.fetch = jest.fn((_url, init) => {
    return new Promise((_resolve, reject) => {
      init.signal.addEventListener('abort', () => {
        reject(init.signal.reason)
      })
    })
  }) as any

  await expect(Products.List()).rejects.toMatchObject({
    name: 'TimeoutError',
    isTimeout: true,
  })
})

test('request and response hooks run around the call', async () => {
  const seen: string[] = []
  globalThis.fetch = jest.fn(async (_url, init) => {
    seen.push(init.headers['X-Test'])
    return new Response(JSON.stringify({ ID: 'from-hook' }), { status: 200 })
  }) as any
  Configuration.Set({
    onRequest(request) {
      seen.push('request')
      return {
        ...request,
        headers: { ...request.headers, 'X-Test': request.requestType },
      }
    },
    onResponse(response) {
      seen.push('response')
      return { ...response, data: { ...response.data, hooked: true } }
    },
  })

  const product = await Products.Get('x', { requestType: 'catalog' })
  expect(product).toEqual({ ID: 'from-hook', hooked: true })
  expect(seen).toEqual(['request', 'catalog', 'response'])
})

test('uses a custom fetch implementation', async () => {
  const custom = jest.fn(async () => {
    return new Response(JSON.stringify({ ID: 'custom' }), { status: 200 })
  })
  const globalFetch = jest.fn()
  globalThis.fetch = globalFetch as any
  Configuration.Set({ fetch: custom })

  await expect(Products.Get('x')).resolves.toEqual({ ID: 'custom' })
  expect(custom).toHaveBeenCalledTimes(1)
  expect(globalFetch).not.toHaveBeenCalled()
})
