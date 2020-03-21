import { MetaWithFacets } from './MetaWithFacets'

export interface ListPageWithFacets<TItem, TFacetsXp = any> {
  Items?: TItem[]
  Meta?: MetaWithFacets<TFacetsXp>
}
