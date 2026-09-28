import { OrderReturn } from './OrderReturn'
import { OrderWorksheet } from './OrderWorksheet'

export interface OrderReturnCalculatePayload<
  TOrderReturn extends OrderReturn = OrderReturn,
  TOrderWorksheet extends OrderWorksheet = OrderWorksheet
> {
  OrderReturn?: TOrderReturn
  OrderWorksheet?: TOrderWorksheet
}
