/**
 * @ignore
 * not part of public api, don't include in generated docs
 */
function safeParseErrors(ex): ErrorDetails[] | null {
  try {
    let str = ex?.response?.data
    if (!str || typeof str !== 'string') {
      return null
    }
    if (str && str.charCodeAt(0) === 65279) {
      // there seems to be a BOM character at the beginning
      // of this string that causes json parsing to fail
      str = str.substr(1)
    }
    const data = JSON.parse(str)
    return data.Errors
  } catch (e) {
    return null
  }
}

function getMessage(ex, firstError?: ErrorDetails) {
  if (!firstError) {
    return ex.response.statusText
  }
  switch (firstError.ErrorCode) {
    case 'NotFound':
      return `${firstError.Data.ObjectType} ${firstError.Data.ObjectID} not found`
    default:
      return firstError.Message
  }
}

interface ErrorDetails {
  ErrorCode: string
  Message: string
  Data: any
}

export default class OrderCloudError extends Error {
  isOrderCloudError: true
  request?: any
  response: any
  errors?: ErrorDetails[]
  status: number
  errorCode: string
  statusText: string

  constructor(ex) {
    const errors = safeParseErrors(ex) // extract ordercloud errors array from response
    const firstError = errors?.[0] // most of the time there is just one error

    super(getMessage(ex, firstError))
    this.isOrderCloudError = true
    this.errors = errors
    this.name = 'OrderCloudError'
    this.errorCode = firstError?.ErrorCode ?? 'OrderCloudError'
    this.status = ex.response.status
    this.statusText = ex.response.statusText
    this.response = ex.response
    this.request = ex.request
  }
}
