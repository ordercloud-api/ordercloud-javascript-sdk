import cookieApi from '../src/utils/CookieApi'
import MockDate from 'mockdate'

beforeEach(() => {
  deleteAllCookies()
})

test('should remove cookie when it is present', () => {
  document.cookie = 'mockCookie=mockValue'
  cookieApi.write('mockCookie', undefined, {})
  expect(document.cookie).toEqual('')
})

test('should do nothing when removing a nonexisting cookie', () => {
  document.cookie = 'mockCookie=mockValue'
  cookieApi.write('someothercookiethatdoesntexist', undefined, {})
  expect(document.cookie).toEqual('mockCookie=mockValue')
})

test('it should create and store a new cookie', () => {
  cookieApi.write('mockCookie', 'value', {})
  expect(document.cookie).toEqual('mockCookie=value')
})

test('it should update an existing cookie', () => {
  document.cookie = 'mockCookie=oldvalue'
  cookieApi.write('mockCookie', 'newValue', {})
  expect(document.cookie).toEqual('mockCookie=newValue')
})

test('it should read a cookie', () => {
  document.cookie = 'firstCookie=value1;'
  expect(cookieApi.read('firstCookie')).toEqual('value1')
})

test('it should read correctly read cookie when there are multiple', () => {
  document.cookie = 'firstCookie=value1;'
  document.cookie = 'secondCookie=value2;'
  document.cookie = 'thirdCookie=value3;'
  expect(cookieApi.read('secondCookie')).toEqual('value2')
})

test('should accept path option', () => {
  const cookieString = cookieApi.buildCookieString('myCookie', 'myCookieVal', {
    path: '/mypath',
  })
  const path = getValFromCookieString(cookieString, 'path')
  expect(path).toEqual('/mypath')
})

test('should accept domain option', () => {
  const cookieString = cookieApi.buildCookieString('myCookie', 'myCookieVal', {
    domain: '.example.com',
  })
  const domain = getValFromCookieString(cookieString, 'domain')
  expect(domain).toEqual('.example.com')
})

test('should accept secure option', () => {
  const cookieString = cookieApi.buildCookieString('myCookie', 'myCookieVal', {
    secure: true,
  })
  expect(cookieString).toContain('secure')
})

test('should accept "lax" as samesite option', () => {
  const cookieString = cookieApi.buildCookieString('myCookie', 'myCookieVal', {
    samesite: 'lax',
  })
  const samesite = getValFromCookieString(cookieString, 'samesite')
  expect(samesite).toEqual('lax')
})

test('should accept "strict" as samesite option', () => {
  const cookieString = cookieApi.buildCookieString('myCookie', 'myCookieVal', {
    samesite: 'strict',
  })
  const samesite = getValFromCookieString(cookieString, 'samesite')
  expect(samesite).toEqual('strict')
})

test('should accept "none" as samesite option', () => {
  const cookieString = cookieApi.buildCookieString('myCookie', 'myCookieVal', {
    samesite: 'none',
  })
  const samesite = getValFromCookieString(cookieString, 'samesite')
  expect(samesite).toEqual('none')
})

test('should set expiration date to a year after current date', () => {
  MockDate.set(1608829845699) // mock date to 12/24/2020

  const cookieString = cookieApi.buildCookieString(
    'myCookie',
    'myCookieVal',
    {}
  )
  const expires = getValFromCookieString(cookieString, 'expires')
  expect(expires).toEqual('Fri, 24 Dec 2021 17:10:45 GMT')

  MockDate.reset() // stop mocking date
})
test('should always use epoch time as expire time on remove', function() {
  const cookieString = cookieApi.buildCookieString('myCookie', undefined, {})
  const expires = getValFromCookieString(cookieString, 'expires')
  expect(expires).toEqual('Thu, 01 Jan 1970 00:00:00 GMT')
})

function deleteAllCookies() {
  const cookies = document.cookie.split(';')
  const path = window.location.pathname

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    const parts = path.split('/')
    while (parts.length) {
      document.cookie =
        name +
        '=;path=' +
        (parts.join('/') || '/') +
        ';expires=Thu, 01 Jan 1970 00:00:00 GMT'
      parts.pop()
    }
  }
}

function getValFromCookieString(cookieString: string, propertyName: string) {
  let result = ''
  cookieString.split(';').forEach(keyval => {
    const [key, val] = keyval.split('=')
    if (key === propertyName) {
      result = val
    }
  })
  return result
}
