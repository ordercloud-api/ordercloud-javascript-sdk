import { SpecOption } from './SpecOption';

export interface Spec<TSpecXp = any, TOptionsXp = any> {
    OwnerID?: string
    ID?: string
    ListOrder?: number
    Name: string
    DefaultValue?: string
    Required?: boolean
    AllowOpenText?: boolean
    DefaultOptionID?: string
    DefinesVariant?: boolean
    xp?: TSpecXp
    readonly OptionCount?: number
    readonly Options?: SpecOption<TOptionsXp>[]
}