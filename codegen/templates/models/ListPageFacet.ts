import { MetaWithFacets } from './MetaWithFacets'

export interface ListPageFacet<TItem, TFacetsXp = any> {
  Items?: TItem[]
  Meta?: MetaWithFacets<TFacetsXp>
}
