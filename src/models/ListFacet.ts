import { ListFacetValue } from './ListFacetValue';

export interface ListFacet<TListFacetXp = any> {
    Name?: string
    XpPath?: string
    Values?: ListFacetValue[]
    xp?: TListFacetXp
}