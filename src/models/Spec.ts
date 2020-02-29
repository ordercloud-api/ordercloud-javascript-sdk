import { SpecOption } from './SpecOption';

export interface Spec<TSpecXp = any, TOptionsXp = any> {
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