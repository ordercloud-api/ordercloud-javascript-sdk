import { AddedPromo } from './AddedPromo';
import { RemovedPromo } from './RemovedPromo';

export interface RefreshPromosResponse<TPromosAddedXp = any, TPromosRemovedXp = any> {
    PromosAdded?: AddedPromo<TPromosAddedXp>[]
    PromosRemoved?: RemovedPromo<TPromosRemovedXp>[]
}