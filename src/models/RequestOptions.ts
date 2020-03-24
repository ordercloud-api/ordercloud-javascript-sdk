import { CancelToken } from 'axios'

export interface RequestOptions {
  accessToken?: string
  cancelToken?: CancelToken
}
