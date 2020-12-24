module.exports = {
  'roots': ['../'],
  'transform': {
    '^.+\\.tsx?$': 'ts-jest',
  },
  'testPathIgnorePatterns': ['cookie-api.test.ts'], // there aren't cookies on server
  'testEnvironment': 'node',
}
