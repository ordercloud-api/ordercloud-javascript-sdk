import paramsSerializer from '../src/utils/paramsSerializer'

test('should paramsSerializer.serialize top-level params', () => {
  const params = {
    filters: {
      DateSubmitted: '>2018-04-20',
    },
  }
  expect(paramsSerializer.serialize(params)).toBe('DateSubmitted=%3E2018-04-20')
})

test('should handle filters', () => {
  const params = {
    filters: {
      LastName: 'Smith*',
    },
  }
  expect(paramsSerializer.serialize(params)).toBe('LastName=Smith*')
})

test('should handle arrays on filters', () => {
  const params = {
    filters: {
      'xp.Color': ['!red', '!blue'],
    },
  }
  expect(paramsSerializer.serialize(params)).toBe(
    'xp.Color=!red&xp.Color=!blue'
  )
})

test('should handle mixed arrays and values filters', () => {
  const params = {
    filters: {
      FirstName: 'Bob',
      'xp.Color': ['!red', '!blue'],
    },
  }
  expect(paramsSerializer.serialize(params)).toBe(
    'FirstName=Bob&xp.Color=!red&xp.Color=!blue'
  )
})

test('should throw if value is null', () => {
  const params = {
    filters: {
      FirstName: null,
    },
  }
  expect(() => paramsSerializer.serialize(params)).toThrow(
    `Null is not a valid filter prop. Use negative filter "!" combined with wildcard filter "*" to define a filter for the absence of a value. \nex: an order list call with { xp: { hasPaid: '!*' } } would return a list of orders where xp.hasPaid is null or undefined\nhttps://ordercloud.io/features/advanced-querying#filtering`
  )
})

test('should ignore undefined values', () => {
  const params = {
    filters: {
      FirstName: 'Bob',
      LastName: undefined,
      'xp.FavoriteColor': 'red',
    },
  }
  expect(paramsSerializer.serialize(params)).toBe(
    'FirstName=Bob&xp.FavoriteColor=red'
  )
})

test('should allow false boolean', () => {
  const params = {
    filters: {
      FirstName: 'Bob',
      IsSubmitted: false,
    },
  }
  expect(paramsSerializer.serialize(params)).toBe(
    'FirstName=Bob&IsSubmitted=false'
  )
})

test('should allow true boolean', () => {
  const params = {
    filters: {
      FirstName: 'Bob',
      IsSubmitted: true,
    },
  }
  expect(paramsSerializer.serialize(params)).toBe(
    'FirstName=Bob&IsSubmitted=true'
  )
})

test('should allow number filters', () => {
  const params = {
    filters: {
      SpecCount: 3,
    },
  }
  expect(paramsSerializer.serialize(params)).toBe('SpecCount=3')
})

test('should not drop 0 filters', () => {
  const params = {
    filters: {
      SpecCount: 0,
    },
  }
  expect(paramsSerializer.serialize(params)).toBe('SpecCount=0')
})
