/**
 * Thrown when a caller aborts a request through `requestOptions.signal`.
 * This is not an OrderCloud API error.
 */
export class CancellationError extends Error {
  isCancellation = true as const

  constructor(message = 'This request was cancelled') {
    super(message)
    this.name = 'CancellationError'
  }
}

export function isCancellation(error: unknown): error is CancellationError {
  return (
    !!error &&
    typeof error === 'object' &&
    (error as { isCancellation?: boolean }).isCancellation === true
  )
}

/**
 * Thrown when a request exceeds `timeoutInMilliseconds`.
 * This is not an OrderCloud API error.
 */
export class TimeoutError extends Error {
  isTimeout = true as const

  constructor(message = 'This request timed out') {
    super(message)
    this.name = 'TimeoutError'
  }
}
