class CookieService {
  public get(cookieName: string): string {
    const rows = document.cookie.split(';')
    for (const row of rows) {
      const [key, val] = row.split('=')
      const cookieKey = decodeURIComponent(key.trim().toLowerCase())
      if (cookieKey === cookieName.toLowerCase()) {
        return decodeURIComponent(val)
      }
    }
    return ''
  }

  public set(cookieName: string, cookieVal: string): void {
    const cookie = `${encodeURIComponent(cookieName)}=${encodeURIComponent(
      cookieVal
    )};expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/`
    document.cookie = cookie
  }

  public remove(cookieName: string): void {
    document.cookie = `${decodeURIComponent(
      cookieName.trim()
    )}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
  }
}

export default new CookieService()
