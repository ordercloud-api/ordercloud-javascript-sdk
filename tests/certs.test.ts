import { Tokens, Certs } from '../src'
import { makeToken } from './utils'
import { expectJsonCall, installFetchMock } from './fetchMock'

// endpoints that have oauth/ in path don't include /{apiVersion}/
const apiUrl = `https://api.ordercloud.io`
const validToken = makeToken()
const mockKid = 'x6sA-GfTGEWUp5OWFbhmmg'

beforeEach(() => {
  installFetchMock()
  Tokens.RemoveAccessToken()
})

test('can get cert', async () => {
  Tokens.SetAccessToken(validToken)
  await Certs.GetPublicKey(mockKid)
  expectJsonCall('GET', `${apiUrl}/oauth/certs/${mockKid}`, validToken)
})
