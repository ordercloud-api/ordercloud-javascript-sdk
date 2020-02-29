
export interface CostCenter<TCostCenterXp = any> {
    ID?: string
    Name: string
    Description?: string
    xp?: TCostCenterXp
}