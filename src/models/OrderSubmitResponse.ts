
export interface OrderSubmitResponse<TOrderSubmitResponseXp = any> {
    HttpStatusCode?: number
    UnhandledErrorBody?: string
    xp?: TOrderSubmitResponseXp
}