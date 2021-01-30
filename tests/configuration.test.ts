import { Configuration, SdkConfiguration } from '../src'

const defaultConfig = cloneDeep(Configuration.Get())

beforeEach(() => {
  Configuration.Set(defaultConfig)
})

test('should handle modifying a top level property', () => {
  const newApiUrl = 'https://sandboxapi.ordercloud.io'

  const expected = cloneDeep(defaultConfig) as SdkConfiguration
  expected.baseApiUrl = newApiUrl
  Configuration.Set({ baseApiUrl: newApiUrl })

  expect(expected).toMatchObject(Configuration.Get())
})

test('should handle modifying a cookie option', () => {
  const newCookiePrefix = 'myprefix'

  const expected = cloneDeep(defaultConfig) as SdkConfiguration
  expected.cookieOptions.prefix = newCookiePrefix
  Configuration.Set({ cookieOptions: { prefix: newCookiePrefix } })

  expect(expected).toMatchObject(Configuration.Get())
})

// takes an object and creates a new one with same properties/values
// useful so we don't mutate original object
function cloneDeep(obj: any): any {
  return JSON.parse(JSON.stringify(obj))
}
