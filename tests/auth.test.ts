import mockAxios from 'axios'
import { Auth, ApiRole } from '../src/index'

const testdata = {
  authUrl: 'https://api.ordercloud.io/oauth/token',
  username: '$crhistian', // handles special chars
  password: '87awesomesauce#$%^&', // handles special chars
  clientSecret: 'my-mock-secret',
  clientID: '12345678-1234-1C34-1234-6BAB2E6CB1F0',
  scope: ['BuyerAdmin', 'WebhookAdmin'] as ApiRole[],
  customRoles: ['InventoryAdmin'],
  authHeaders: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
}

afterEach(() => {
  jest.clearAllMocks()
})

const urlencode = encodeURIComponent

type ScopeCase = {
  name: string
  scope?: ApiRole[]
  customRoles?: string[]
  expectedScope?: string
}

const scopeCases: ScopeCase[] = [
  {
    name: 'standard roles only',
    scope: testdata.scope,
    expectedScope: testdata.scope.join(' '),
  },
  {
    name: 'custom roles only',
    customRoles: testdata.customRoles,
    expectedScope: testdata.customRoles.join(' '),
  },
  {
    name: 'standard and custom roles',
    scope: testdata.scope,
    customRoles: testdata.customRoles,
    expectedScope: `${testdata.scope.join(' ')} ${testdata.customRoles.join(
      ' '
    )}`,
  },
  {
    name: 'neither standard nor custom roles',
  },
]

function withScope(
  parts: string[],
  scope?: string,
  at = parts.length
): string[] {
  const next = parts.slice()
  if (scope) {
    next.splice(at, 0, `scope=${urlencode(scope)}`)
  }
  return next
}

function loginBody(scope?: string): string {
  return withScope(
    [
      'grant_type=password',
      `username=${urlencode(testdata.username)}`,
      `password=${urlencode(testdata.password)}`,
      `client_id=${testdata.clientID}`,
    ],
    scope
  ).join('&')
}

function elevatedLoginBody(scope?: string): string {
  return withScope(
    [
      'grant_type=password',
      `client_id=${testdata.clientID}`,
      `username=${urlencode(testdata.username)}`,
      `password=${urlencode(testdata.password)}`,
      `client_secret=${urlencode(testdata.clientSecret)}`,
    ],
    scope,
    1
  ).join('&')
}

function clientCredentialsBody(scope?: string): string {
  return withScope(
    [
      'grant_type=client_credentials',
      `client_id=${testdata.clientID}`,
      `client_secret=${testdata.clientSecret}`,
    ],
    scope,
    1
  ).join('&')
}

function anonymousBody(scope?: string, anonuserid?: string): string {
  const parts = withScope(
    ['grant_type=client_credentials', `client_id=${testdata.clientID}`],
    scope
  )
  if (anonuserid) {
    parts.push(`anonuserid=${anonuserid}`)
  }
  return parts.join('&')
}

function expectTokenRequest(
  body: string,
  config: Record<string, unknown> = {}
) {
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
    ...config,
  })
  const axiosConfig = (mockAxios.post as jest.Mock).mock.calls[0][2]
  expect(axiosConfig).not.toHaveProperty('customRoles')
  expect(axiosConfig).not.toHaveProperty('anonuserid')
}

describe('Login', () => {
  test.each(scopeCases)(
    '$name',
    async ({ scope, customRoles, expectedScope }) => {
      const requestOptions = {
        customRoles,
        requestType: 'login',
      }
      await Auth.Login(
        testdata.username,
        testdata.password,
        testdata.clientID,
        scope,
        requestOptions
      )
      expectTokenRequest(loginBody(expectedScope), { requestType: 'login' })
      expect(requestOptions.customRoles).toBe(customRoles)
    }
  )

  test('rejects a non-array scope', async () => {
    await expect(
      Auth.Login(
        testdata.username,
        testdata.password,
        testdata.clientID,
        'BuyerAdmin' as any
      )
    ).rejects.toThrow('scope must be a string array')
    expect(mockAxios.post).not.toHaveBeenCalled()
  })

  test('rejects non-array custom roles', async () => {
    await expect(
      Auth.Login(
        testdata.username,
        testdata.password,
        testdata.clientID,
        undefined,
        {
          customRoles: 'InventoryAdmin' as any,
        }
      )
    ).rejects.toThrow('custom roles must be defined as a string array')
    expect(mockAxios.post).not.toHaveBeenCalled()
  })
})

describe('ElevatedLogin', () => {
  test.each(scopeCases)(
    '$name',
    async ({ scope, customRoles, expectedScope }) => {
      await Auth.ElevatedLogin(
        testdata.clientSecret,
        testdata.username,
        testdata.password,
        testdata.clientID,
        scope,
        { customRoles, requestType: 'elevated' }
      )
      expectTokenRequest(elevatedLoginBody(expectedScope), {
        requestType: 'elevated',
      })
    }
  )
})

describe('ClientCredentials', () => {
  test.each(scopeCases)(
    '$name',
    async ({ scope, customRoles, expectedScope }) => {
      await Auth.ClientCredentials(
        testdata.clientSecret,
        testdata.clientID,
        scope,
        { customRoles, requestType: 'client' }
      )
      expectTokenRequest(clientCredentialsBody(expectedScope), {
        requestType: 'client',
      })
    }
  )
})

describe('Anonymous', () => {
  test.each(scopeCases)(
    '$name',
    async ({ scope, customRoles, expectedScope }) => {
      await Auth.Anonymous(testdata.clientID, scope, {
        customRoles,
        requestType: 'anonymous',
      })
      expectTokenRequest(anonymousBody(expectedScope), {
        requestType: 'anonymous',
      })
    }
  )

  test('puts anonuserid on the token body', async () => {
    const requestOptions = {
      anonuserid: 'myanonuserid',
      customRoles: testdata.customRoles,
      requestType: 'anonymous',
    }
    await Auth.Anonymous(testdata.clientID, testdata.scope, requestOptions)
    expectTokenRequest(
      anonymousBody(
        `${testdata.scope.join(' ')} ${testdata.customRoles.join(' ')}`,
        'myanonuserid'
      ),
      { requestType: 'anonymous' }
    )
    expect(requestOptions).toEqual({
      anonuserid: 'myanonuserid',
      customRoles: testdata.customRoles,
      requestType: 'anonymous',
    })
  })
})

test('can auth with refresh token', async () => {
  const refreshToken = 'mock-refresh-token'
  await Auth.RefreshToken(refreshToken, testdata.clientID, {
    requestType: 'refresh',
  })
  expectTokenRequest(
    `grant_type=refresh_token&client_id=${testdata.clientID}&refresh_token=${refreshToken}`,
    { requestType: 'refresh' }
  )
})
