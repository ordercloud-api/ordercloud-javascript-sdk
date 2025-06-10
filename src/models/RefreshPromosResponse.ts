import { AddedPromo } from './AddedPromo';
import { RemovedPromo } from './RemovedPromo';

export interface RefreshPromosResponse {
    PromosAdded?: AddedPromo[]
    PromosRemoved?: RemovedPromo[]
}