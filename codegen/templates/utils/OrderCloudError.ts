interface ApiError {
  ErrorCode: string
  Message: string
  Data: any
}

export default class OrderCloudError extends Error {
  isOrderCloudError: true
  request?: any
  response: any
  errors?: ApiError[]
  status: number
  errorCode: string
  statusText: string

  constructor(ex) {
    const errors = safeParseErrors(ex) // extract ordercloud errors from response
    const firstError = errors?.[0] // most of the time there is just one error

    super(getMessage(ex, firstError))
    this.isOrderCloudError = true
    this.errors = errors
    this.name = 'OrderCloudError'
    this.errorCode = getErrorCode(firstError)
    this.status = ex.response.status
    this.statusText = ex.response.statusText
    this.response = ex.response
    this.request = ex.request
  }
}

/**
 * @ignore
 * not part of public api, don't include in generated docs
 */
function safeParseErrors(ex): ApiError[] {
  try {
    let value = ex?.response?.data
    if (!value) {
      return []
    }
    if (typeof value === 'object') {
      return value.Errors
    }
    if (typeof value === 'string') {
      // axios sometimes returns a string, so we must deserialize it ourselves
      if (value && value.charCodeAt(0) === 65279) {
        // there seems to be a BOM character at the beginning
        // of this string that causes json parsing to fail
        value = value.substring(1)
      }
      const data = JSON.parse(value)
      return data.Errors
    }
    return value
  } catch (e) {
    return []
  }
}

/**
 * @ignore
 * not part of public api, don't include in generated docs
 */
function getMessage(ex, error?: ApiError): string {
  if (!error) {
    return ex.response.statusText
  }
  switch (error.ErrorCode) {
    case 'NotFound':
      return `${error.Data.ObjectType} ${error.Data.ObjectID} not found`
    default:
      return error.Message
  }
}

/**
 * @ignore
 * not part of public api, don't include in generated docs
 */
function getErrorCode(error?: ApiError): string {
  if (!error) {
    return 'OrderCloudError'
  }
  return error.ErrorCode
}
