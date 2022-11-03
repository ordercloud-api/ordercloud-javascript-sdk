import mockAxios from 'axios'
import { Tokens, Me, Users, Products, Buyers } from '../src'
import { makeToken } from './utils'

const apiUrl = 'https://api.ordercloud.io/v1'
const validToken = makeToken()

beforeEach(() => {
  jest.clearAllMocks() // cleans up any tracked calls before the next test
  Tokens.RemoveImpersonationToken()
})

test('can filter call with boolean (true)', async () => {
  Tokens.SetAccessToken(validToken)
  await Me.ListProducts({ filters: { 'xp.Featured': true } })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(`${apiUrl}/me/products`, {
    params: {
      filters: { 'xp.Featured': true },
    },
    paramsSerializer: expect.any(Object),
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${validToken}`,
    },
  })
})

test('can filter call with boolean (false)', async () => {
  Tokens.SetAccessToken(validToken)
  await Me.ListProducts({ filters: { IsSubmitted: false } })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(`${apiUrl}/me/products`, {
    params: {
      filters: { IsSubmitted: false },
    },
    paramsSerializer: expect.any(Object),
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${validToken}`,
    },
  })
})

test('can filter call with comparison operator', async () => {
  Tokens.SetAccessToken(validToken)
  await Me.ListOrders({ filters: { DateSubmitted: '>2020-04-20' } })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(`${apiUrl}/me/orders`, {
    params: { filters: { DateSubmitted: '>2020-04-20' } },
    paramsSerializer: expect.any(Object),
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${validToken}`,
    },
  })
})

test('can filter call with wildcard operator', async () => {
  Tokens.SetAccessToken(validToken)
  await Users.List('my-mock-buyerid', { filters: { LastName: 'Smith*' } })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${apiUrl}/buyers/my-mock-buyerid/users`,
    {
      params: { filters: { LastName: 'Smith*' } },
      paramsSerializer: expect.any(Object),
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${validToken}`,
      },
    }
  )
})

test('can filter with logical OR operator', async () => {
  Tokens.SetAccessToken(validToken)
  await Users.List('my-mock-buyerid', {
    filters: { LastName: 'Smith*|*Jones' },
  })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${apiUrl}/buyers/my-mock-buyerid/users`,
    {
      params: {
        filters: { LastName: 'Smith*|*Jones' },
      },
      timeout: 60000,
      paramsSerializer: expect.any(Object),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${validToken}`,
      },
    }
  )
})

test('can filter with logical AND operator', async () => {
  Tokens.SetAccessToken(validToken)
  await Products.List({ filters: { 'xp.Color': ['!red', '!blue'] } })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(`${apiUrl}/products`, {
    params: {
      filters: { 'xp.Color': ['!red', '!blue'] },
    },
    timeout: 60000,
    paramsSerializer: expect.any(Object),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${validToken}`,
    },
  })
})

test('can use multiple searchOn parameters', async () => {
  Tokens.SetAccessToken(validToken)
  await Buyers.List({ searchOn: ['Name', 'ID'] })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(`${apiUrl}/buyers`, {
    params: {
      searchOn: ['Name', 'ID'],
    },
    timeout: 60000,
    paramsSerializer: expect.any(Object),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${validToken}`,
    },
  })
})

test('can use multiple sortBy parameters', async () => {
  Tokens.SetAccessToken(validToken)
  await Buyers.List({ sortBy: ['Name', 'ID'] })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(`${apiUrl}/buyers`, {
    params: {
      sortBy: ['Name', 'ID'],
    },
    timeout: 60000,
    paramsSerializer: expect.any(Object),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${validToken}`,
    },
  })
})
