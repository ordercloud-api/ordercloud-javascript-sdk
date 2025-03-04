import { Order } from './Order';
import { LineItem } from './LineItem';
import { OrderPromotion } from './OrderPromotion';
import { Subscription } from './Subscription';
import { ShipEstimateResponse } from './ShipEstimateResponse';
import { OrderCalculateResponse } from './OrderCalculateResponse';
import { OrderSubmitResponse } from './OrderSubmitResponse';
import { OrderSubmitForApprovalResponse } from './OrderSubmitForApprovalResponse';
import { OrderApprovedResponse } from './OrderApprovedResponse';
import { SubscriptionIntegrationResponse } from './SubscriptionIntegrationResponse';

export interface OrderWorksheet<TFromUserXp = any, TBillingAddressXp = any, TOrderXp = any, TProductXp = any, TVariantXp = any, TShippingAddressXp = any, TShipFromAddressXp = any, TLineItemsXp = any, TOrderPromotionsXp = any, TSubscriptionXp = any, TShipEstimatesXp = any, TShipEstimateResponseXp = any, TOrderCalculateResponseXp = any, TOrderSubmitResponseXp = any, TOrderSubmitForApprovalResponseXp = any, TOrderApprovedResponseXp = any, TSubscriptionIntegrationResponseXp = any> {
    Order?: Order<TOrderXp,TFromUserXp,TBillingAddressXp>
    LineItems?: LineItem<TLineItemsXp,TProductXp,TVariantXp,TShippingAddressXp,TShipFromAddressXp>[]
    OrderPromotions?: OrderPromotion<TOrderPromotionsXp>[]
    Subscription?: Subscription<TSubscriptionXp>
    ShipEstimateResponse?: ShipEstimateResponse<TShipEstimateResponseXp,TShipEstimatesXp>
    OrderCalculateResponse?: OrderCalculateResponse<TOrderCalculateResponseXp>
    OrderSubmitResponse?: OrderSubmitResponse<TOrderSubmitResponseXp>
    OrderSubmitForApprovalResponse?: OrderSubmitForApprovalResponse<TOrderSubmitForApprovalResponseXp>
    OrderApprovedResponse?: OrderApprovedResponse<TOrderApprovedResponseXp>
    SubscriptionIntegrationResponse?: SubscriptionIntegrationResponse<TSubscriptionIntegrationResponseXp>
}