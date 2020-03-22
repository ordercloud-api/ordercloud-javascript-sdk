import { Meta } from './Meta'

/**
 * @typeParam TItem represents the type for each item in the list
 */
export interface ListPage<TItem> {
  Items?: TItem[]
  Meta?: Meta
}
