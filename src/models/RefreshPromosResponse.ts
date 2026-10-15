import { AddedPromo } from './AddedPromo';
import { RemovedPromo } from './RemovedPromo';

export interface RefreshPromosResponse<TAddedPromo extends AddedPromo = AddedPromo, TRemovedPromo extends RemovedPromo = RemovedPromo> {
    PromosAdded?: TAddedPromo[]
    PromosRemoved?: TRemovedPromo[]
}