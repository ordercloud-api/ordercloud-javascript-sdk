import { CancelToken } from 'axios'

export interface RequestOptions {
  accessToken?: string
  cancellationToken?: CancelToken
}
