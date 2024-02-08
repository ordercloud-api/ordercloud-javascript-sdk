import mockAxios from 'axios'
import { UserInfo, Tokens } from '../src/index'
import { makeToken } from './utils'

afterEach(() => {
  // cleans up any tracked calls before the next test
  jest.clearAllMocks()
})

test('handles auth userinfo', async () => {
  const validToken = makeToken()
  Tokens.SetAccessToken(validToken)
  await UserInfo.GetToken()

  expect(mockAxios.get).toHaveBeenCalledWith(
    'https://api.ordercloud.io/oauth/userinfo',
    {
      paramsSerializer: expect.any(Object),
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${validToken}`,
      },
    }
  )
})
