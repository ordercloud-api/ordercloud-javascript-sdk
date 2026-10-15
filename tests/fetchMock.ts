export type FetchCall = {
  url: string
  method: string
  headers: Record<string, string>
  body?: string
}

const calls: FetchCall[] = []

export function installFetchMock(data: unknown = {}) {
  calls.length = 0
  globalThis.fetch = jest.fn(async (input: any, init: RequestInit = {}) => {
    const headers: Record<string, string> = {}
    const raw = init.headers || {}
    if (raw instanceof Headers) {
      raw.forEach((value, key) => {
        headers[key] = value
      })
    } else if (Array.isArray(raw)) {
      for (const [key, value] of raw) {
        headers[key] = value
      }
    } else {
      Object.assign(headers, raw)
    }
    calls.push({
      url: String(input),
      method: init.method || 'GET',
      headers,
      body: init.body == null ? undefined : String(init.body),
    })
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }) as any
}

export function fetchCalls(): FetchCall[] {
  return calls
}

export function expectJsonCall(
  method: string,
  url: string,
  token: string,
  body?: unknown
) {
  expect(calls).toHaveLength(1)
  const call = calls[0]
  expect(call.method).toBe(method)
  expect(call.url).toBe(url)
  expect(call.headers['Content-Type']).toBe('application/json')
  expect(call.headers.Authorization).toBe(`Bearer ${token}`)
  if (body === undefined) {
    expect(call.body).toBeUndefined()
  } else {
    expect(JSON.parse(call.body as string)).toEqual(body)
  }
}

export function expectFormPost(
  url: string,
  body: string,
  headers: Record<string, string>
) {
  expect(calls).toHaveLength(1)
  const call = calls[0]
  expect(call.method).toBe('POST')
  expect(call.url).toBe(url)
  expect(call.body).toBe(body)
  expect(call.headers).toMatchObject(headers)
}
