import { ListFacet } from './ListFacet';

export interface MetaWithFacets<TFacetsXp = any> {
    Facets?: ListFacet<TFacetsXp>[]
    Page?: number
    PageSize?: number
    TotalCount?: number
    TotalPages?: number
    ItemRange?: number[]
    NextPageKey?: string
}