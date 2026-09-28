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

export interface OrderWorksheet<TOrder extends Order = Order, TLineItem extends LineItem = LineItem, TOrderPromotion extends OrderPromotion = OrderPromotion, TSubscription extends Subscription = Subscription, TShipEstimateResponse extends ShipEstimateResponse = ShipEstimateResponse, TOrderCalculateResponse extends OrderCalculateResponse = OrderCalculateResponse, TOrderSubmitResponse extends OrderSubmitResponse = OrderSubmitResponse, TOrderSubmitForApprovalResponse extends OrderSubmitForApprovalResponse = OrderSubmitForApprovalResponse, TOrderApprovedResponse extends OrderApprovedResponse = OrderApprovedResponse, TSubscriptionIntegrationResponse extends SubscriptionIntegrationResponse = SubscriptionIntegrationResponse> {
    Order?: TOrder
    LineItems?: TLineItem[]
    OrderPromotions?: TOrderPromotion[]
    Subscription?: TSubscription
    ShipEstimateResponse?: TShipEstimateResponse
    OrderCalculateResponse?: TOrderCalculateResponse
    OrderSubmitResponse?: TOrderSubmitResponse
    OrderSubmitForApprovalResponse?: TOrderSubmitForApprovalResponse
    OrderApprovedResponse?: TOrderApprovedResponse
    SubscriptionIntegrationResponse?: TSubscriptionIntegrationResponse
}