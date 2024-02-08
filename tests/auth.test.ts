import mockAxios from 'axios'
import { Auth, ApiRole, Tokens } from '../src/index'
import { makeToken } from './utils'

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

test('can auth with login without scope or custom roles', async () => {
  await Auth.Login(testdata.username, testdata.password, testdata.clientID)
  expect(mockAxios.post).toHaveBeenCalledTimes(1)

  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=password&username=${urlencode(
    testdata.username
  )}&password=${urlencode(testdata.password)}&client_id=${testdata.clientID}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
  })
})

test('can auth with login with custom roles', async () => {
  await Auth.Login(
    testdata.username,
    testdata.password,
    testdata.clientID,
    testdata.scope as ApiRole[],
    testdata.customRoles
  )
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=password&username=${urlencode(
    testdata.username
  )}&password=${urlencode(testdata.password)}&client_id=${
    testdata.clientID
  }&scope=${urlencode(
    `${testdata.scope.join(' ')} ${testdata.customRoles?.join?.(' ')}`
  )}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
  })
})

test('can auth with elevated login, no custom roles', async () => {
  await Auth.ElevatedLogin(
    testdata.clientSecret,
    testdata.username,
    testdata.password,
    testdata.clientID,
    testdata.scope
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
    testdata.clientSecret,
    testdata.username,
    testdata.password,
    testdata.clientID,
    testdata.scope,
    testdata.customRoles
  )
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=password&scope=${urlencode(
    `${testdata.scope.join(' ')} ${testdata.customRoles?.join?.(' ')}`
  )}&client_id=${testdata.clientID}&username=${urlencode(
    testdata.username
  )}&password=${urlencode(testdata.password)}&client_secret=${urlencode(
    testdata.clientSecret
  )}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
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
    testdata.clientSecret,
    testdata.clientID,
    testdata.scope as ApiRole[],
    testdata.customRoles
  )
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  const body = `grant_type=client_credentials&scope=${urlencode(
    `${testdata.scope.join(' ')} ${testdata.customRoles?.join?.(' ')}`
  )}&client_id=${testdata.clientID}&client_secret=${testdata.clientSecret}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
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

test('handles auth anonymous with anonuserid', async () => {
  await Auth.Anonymous(testdata.clientID, testdata.scope, undefined, {
    anonuserid: 'myanonuserid',
  })

  const body = `grant_type=client_credentials&client_id=${
    testdata.clientID
  }&scope=${urlencode(testdata.scope.join(' '))}&anonuserid=myanonuserid`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
  })
})

test('can auth anonymous with custom roles', async () => {
  await Auth.Anonymous(testdata.clientID, testdata.scope, testdata.customRoles)
  expect(mockAxios.post).toHaveBeenCalledTimes(1)

  const body = `grant_type=client_credentials&client_id=${
    testdata.clientID
  }&scope=${urlencode(
    `${testdata.scope.join(' ')} ${testdata.customRoles?.join?.(' ')}`
  )}`
  expect(mockAxios.post).toHaveBeenCalledWith(testdata.authUrl, body, {
    headers: testdata.authHeaders,
  })
})
