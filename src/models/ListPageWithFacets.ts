import { MetaWithFacets } from './MetaWithFacets'

/**
 * @typeParam TItem represents the type for each item in the list
 */
export interface ListPageWithFacets<TItem, TFacetsXp = any> {
  Items?: TItem[]
  Meta?: MetaWithFacets<TFacetsXp>
}
