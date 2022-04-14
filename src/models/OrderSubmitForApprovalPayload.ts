import { Environment } from './Environment'
import { OrderWorksheet } from './OrderWorksheet'

export interface OrderSubmitForApprovalPayload<TConfigData = any> {
  OrderWorksheet: OrderWorksheet
  Environment: Environment
  OrderCloudAccessToken: string
  ConfigData: TConfigData
}
