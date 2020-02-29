
export interface Supplier<TSupplierXp = any> {
    ID?: string
    Name: string
    Active?: boolean
    xp?: TSupplierXp
}