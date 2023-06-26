import { AccessLevel } from './AccessLevel';

export interface ProductCollection<TProductCollectionXp = any> {
    ID?: string
    Name?: string
    xp?: TProductCollectionXp
    AccessLevel?: AccessLevel
}