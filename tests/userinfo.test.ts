import { UserInfo, Tokens } from '../src/index'
import { makeToken } from './utils'
import { expectJsonCall, installFetchMock } from './fetchMock'

beforeEach(() => {
  installFetchMock()
})

test('handles auth userinfo', async () => {
  const validToken = makeToken()
  Tokens.SetAccessToken(validToken)
  await UserInfo.GetToken()

  expectJsonCall('GET', 'https://api.ordercloud.io/oauth/userinfo', validToken)
})
