import mockAxios from 'axios'
import { Auth, ApiRole } from '../src/index'

interface TestData {
  authUrl: string
  username: string
  password: string
  clientSecret: string
  clientID: string
  scope: ApiRole[]
  authHeaders: {
    'Content-Type': string
    Accept: string
  }
}
interface TestDataWithCustomRoles extends TestData {
  customRoles?: string[]
}

const testdata: TestData = {
  authUrl: 'https://api.ordercloud.io/oauth/token',
  username: '$crhistian', // handles special chars
  password: '87awesomesauce#$%^&', // handles special chars
  clientSecret: 'my-mock-secret',
  clientID: '12345678-1234-1C34-1234-6BAB2E6CB1F0',
  scope: ['BuyerAdmin', 'WebhookAdmin'],
  authHeaders: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
}
const testdatawithcustomroles: TestDataWithCustomRoles = {
  ...testdata,
  customRoles: ['InventoryAdmin']
} 

afterEach(() => {
  // cleans up any tracked calls before the next test
  jest.clearAllMocks()
})

const urlencode = encodeURIComponent
test('can auth with login, no custom roles', async () => {
  await Auth.Login(
    testdata.username,
    testdata.password,
    testdata.clientID,
    testdata.scope as ApiRole[]
  )
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=password&username=${urlencode(
    testdata.username
  )}&password=${urlencode(testdata.password)}&client_id=${
    testdata.clientID
  }&scope=${urlencode(testdata.scope.join(' '))}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
  })
})

test('can auth with login with custom roles', async () => {
  await Auth.Login(
    testdatawithcustomroles.username,
    testdatawithcustomroles.password,
    testdatawithcustomroles.clientID,
    testdatawithcustomroles.scope as ApiRole[],
    testdatawithcustomroles.customRoles
  )
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=password&username=${urlencode(
    testdatawithcustomroles.username
  )}&password=${urlencode(testdatawithcustomroles.password)}&client_id=${
    testdatawithcustomroles.clientID
  }&scope=${urlencode(`${testdatawithcustomroles.scope.join(' ')} ${testdatawithcustomroles.customRoles.join(' ')}`)}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdatawithcustomroles.authUrl, body, {
    headers: testdatawithcustomroles.authHeaders,
  })
})

test('can auth with elevated login, no custom roles', async () => {
  await Auth.ElevatedLogin(
    testdata.clientSecret,
    testdata.username,
    testdata.password,
    testdata.clientID,
    testdata.scope,
  )
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=password&scope=${urlencode(
    testdata.scope.join(' ')
  )}&client_id=${testdata.clientID}&username=${urlencode(
    testdata.username
  )}&password=${urlencode(testdata.password)}&client_secret=${urlencode(
    testdata.clientSecret
  )}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
  })
})

test('can auth with elevated login with custom roles', async () => {
  await Auth.ElevatedLogin(
    testdatawithcustomroles.clientSecret,
    testdatawithcustomroles.username,
    testdatawithcustomroles.password,
    testdatawithcustomroles.clientID,
    testdatawithcustomroles.scope,
    testdatawithcustomroles.customRoles
  )
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=password&scope=${urlencode(
    `${testdatawithcustomroles.scope.join(' ')} ${testdatawithcustomroles.customRoles.join(' ')}`
  )}&client_id=${testdatawithcustomroles.clientID}&username=${urlencode(
    testdatawithcustomroles.username
  )}&password=${urlencode(testdatawithcustomroles.password)}&client_secret=${urlencode(
    testdatawithcustomroles.clientSecret
  )}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdatawithcustomroles.authUrl, body, {
    headers: testdatawithcustomroles.authHeaders,
  })
})

test('can auth with client credentials, no custom roles', async () => {
  await Auth.ClientCredentials(
    testdata.clientSecret,
    testdata.clientID,
    testdata.scope as ApiRole[]
  )
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=client_credentials&scope=${urlencode(
    testdata.scope.join(' ')
  )}&client_id=${testdata.clientID}&client_secret=${testdata.clientSecret}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
  })
})

test('can auth with client credentials with custom roles', async () => {
  await Auth.ClientCredentials(
    testdatawithcustomroles.clientSecret,
    testdatawithcustomroles.clientID,
    testdatawithcustomroles.scope as ApiRole[],
    testdatawithcustomroles.customRoles
  )
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=client_credentials&scope=${urlencode(
    `${testdatawithcustomroles.scope.join(' ')} ${testdatawithcustomroles.customRoles.join(' ')}`
  )}&client_id=${testdatawithcustomroles.clientID}&client_secret=${testdatawithcustomroles.clientSecret}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdatawithcustomroles.authUrl, body, {
    headers: testdatawithcustomroles.authHeaders,
  })
})

test('can auth with refresh token', async () => {
  const refreshToken = 'mock-refresh-token'
  await Auth.RefreshToken(refreshToken, testdata.clientID)
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=refresh_token&client_id=${testdata.clientID}&refresh_token=${refreshToken}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
  })
})

test('can auth anonymous, no custom roles', async () => {
  await Auth.Anonymous(testdata.clientID, testdata.scope)
  expect(mockAxios.post).toHaveBeenCalledTimes(1)

  const body = `grant_type=client_credentials&client_id=${
    testdata.clientID
  }&scope=${urlencode(testdata.scope.join(' '))}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
  })
})

test('can auth anonymous with custom roles', async () => {
  await Auth.Anonymous(testdatawithcustomroles.clientID, testdatawithcustomroles.scope, testdatawithcustomroles.customRoles)
  expect(mockAxios.post).toHaveBeenCalledTimes(1)

  const body = `grant_type=client_credentials&client_id=${
    testdatawithcustomroles.clientID
  }&scope=${urlencode(`${testdatawithcustomroles.scope.join(' ')} ${testdatawithcustomroles.customRoles.join(' ')}`)}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdatawithcustomroles.authUrl, body, {
    headers: testdatawithcustomroles.authHeaders,
  })
})
