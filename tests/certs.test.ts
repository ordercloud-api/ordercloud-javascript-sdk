import mockAxios from 'axios'
import { Tokens, Certs } from '../src'
import { makeToken } from './utils'

// endpoints that have oauth/ in path don't include /{apiVersion}/
const apiUrl = `https://api.ordercloud.io`
const validToken = makeToken()
const mockKid = 'x6sA-GfTGEWUp5OWFbhmmg'

beforeEach(() => {
  jest.clearAllMocks() // cleans up any tracked calls before the next test
  Tokens.RemoveAccessToken()
})

test('can get cert', async () => {
  Tokens.SetAccessToken(validToken)
  await Certs.GetPublicKey(mockKid)
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${apiUrl}/oauth/certs/${mockKid}`,
    {
      paramsSerializer: expect.any(Function),
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${validToken}`,
      },
    }
  )
})
