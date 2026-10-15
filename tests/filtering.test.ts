import { Tokens, Me, Users, Products, Buyers } from '../src'
import { makeToken } from './utils'
import paramsSerializer from '../src/utils/paramsSerializer'
import { expectJsonCall, installFetchMock } from './fetchMock'

const apiUrl = 'https://api.ordercloud.io/v1'
const validToken = makeToken()

beforeEach(() => {
  installFetchMock()
  Tokens.RemoveImpersonationToken()
})

function expectFilteredGet(path: string, params: { [key: string]: any }) {
  const query = paramsSerializer.serialize(params)
  expectJsonCall('GET', `${apiUrl}${path}?${query}`, validToken)
}

test('can filter call with boolean (true)', async () => {
  Tokens.SetAccessToken(validToken)
  const params = { filters: { 'xp.Featured': true } }
  await Me.ListProducts(params)
  expectFilteredGet('/me/products', params)
})

test('can filter call with boolean (false)', async () => {
  Tokens.SetAccessToken(validToken)
  const params = { filters: { IsSubmitted: false } }
  await Me.ListProducts(params)
  expectFilteredGet('/me/products', params)
})

test('can filter call with comparison operator', async () => {
  Tokens.SetAccessToken(validToken)
  const params = { filters: { DateSubmitted: '>2020-04-20' } }
  await Me.ListOrders(params)
  expectFilteredGet('/me/orders', params)
})

test('can filter call with wildcard operator', async () => {
  Tokens.SetAccessToken(validToken)
  const params = { filters: { LastName: 'Smith*' } }
  await Users.List('my-mock-buyerid', params)
  expectFilteredGet('/buyers/my-mock-buyerid/users', params)
})

test('can filter with logical OR operator', async () => {
  Tokens.SetAccessToken(validToken)
  const params = { filters: { LastName: 'Smith*|*Jones' } }
  await Users.List('my-mock-buyerid', params)
  expectFilteredGet('/buyers/my-mock-buyerid/users', params)
})

test('can filter with logical AND operator', async () => {
  Tokens.SetAccessToken(validToken)
  const params = { filters: { 'xp.Color': ['!red', '!blue'] } }
  await Products.List(params)
  expectFilteredGet('/products', params)
})

test('can use multiple searchOn parameters', async () => {
  Tokens.SetAccessToken(validToken)
  const params = { searchOn: ['Name', 'ID'] as Array<'Name' | 'ID'> }
  await Buyers.List(params)
  expectFilteredGet('/buyers', params)
})

test('can use multiple sortBy parameters', async () => {
  Tokens.SetAccessToken(validToken)
  const params = { sortBy: ['Name', 'ID'] as Array<'Name' | 'ID'> }
  await Buyers.List(params)
  expectFilteredGet('/buyers', params)
})
