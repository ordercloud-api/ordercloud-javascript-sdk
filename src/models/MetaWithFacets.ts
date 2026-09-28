import { ListFacet } from './ListFacet';

export interface MetaWithFacets<TListFacet extends ListFacet = ListFacet> {
    Facets?: TListFacet[]
    Page?: number
    PageSize?: number
    TotalCount?: number
    TotalPages?: number
    ItemRange?: number[]
    NextPageKey?: string
}