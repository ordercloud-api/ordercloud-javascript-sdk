// jsdom in this Jest version does not provide fetch Response.
if (typeof global.Response === 'undefined') {
  class Response {
    constructor(body, init = {}) {
      this._body = body == null ? '' : String(body)
      this.status = init.status == null ? 200 : init.status
      this.statusText = init.statusText || ''
      this.ok = this.status >= 200 && this.status < 300
      this.headers = {
        get() {
          return null
        },
      }
    }

    text() {
      return Promise.resolve(this._body)
    }
  }

  global.Response = Response
}
