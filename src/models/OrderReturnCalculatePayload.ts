import { OrderReturn } from './OrderReturn'
import { OrderWorksheet } from './OrderWorksheet'

export interface OrderReturnCalculatePayload<
  TOrderReturnXp = any,
  TFromUserXp = any,
  TBillingAddressXp = any,
  TOrderXp = any,
  TProductXp = any,
  TVariantXp = any,
  TShippingAddressXp = any,
  TShipFromAddressXp = any,
  TLineItemsXp = any,
  TOrderPromotionsXp = any,
  TShipEstimatesXp = any,
  TShipEstimateResponseXp = any,
  TOrderCalculateResponseXp = any,
  TOrderSubmitResponseXp = any,
  TOrderSubmitForApprovalResponseXp = any,
  TOrderApprovedResponseXp = any
> {
  OrderReturn?: OrderReturn<TOrderReturnXp>
  OrderWorksheet?: OrderWorksheet<
    TFromUserXp,
    TBillingAddressXp,
    TOrderXp,
    TProductXp,
    TVariantXp,
    TShippingAddressXp,
    TShipFromAddressXp,
    TLineItemsXp,
    TOrderPromotionsXp,
    TShipEstimatesXp,
    TShipEstimateResponseXp,
    TOrderCalculateResponseXp,
    TOrderSubmitResponseXp,
    TOrderSubmitForApprovalResponseXp,
    TOrderApprovedResponseXp
  >
}
