import { LineItemReturnCalculation } from './LineItemReturnCalculation'

export interface OrderReturnCalculateResponse {
  RefundAmount?: number
  ItemsToReturnCalcs?: LineItemReturnCalculation[]
}
