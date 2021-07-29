import { Configuration, SdkConfiguration } from '../src'

const defaultConfig = cloneDeep(Configuration.Get())

beforeEach(() => {
  Configuration.Set(defaultConfig)
})

test('should handle modifying a top level property', () => {
  const baseApiUrl = 'https://sandboxapi.ordercloud.io'

  const expected = cloneDeep(defaultConfig) as SdkConfiguration
  expected.baseApiUrl = baseApiUrl
  Configuration.Set({ baseApiUrl })

  expect(expected).toStrictEqual(Configuration.Get())
})

test('should handle modifying a cookie option', () => {
  const prefix = 'myprefix'

  const expected = cloneDeep(defaultConfig) as SdkConfiguration
  expected.cookieOptions.prefix = prefix
  Configuration.Set({ cookieOptions: { prefix } })

  expect(expected).toStrictEqual(Configuration.Get())
})

// takes an object and creates a new one with same properties/values
// useful so we don't mutate original object
function cloneDeep(obj: any): any {
  return JSON.parse(JSON.stringify(obj))
}
