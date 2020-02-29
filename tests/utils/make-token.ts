export default function makeToken(
  expiresInMilliSeconds: number = Date.now() + 1000 * (60 * 10), // (valid) 10 minutes from now
  clientID: string = 'mock-client-id'
): string {
  // return a mock token with an updated expiration
  const jwt = {
    'usr': 'testbuyer',
    'cid': clientID,
    'u': '1920563',
    'usrtype': 'buyer',
    'role': ['FullAccess'],
    'iss': 'https://auth.ordercloud.io',
    'aud': 'https://api.ordercloud.io',
    'exp': Date.now() - expiresInMilliSeconds,
    'nbf': 1565364989,
  }
  return [
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    btoa(JSON.stringify(jwt)),
    'tuWzEMa4lH2zx4zrab3X4d1uTFFwEAs7pfOZ_yQHV14',
  ].join('.')
}
