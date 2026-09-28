import { ListFacet } from './ListFacet'
import { MetaWithFacets } from './MetaWithFacets'

/**
 * @typeParam TItem represents the type for each item in the list
 * @typeParam TListFacet represents the facet model, including that facet's xp
 */
export interface ListPageWithFacets<
  TItem,
  TListFacet extends ListFacet = ListFacet
> {
  Items?: TItem[]
  Meta?: MetaWithFacets<TListFacet>
}
