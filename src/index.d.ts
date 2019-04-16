export as namespace OrderCloudSDK;

export interface AccessToken {
    access_token?: string;
    expires_in?: number;
    token_type?: string;
    refresh_token?: string;
}

export interface Address {
    AddressName?: string;
    City?: string;
    ID?: string;
    DateCreated?: string;
    CompanyName?: string;
    FirstName?: string;
    LastName?: string;
    Street1?: string;
    Street2?: string;
    State?: string;
    Zip?: string;
    Country?: string;
    Phone?: string;
    xp?: any;
}

export interface AddressAssignment {
    AddressID?: string;
    UserID?: string;
    UserGroupID?: string;
    IsShipping?: boolean;
    IsBilling?: boolean;
}

export interface ApiClient {
    ID?: string;
    ClientSecret?: string;
    AccessTokenDuration?: number;
    Active?: boolean;
    AppName?: string;
    RefreshTokenDuration?: number;
    DefaultContextUserName?: string;
    xp?: any;
    AllowAnyBuyer?: boolean;
    AllowAnySupplier?: boolean;
    AllowSeller?: boolean;
    IsAnonBuyer?: boolean;
    AssignedBuyerCount?: number;
    AssignedSupplierCount?: number;
}

export interface ApiClientAssignment {
    ApiClientID?: string;
    BuyerID?: string;
    SupplierID?: string;
}

export interface ApprovalRule {
    ID?: string;
    Name?: string;
    Description?: string;
    ApprovingGroupID?: string;
    RuleExpression?: string;
    xp?: any;
}

export interface Buyer {
    ID?: string;
    Name?: string;
    DefaultCatalogID?: string;
    Active?: boolean;
    xp?: any;
}

export interface BuyerAddress {
    ID?: string;
    Shipping?: boolean;
    Billing?: boolean;
    Editable?: boolean;
    DateCreated?: string;
    CompanyName?: string;
    FirstName?: string;
    LastName?: string;
    Street1?: string;
    Street2?: string;
    City?: string;
    State?: string;
    Zip?: string;
    Country?: string;
    Phone?: string;
    AddressName?: string;
    xp?: any;
}

export interface BuyerCreditCard {
    ID?: string;
    Editable?: boolean;
    Token?: string;
    DateCreated?: string;
    CardType?: string;
    PartialAccountNumber?: string;
    CardholderName?: string;
    ExpirationDate?: string;
    xp?: any;
}

export interface BuyerProduct {
    PriceSchedule?: PriceSchedule;
    ID?: string;
    Name?: string;
    Description?: string;
    QuantityMultiplier?: number;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    Active?: boolean;
    SpecCount?: number;
    xp?: any;
    VariantCount?: number;
    ShipFromAddressID?: string;
    Inventory?: Inventory;
    DefaultSupplierID?: string;
}

export interface BuyerSpec {
    Options?: SpecOption[];
    ID?: string;
    ListOrder?: number;
    Name?: string;
    DefaultValue?: string;
    Required?: boolean;
    AllowOpenText?: boolean;
    DefaultOptionID?: string;
    DefinesVariant?: boolean;
    xp?: any;
}

export interface Catalog {
    ID?: string;
    Name?: string;
    Description?: string;
    Active?: boolean;
    CategoryCount?: number;
    xp?: any;
}

export interface CatalogAssignment {
    CatalogID?: string;
    BuyerID?: string;
    ViewAllCategories?: boolean;
    ViewAllProducts?: boolean;
}

export interface Category {
    ID?: string;
    Name?: string;
    Description?: string;
    ListOrder?: number;
    Active?: boolean;
    ParentID?: string;
    ChildCount?: number;
    xp?: any;
}

export interface CategoryAssignment {
    CategoryID?: string;
    BuyerID?: string;
    UserGroupID?: string;
    Visible?: boolean;
    ViewAllProducts?: boolean;
}

export interface CategoryProductAssignment {
    CategoryID?: string;
    ProductID?: string;
    ListOrder?: number;
}

export interface CostCenter {
    ID?: string;
    Name?: string;
    Description?: string;
    xp?: any;
}

export interface CostCenterAssignment {
    CostCenterID?: string;
    UserGroupID?: string;
}

export interface CreditCard {
    ID?: string;
    Token?: string;
    DateCreated?: string;
    CardType?: string;
    PartialAccountNumber?: string;
    CardholderName?: string;
    ExpirationDate?: string;
    xp?: any;
}

export interface CreditCardAssignment {
    CreditCardID?: string;
    UserID?: string;
    UserGroupID?: string;
}

export interface ImpersonateTokenRequest {
    ClientID?: string;
    Roles?: string[];
}

export interface ImpersonationConfig {
    ID?: string;
    ImpersonationBuyerID?: string;
    ImpersonationGroupID?: string;
    ImpersonationUserID?: string;
    BuyerID?: string;
    GroupID?: string;
    UserID?: string;
    SecurityProfileID?: string;
    ClientID?: string;
}

export interface Incrementor {
    ID?: string;
    Name?: string;
    LastNumber?: number;
    LeftPaddingCount?: number;
}

export interface Inventory {
    Enabled?: boolean;
    NotificationPoint?: number;
    VariantLevelTracking?: boolean;
    OrderCanExceed?: boolean;
    QuantityAvailable?: number;
    LastUpdated?: string;
}

export interface LineItem {
    ID?: string;
    ProductID?: string;
    Quantity?: number;
    DateAdded?: string;
    QuantityShipped?: number;
    UnitPrice?: number;
    LineTotal?: number;
    CostCenter?: string;
    DateNeeded?: string;
    ShippingAccount?: string;
    ShippingAddressID?: string;
    ShipFromAddressID?: string;
    Product?: LineItemProduct;
    Variant?: LineItemVariant;
    ShippingAddress?: Address;
    ShipFromAddress?: Address;
    SupplierID?: string;
    Specs?: LineItemSpec[];
    xp?: any;
}

export interface LineItemProduct {
    ID?: string;
    Name?: string;
    Description?: string;
    QuantityMultiplier?: number;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    xp?: any;
}

export interface LineItemSpec {
    SpecID?: string;
    Name?: string;
    OptionID?: string;
    Value?: string;
}

export interface LineItemVariant {
    ID?: string;
    Name?: string;
    Description?: string;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    xp?: any;
}

export interface ListAddress {
    Items?: Address[];
    Meta?: Meta;
}

export interface ListAddressAssignment {
    Items?: AddressAssignment[];
    Meta?: Meta;
}

export interface ListApiClient {
    Items?: ApiClient[];
    Meta?: Meta;
}

export interface ListApiClientAssignment {
    Items?: ApiClientAssignment[];
    Meta?: Meta;
}

export interface ListApprovalRule {
    Items?: ApprovalRule[];
    Meta?: Meta;
}

export interface ListBuyer {
    Items?: Buyer[];
    Meta?: Meta;
}

export interface ListBuyerAddress {
    Items?: BuyerAddress[];
    Meta?: Meta;
}

export interface ListBuyerCreditCard {
    Items?: BuyerCreditCard[];
    Meta?: Meta;
}

export interface ListBuyerProduct {
    Items?: BuyerProduct[];
    Meta?: MetaWithFacets;
}

export interface ListBuyerSpec {
    Items?: BuyerSpec[];
    Meta?: Meta;
}

export interface ListCatalog {
    Items?: Catalog[];
    Meta?: Meta;
}

export interface ListCatalogAssignment {
    Items?: CatalogAssignment[];
    Meta?: Meta;
}

export interface ListCategory {
    Items?: Category[];
    Meta?: Meta;
}

export interface ListCategoryAssignment {
    Items?: CategoryAssignment[];
    Meta?: Meta;
}

export interface ListCategoryProductAssignment {
    Items?: CategoryProductAssignment[];
    Meta?: Meta;
}

export interface ListCostCenter {
    Items?: CostCenter[];
    Meta?: Meta;
}

export interface ListCostCenterAssignment {
    Items?: CostCenterAssignment[];
    Meta?: Meta;
}

export interface ListCreditCard {
    Items?: CreditCard[];
    Meta?: Meta;
}

export interface ListCreditCardAssignment {
    Items?: CreditCardAssignment[];
    Meta?: Meta;
}

export interface ListFacet {
    Name?: string;
    XpPath?: string;
    Values?: ListFacetValue[];
    xp?: any;
}

export interface ListFacetValue {
    Value?: string;
    Count?: number;
}

export interface ListImpersonationConfig {
    Items?: ImpersonationConfig[];
    Meta?: Meta;
}

export interface ListIncrementor {
    Items?: Incrementor[];
    Meta?: Meta;
}

export interface ListLineItem {
    Items?: LineItem[];
    Meta?: Meta;
}

export interface ListMessageCCListenerAssignment {
    Items?: MessageCCListenerAssignment[];
    Meta?: Meta;
}

export interface ListMessageSender {
    Items?: MessageSender[];
    Meta?: Meta;
}

export interface ListMessageSenderAssignment {
    Items?: MessageSenderAssignment[];
    Meta?: Meta;
}

export interface ListOpenIdConnect {
    Items?: OpenIdConnect[];
    Meta?: Meta;
}

export interface ListOrder {
    Items?: Order[];
    Meta?: Meta;
}

export interface ListOrderApproval {
    Items?: OrderApproval[];
    Meta?: Meta;
}

export interface ListOrderPromotion {
    Items?: OrderPromotion[];
    Meta?: Meta;
}

export interface ListPayment {
    Items?: Payment[];
    Meta?: Meta;
}

export interface ListPriceSchedule {
    Items?: PriceSchedule[];
    Meta?: Meta;
}

export interface ListProduct {
    Items?: Product[];
    Meta?: Meta;
}

export interface ListProductAssignment {
    Items?: ProductAssignment[];
    Meta?: Meta;
}

export interface ListProductCatalogAssignment {
    Items?: ProductCatalogAssignment[];
    Meta?: Meta;
}

export interface ListProductFacet {
    Items?: ProductFacet[];
    Meta?: Meta;
}

export interface ListPromotion {
    Items?: Promotion[];
    Meta?: Meta;
}

export interface ListPromotionAssignment {
    Items?: PromotionAssignment[];
    Meta?: Meta;
}

export interface ListSecurityProfile {
    Items?: SecurityProfile[];
    Meta?: Meta;
}

export interface ListSecurityProfileAssignment {
    Items?: SecurityProfileAssignment[];
    Meta?: Meta;
}

export interface ListShipment {
    Items?: Shipment[];
    Meta?: Meta;
}

export interface ListShipmentItem {
    Items?: ShipmentItem[];
    Meta?: Meta;
}

export interface ListSpec {
    Items?: Spec[];
    Meta?: Meta;
}

export interface ListSpecOption {
    Items?: SpecOption[];
    Meta?: Meta;
}

export interface ListSpecProductAssignment {
    Items?: SpecProductAssignment[];
    Meta?: Meta;
}

export interface ListSpendingAccount {
    Items?: SpendingAccount[];
    Meta?: Meta;
}

export interface ListSpendingAccountAssignment {
    Items?: SpendingAccountAssignment[];
    Meta?: Meta;
}

export interface ListSupplier {
    Items?: Supplier[];
    Meta?: Meta;
}

export interface ListUser {
    Items?: User[];
    Meta?: Meta;
}

export interface ListUserGroup {
    Items?: UserGroup[];
    Meta?: Meta;
}

export interface ListUserGroupAssignment {
    Items?: UserGroupAssignment[];
    Meta?: Meta;
}

export interface ListVariant {
    Items?: Variant[];
    Meta?: Meta;
}

export interface MeBuyer {
    ID?: string;
    DefaultCatalogID?: string;
}

export interface MeSupplier {
    ID?: string;
}

export interface MeUser {
    Buyer?: MeBuyer;
    Supplier?: MeSupplier;
    ID?: string;
    Username?: string;
    Password?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Phone?: string;
    TermsAccepted?: string;
    Active?: boolean;
    xp?: any;
    AvailableRoles?: string[];
}

export interface MessageCCListenerAssignment {
    MessageSenderAssignment?: MessageSenderAssignment;
    MessageConfigName?: string;
    MessageConfigDescription?: string;
    MessageType?: string;
    BuyerID?: string;
    SupplierID?: string;
    UserGroupID?: string;
    UserID?: string;
}

export interface MessageSender {
    ID?: string;
    Name?: string;
    MessageTypes?: string[];
    Description?: string;
    URL?: string;
    ElevatedRoles?: string[];
    SharedKey?: string;
    xp?: any;
}

export interface MessageSenderAssignment {
    MessageSenderID?: string;
    BuyerID?: string;
    SupplierID?: string;
    UserGroupID?: string;
    MessageConfigName?: string;
    MessageConfigDescription?: string;
}

export interface Meta {
    Page?: number;
    PageSize?: number;
    TotalCount?: number;
    TotalPages?: number;
    ItemRange?: number[];
}

export interface MetaWithFacets {
    Facets?: ListFacet[];
    Page?: number;
    PageSize?: number;
    TotalCount?: number;
    TotalPages?: number;
    ItemRange?: number[];
}

export interface OpenIdConnect {
    ID?: string;
    OrderCloudApiClientID?: string;
    ConnectClientID?: string;
    ConnectClientSecret?: string;
    AppStartUrl?: string;
    AuthorizationEndpoint?: string;
    TokenEndpoint?: string;
}

export interface Order {
    ID?: string;
    FromUser?: User;
    FromCompanyID?: string;
    FromUserID?: string;
    BillingAddressID?: string;
    BillingAddress?: Address;
    ShippingAddressID?: string;
    Comments?: string;
    LineItemCount?: number;
    Status?: string;
    DateCreated?: string;
    DateSubmitted?: string;
    DateApproved?: string;
    DateDeclined?: string;
    DateCanceled?: string;
    DateCompleted?: string;
    Subtotal?: number;
    ShippingCost?: number;
    TaxCost?: number;
    PromotionDiscount?: number;
    Total?: number;
    IsSubmitted?: boolean;
    xp?: any;
}

export interface OrderApproval {
    ApprovalRuleID?: string;
    ApprovingGroupID?: string;
    Status?: string;
    AllowResubmit?: boolean;
    DateCreated?: string;
    DateCompleted?: string;
    Approver?: User;
    Comments?: string;
}

export interface OrderApprovalInfo {
    Comments?: string;
    AllowResubmit?: boolean;
}

export interface OrderPromotion {
    Amount?: number;
    ID?: string;
    Code?: string;
    Name?: string;
    RedemptionLimit?: number;
    RedemptionLimitPerUser?: number;
    RedemptionCount?: number;
    Description?: string;
    FinePrint?: string;
    StartDate?: string;
    ExpirationDate?: string;
    EligibleExpression?: string;
    ValueExpression?: string;
    CanCombine?: boolean;
    xp?: any;
}

export interface PartialAddress {
    AddressName?: string;
    City?: string;
    ID?: string;
    DateCreated?: string;
    CompanyName?: string;
    FirstName?: string;
    LastName?: string;
    Street1?: string;
    Street2?: string;
    State?: string;
    Zip?: string;
    Country?: string;
    Phone?: string;
    xp?: any;
}

export interface PartialApiClient {
    ID?: string;
    ClientSecret?: string;
    AccessTokenDuration?: number;
    Active?: boolean;
    AppName?: string;
    RefreshTokenDuration?: number;
    DefaultContextUserName?: string;
    xp?: any;
    AllowAnyBuyer?: boolean;
    AllowAnySupplier?: boolean;
    AllowSeller?: boolean;
    IsAnonBuyer?: boolean;
    AssignedBuyerCount?: number;
    AssignedSupplierCount?: number;
}

export interface PartialApprovalRule {
    ID?: string;
    Name?: string;
    Description?: string;
    ApprovingGroupID?: string;
    RuleExpression?: string;
    xp?: any;
}

export interface PartialBuyer {
    ID?: string;
    Name?: string;
    DefaultCatalogID?: string;
    Active?: boolean;
    xp?: any;
}

export interface PartialBuyerAddress {
    ID?: string;
    Shipping?: boolean;
    Billing?: boolean;
    Editable?: boolean;
    DateCreated?: string;
    CompanyName?: string;
    FirstName?: string;
    LastName?: string;
    Street1?: string;
    Street2?: string;
    City?: string;
    State?: string;
    Zip?: string;
    Country?: string;
    Phone?: string;
    AddressName?: string;
    xp?: any;
}

export interface PartialBuyerCreditCard {
    ID?: string;
    Editable?: boolean;
    Token?: string;
    DateCreated?: string;
    CardType?: string;
    PartialAccountNumber?: string;
    CardholderName?: string;
    ExpirationDate?: string;
    xp?: any;
}

export interface PartialCatalog {
    ID?: string;
    Name?: string;
    Description?: string;
    Active?: boolean;
    CategoryCount?: number;
    xp?: any;
}

export interface PartialCategory {
    ID?: string;
    Name?: string;
    Description?: string;
    ListOrder?: number;
    Active?: boolean;
    ParentID?: string;
    ChildCount?: number;
    xp?: any;
}

export interface PartialCostCenter {
    ID?: string;
    Name?: string;
    Description?: string;
    xp?: any;
}

export interface PartialCreditCard {
    ID?: string;
    Token?: string;
    DateCreated?: string;
    CardType?: string;
    PartialAccountNumber?: string;
    CardholderName?: string;
    ExpirationDate?: string;
    xp?: any;
}

export interface PartialImpersonationConfig {
    ID?: string;
    ImpersonationBuyerID?: string;
    ImpersonationGroupID?: string;
    ImpersonationUserID?: string;
    BuyerID?: string;
    GroupID?: string;
    UserID?: string;
    SecurityProfileID?: string;
    ClientID?: string;
}

export interface PartialIncrementor {
    ID?: string;
    Name?: string;
    LastNumber?: number;
    LeftPaddingCount?: number;
}

export interface PartialInventory {
    Enabled?: boolean;
    NotificationPoint?: number;
    VariantLevelTracking?: boolean;
    OrderCanExceed?: boolean;
    QuantityAvailable?: number;
    LastUpdated?: string;
}

export interface PartialLineItem {
    ID?: string;
    ProductID?: string;
    Quantity?: number;
    DateAdded?: string;
    QuantityShipped?: number;
    UnitPrice?: number;
    LineTotal?: number;
    CostCenter?: string;
    DateNeeded?: string;
    ShippingAccount?: string;
    ShippingAddressID?: string;
    ShipFromAddressID?: string;
    Product?: LineItemProduct;
    Variant?: LineItemVariant;
    ShippingAddress?: Address;
    ShipFromAddress?: Address;
    SupplierID?: string;
    Specs?: LineItemSpec[];
    xp?: any;
}

export interface PartialLineItemProduct {
    ID?: string;
    Name?: string;
    Description?: string;
    QuantityMultiplier?: number;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    xp?: any;
}

export interface PartialLineItemSpec {
    SpecID?: string;
    Name?: string;
    OptionID?: string;
    Value?: string;
}

export interface PartialLineItemVariant {
    ID?: string;
    Name?: string;
    Description?: string;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    xp?: any;
}

export interface PartialMeBuyer {
    ID?: string;
    DefaultCatalogID?: string;
}

export interface PartialMeSupplier {
    ID?: string;
}

export interface PartialMeUser {
    Buyer?: MeBuyer;
    Supplier?: MeSupplier;
    ID?: string;
    Username?: string;
    Password?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Phone?: string;
    TermsAccepted?: string;
    Active?: boolean;
    xp?: any;
    AvailableRoles?: string[];
}

export interface PartialMessageSender {
    ID?: string;
    Name?: string;
    MessageTypes?: string[];
    Description?: string;
    URL?: string;
    ElevatedRoles?: string[];
    SharedKey?: string;
    xp?: any;
}

export interface PartialOpenIdConnect {
    ID?: string;
    OrderCloudApiClientID?: string;
    ConnectClientID?: string;
    ConnectClientSecret?: string;
    AppStartUrl?: string;
    AuthorizationEndpoint?: string;
    TokenEndpoint?: string;
}

export interface PartialOrder {
    ID?: string;
    FromUser?: User;
    FromCompanyID?: string;
    FromUserID?: string;
    BillingAddressID?: string;
    BillingAddress?: Address;
    ShippingAddressID?: string;
    Comments?: string;
    LineItemCount?: number;
    Status?: string;
    DateCreated?: string;
    DateSubmitted?: string;
    DateApproved?: string;
    DateDeclined?: string;
    DateCanceled?: string;
    DateCompleted?: string;
    Subtotal?: number;
    ShippingCost?: number;
    TaxCost?: number;
    PromotionDiscount?: number;
    Total?: number;
    IsSubmitted?: boolean;
    xp?: any;
}

export interface PartialPayment {
    ID?: string;
    Type?: string;
    DateCreated?: string;
    CreditCardID?: string;
    SpendingAccountID?: string;
    Description?: string;
    Amount?: number;
    Accepted?: boolean;
    xp?: any;
    Transactions?: PaymentTransaction[];
}

export interface PartialPaymentTransaction {
    ID?: string;
    Type?: string;
    DateExecuted?: string;
    Amount?: number;
    Succeeded?: boolean;
    ResultCode?: string;
    ResultMessage?: string;
    xp?: any;
}

export interface PartialPriceBreak {
    Quantity?: number;
    Price?: number;
}

export interface PartialPriceSchedule {
    ID?: string;
    Name?: string;
    ApplyTax?: boolean;
    ApplyShipping?: boolean;
    MinQuantity?: number;
    MaxQuantity?: number;
    UseCumulativeQuantity?: boolean;
    RestrictedQuantity?: boolean;
    PriceBreaks?: PriceBreak[];
    xp?: any;
}

export interface PartialProduct {
    Description?: string;
    DefaultPriceScheduleID?: string;
    ID?: string;
    Name?: string;
    QuantityMultiplier?: number;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    Active?: boolean;
    SpecCount?: number;
    xp?: any;
    VariantCount?: number;
    ShipFromAddressID?: string;
    Inventory?: Inventory;
    DefaultSupplierID?: string;
}

export interface PartialProductFacet {
    ID?: string;
    Name?: string;
    XpPath?: string;
    ListOrder?: number;
    MinCount?: number;
    xp?: any;
}

export interface PartialPromotion {
    ID?: string;
    Code?: string;
    Name?: string;
    RedemptionLimit?: number;
    RedemptionLimitPerUser?: number;
    RedemptionCount?: number;
    Description?: string;
    FinePrint?: string;
    StartDate?: string;
    ExpirationDate?: string;
    EligibleExpression?: string;
    ValueExpression?: string;
    CanCombine?: boolean;
    xp?: any;
}

export interface PartialShipment {
    ID?: string;
    BuyerID?: string;
    Shipper?: string;
    DateShipped?: string;
    DateDelivered?: string;
    TrackingNumber?: string;
    Cost?: number;
    xp?: any;
    Account?: string;
    FromAddressID?: string;
    ToAddressID?: string;
    FromAddress?: Address;
    ToAddress?: Address;
}

export interface PartialSpec {
    OptionCount?: number;
    ID?: string;
    ListOrder?: number;
    Name?: string;
    DefaultValue?: string;
    Required?: boolean;
    AllowOpenText?: boolean;
    DefaultOptionID?: string;
    DefinesVariant?: boolean;
    xp?: any;
}

export interface PartialSpecOption {
    ID?: string;
    Value?: string;
    ListOrder?: number;
    IsOpenText?: boolean;
    PriceMarkupType?: string;
    PriceMarkup?: number;
    xp?: any;
}

export interface PartialSpendingAccount {
    ID?: string;
    Name?: string;
    Balance?: number;
    AllowAsPaymentMethod?: boolean;
    RedemptionCode?: string;
    StartDate?: string;
    EndDate?: string;
    xp?: any;
}

export interface PartialSupplier {
    ID?: string;
    Name?: string;
    Active?: boolean;
    xp?: any;
}

export interface PartialUser {
    ID?: string;
    Username?: string;
    Password?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Phone?: string;
    TermsAccepted?: string;
    Active?: boolean;
    xp?: any;
    AvailableRoles?: string[];
}

export interface PartialUserGroup {
    ID?: string;
    Name?: string;
    Description?: string;
    xp?: any;
}

export interface PartialVariant {
    ID?: string;
    Name?: string;
    Description?: string;
    Active?: boolean;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    Inventory?: VariantInventory;
    xp?: any;
}

export interface PartialVariantInventory {
    QuantityAvailable?: number;
    LastUpdated?: string;
}

export interface PasswordReset {
    ClientID?: string;
    Username?: string;
    Password?: string;
}

export interface PasswordResetRequest {
    ClientID?: string;
    Email?: string;
    Username?: string;
    URL?: string;
}

export interface Payment {
    ID?: string;
    Type?: string;
    DateCreated?: string;
    CreditCardID?: string;
    SpendingAccountID?: string;
    Description?: string;
    Amount?: number;
    Accepted?: boolean;
    xp?: any;
    Transactions?: PaymentTransaction[];
}

export interface PaymentTransaction {
    ID?: string;
    Type?: string;
    DateExecuted?: string;
    Amount?: number;
    Succeeded?: boolean;
    ResultCode?: string;
    ResultMessage?: string;
    xp?: any;
}

export interface PriceBreak {
    Quantity?: number;
    Price?: number;
}

export interface PriceSchedule {
    ID?: string;
    Name?: string;
    ApplyTax?: boolean;
    ApplyShipping?: boolean;
    MinQuantity?: number;
    MaxQuantity?: number;
    UseCumulativeQuantity?: boolean;
    RestrictedQuantity?: boolean;
    PriceBreaks?: PriceBreak[];
    xp?: any;
}

export interface Product {
    Description?: string;
    DefaultPriceScheduleID?: string;
    ID?: string;
    Name?: string;
    QuantityMultiplier?: number;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    Active?: boolean;
    SpecCount?: number;
    xp?: any;
    VariantCount?: number;
    ShipFromAddressID?: string;
    Inventory?: Inventory;
    DefaultSupplierID?: string;
}

export interface ProductAssignment {
    ProductID?: string;
    BuyerID?: string;
    UserGroupID?: string;
    PriceScheduleID?: string;
}

export interface ProductCatalogAssignment {
    CatalogID?: string;
    ProductID?: string;
}

export interface ProductFacet {
    ID?: string;
    Name?: string;
    XpPath?: string;
    ListOrder?: number;
    MinCount?: number;
    xp?: any;
}

export interface Promotion {
    ID?: string;
    Code?: string;
    Name?: string;
    RedemptionLimit?: number;
    RedemptionLimitPerUser?: number;
    RedemptionCount?: number;
    Description?: string;
    FinePrint?: string;
    StartDate?: string;
    ExpirationDate?: string;
    EligibleExpression?: string;
    ValueExpression?: string;
    CanCombine?: boolean;
    xp?: any;
}

export interface PromotionAssignment {
    PromotionID?: string;
    BuyerID?: string;
    UserGroupID?: string;
}

export interface SecurityProfile {
    ID?: string;
    Name?: string;
    Roles?: string[];
}

export interface SecurityProfileAssignment {
    SecurityProfileID?: string;
    BuyerID?: string;
    SupplierID?: string;
    UserID?: string;
    UserGroupID?: string;
}

export interface Shipment {
    ID?: string;
    BuyerID?: string;
    Shipper?: string;
    DateShipped?: string;
    DateDelivered?: string;
    TrackingNumber?: string;
    Cost?: number;
    xp?: any;
    Account?: string;
    FromAddressID?: string;
    ToAddressID?: string;
    FromAddress?: Address;
    ToAddress?: Address;
}

export interface ShipmentItem {
    OrderID?: string;
    LineItemID?: string;
    QuantityShipped?: number;
    UnitPrice?: number;
    CostCenter?: string;
    DateNeeded?: string;
    Product?: LineItemProduct;
    Variant?: LineItemVariant;
    Specs?: LineItemSpec[];
    xp?: any;
}

export interface Spec {
    OptionCount?: number;
    ID?: string;
    ListOrder?: number;
    Name?: string;
    DefaultValue?: string;
    Required?: boolean;
    AllowOpenText?: boolean;
    DefaultOptionID?: string;
    DefinesVariant?: boolean;
    xp?: any;
}

export interface SpecOption {
    ID?: string;
    Value?: string;
    ListOrder?: number;
    IsOpenText?: boolean;
    PriceMarkupType?: string;
    PriceMarkup?: number;
    xp?: any;
}

export interface SpecProductAssignment {
    SpecID?: string;
    ProductID?: string;
    DefaultValue?: string;
    DefaultOptionID?: string;
}

export interface SpendingAccount {
    ID?: string;
    Name?: string;
    Balance?: number;
    AllowAsPaymentMethod?: boolean;
    RedemptionCode?: string;
    StartDate?: string;
    EndDate?: string;
    xp?: any;
}

export interface SpendingAccountAssignment {
    SpendingAccountID?: string;
    UserID?: string;
    UserGroupID?: string;
    AllowExceed?: boolean;
}

export interface Supplier {
    ID?: string;
    Name?: string;
    Active?: boolean;
    xp?: any;
}

export interface TokenPasswordReset {
    NewPassword?: string;
}

export interface User {
    ID?: string;
    Username?: string;
    Password?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Phone?: string;
    TermsAccepted?: string;
    Active?: boolean;
    xp?: any;
    AvailableRoles?: string[];
}

export interface UserGroup {
    ID?: string;
    Name?: string;
    Description?: string;
    xp?: any;
}

export interface UserGroupAssignment {
    UserGroupID?: string;
    UserID?: string;
}

export interface Variant {
    ID?: string;
    Name?: string;
    Description?: string;
    Active?: boolean;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    Inventory?: VariantInventory;
    xp?: any;
}

export interface VariantInventory {
    QuantityAvailable?: number;
    LastUpdated?: string;
}


interface SdkInstance {
    baseApiPath: string;
    baseAuthPath: string;
    defaultHeaders: any;
    impersonation: boolean;
    timeout: number;
    authentications: {
        oauth2: {
            type: 'basic' | 'apiKey' | 'oauth2';
            accessToken: string;
            impersonationToken: string;
        }
        
    }
}

export type ApiRole = "ApiClientAdmin" | "ApiClientReader" | "AddressAdmin" | "AddressReader" | "AdminAddressAdmin" | "AdminAddressReader" | "AdminUserAdmin" | "AdminUserGroupAdmin" | "AdminUserGroupReader" | "AdminUserReader" | "ApprovalRuleAdmin" | "ApprovalRuleReader" | "BuyerAdmin" | "BuyerImpersonation" | "BuyerReader" | "BuyerUserAdmin" | "BuyerUserReader" | "CatalogAdmin" | "CatalogReader" | "CategoryAdmin" | "CategoryReader" | "CostCenterAdmin" | "CostCenterReader" | "CreditCardAdmin" | "CreditCardReader" | "FullAccess" | "IncrementorAdmin" | "IncrementorReader" | "InventoryAdmin" | "MeAddressAdmin" | "MeAdmin" | "MeCreditCardAdmin" | "MessageConfigAssignmentAdmin" | "MeXpAdmin" | "OrderAdmin" | "OrderReader" | "OverrideShipping" | "OverrideTax" | "OverrideUnitPrice" | "PasswordReset" | "PriceScheduleAdmin" | "PriceScheduleReader" | "ProductAdmin" | "ProductAssignmentAdmin" | "ProductFacetAdmin" | "ProductFacetReader" | "ProductReader" | "PromotionAdmin" | "PromotionReader" | "SetSecurityProfile" | "ShipmentAdmin" | "ShipmentReader" | "Shopper" | "SpendingAccountAdmin" | "SpendingAccountReader" | "SupplierAddressAdmin" | "SupplierAddressReader" | "SupplierAdmin" | "SupplierReader" | "SupplierUserAdmin" | "SupplierUserGroupAdmin" | "SupplierUserGroupReader" | "SupplierUserReader" | "UnsubmittedOrderReader" | "UserGroupAdmin" | "UserGroupReader";

export interface DecodedToken {
  /**
   * the ordercloud username
   */
  usr: string;

  /**
   * the client id used when making token request
   */
  cid: string;

  /**
   * helpful for identifying user types in an app
   * that may have both types
   */
  usrtype: 'admin' | 'buyer' | 'supplier';

  /**
   * list of security profile roles that this user
   * has access to, read more about security profile roles
   * [here](https://developer.ordercloud.io/documentation/platform-guides/authentication/security-profiles)
   */
  role: ApiRole[];

  /**
   * the issuer of the token - should always be https://auth.ordercloud.io
   */
  iss: string;

  /**
   * the audience - who should be consuming this token
   * this should always be https://api.ordercloud.io (the ordercloud api)
   */
  aud: string;

  /**
   * expiration of the token (in seconds) since the
   * UNIX epoch (January 1, 1970 00:00:00 UTC)
   */
  exp: number;

  /**
   * point at which token was issued (in seconds) since the
   * UNIX epoch (January 1, 1970 00:00:00 UTC)
   */
  nbf: number;

  /**
   * the order id assigned to the anonymous user,
   * this value will *only* exist for anonymous users
   */
  orderid?: string;
}

export namespace Sdk {
    export let instance: SdkInstance;
}

export namespace Auth {

    /**
    * @param username username of the user logging in
    * @param password password of the user logging in
    * @param clientID clientID of the application the user is logging into
    * @param scope security profile roles being requested
    */
    export function Login(username: string, password: string, clientID: string, scope: ApiRole[]): Promise<AccessToken>

    /**
    * @param clientSecret of the application
    * @param username of the user logging in
    * @param password of the user logging in
    * @param clientID of the application the user is logging into
    * @param scope security profile roles being requested
    */
    export function ElevatedLogin(clientSecret: string, username: string, password: string, clientID: string, scope: ApiRole[]): Promise<AccessToken>

    /**
    * @param clientSecret of the application
    * @param clientID of the application the user is logging into
    * @param scope security profile roles being requested
    */
    export function ClientCredentials(clientSecret: string, clientID: string, scope: ApiRole[]): Promise<AccessToken>

    /**
    * @param refreshToken of the application
    * @param clientID of the application the user is logging into
    * @param scope security profile roles being requested
    */
    export function RefreshToken(refreshToken: string, clientID: string, scope: ApiRole[]): Promise<AccessToken>

    /**
    * @param clientID of the application the user is logging into
    * @param scope security profile roles being requested
    */
    export function Anonymous(clientID: string, scope: ApiRole[]): Promise<AccessToken>
}

export function As()

export namespace Addresses {

    /**
     * @param buyerID ID of the buyer.
     * @param address 
     */
    export function Create(buyerID: string, address: Address): Promise<Address>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param addressID ID of the address.
     */
    export function Delete(buyerID: string, addressID: string): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param addressID ID of the address.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     */
    export function DeleteAssignment(buyerID: string, addressID: string, options?: { userID?: string, userGroupID?: string }): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param addressID ID of the address.
     */
    export function Get(buyerID: string, addressID: string): Promise<Address>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListAddress>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.addressID ID of the address.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the address assignment. Possible values: User, Group, Company.
     * @param options.isShipping Is shipping of the address assignment.
     * @param options.isBilling Is billing of the address assignment.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(buyerID: string, options?: { addressID?: string, userID?: string, userGroupID?: string, level?: string, isShipping?: boolean, isBilling?: boolean, page?: number, pageSize?: number }): Promise<ListAddressAssignment>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param addressID ID of the address.
     * @param partialAddress 
     */
    export function Patch(buyerID: string, addressID: string, partialAddress: Address): Promise<Address>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param addressID ID of the address.
     * @param address 
     */
    export function Save(buyerID: string, addressID: string, address: Address): Promise<Address>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param addressAssignment 
     */
    export function SaveAssignment(buyerID: string, addressAssignment: AddressAssignment): Promise<void>    
    
}

export namespace AdminAddresses {

    /**
     * @param address 
     */
    export function Create(address: Address): Promise<Address>    
    
    /**
     * @param addressID ID of the address.
     */
    export function Delete(addressID: string): Promise<void>    
    
    /**
     * @param addressID ID of the address.
     */
    export function Get(addressID: string): Promise<Address>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListAddress>    
    
    /**
     * @param addressID ID of the address.
     * @param partialAddress 
     */
    export function Patch(addressID: string, partialAddress: Address): Promise<Address>    
    
    /**
     * @param addressID ID of the address.
     * @param address 
     */
    export function Save(addressID: string, address: Address): Promise<Address>    
    
}

export namespace AdminUsers {

    /**
     * @param user 
     */
    export function Create(user: User): Promise<User>    
    
    /**
     * @param userID ID of the user.
     */
    export function Delete(userID: string): Promise<void>    
    
    /**
     * @param userID ID of the user.
     */
    export function Get(userID: string): Promise<User>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListUser>    
    
    /**
     * @param userID ID of the user.
     * @param partialUser 
     */
    export function Patch(userID: string, partialUser: User): Promise<User>    
    
    /**
     * @param userID ID of the user.
     * @param user 
     */
    export function Save(userID: string, user: User): Promise<User>    
    
}

export namespace AdminUserGroups {

    /**
     * @param userGroup 
     */
    export function Create(userGroup: UserGroup): Promise<UserGroup>    
    
    /**
     * @param userGroupID ID of the user group.
     */
    export function Delete(userGroupID: string): Promise<void>    
    
    /**
     * @param userGroupID ID of the user group.
     * @param userID ID of the user.
     */
    export function DeleteUserAssignment(userGroupID: string, userID: string): Promise<void>    
    
    /**
     * @param userGroupID ID of the user group.
     */
    export function Get(userGroupID: string): Promise<UserGroup>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListUserGroup>    
    
    /**
     * @param options.userGroupID ID of the user group.
     * @param options.userID ID of the user.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListUserAssignments(options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number }): Promise<ListUserGroupAssignment>    
    
    /**
     * @param userGroupID ID of the user group.
     * @param partialUserGroup 
     */
    export function Patch(userGroupID: string, partialUserGroup: UserGroup): Promise<UserGroup>    
    
    /**
     * @param userGroupID ID of the user group.
     * @param userGroup 
     */
    export function Save(userGroupID: string, userGroup: UserGroup): Promise<UserGroup>    
    
    /**
     * @param userGroupAssignment 
     */
    export function SaveUserAssignment(userGroupAssignment: UserGroupAssignment): Promise<void>    
    
}

export namespace ApiClients {

    /**
     * @param apiClient 
     */
    export function Create(apiClient: ApiClient): Promise<ApiClient>    
    
    /**
     * @param apiClientID ID of the api client.
     */
    export function Delete(apiClientID: string): Promise<void>    
    
    /**
     * @param apiClientID ID of the api client.
     * @param buyerID ID of the buyer.
     */
    export function DeleteBuyerAssignment(apiClientID: string, buyerID: string): Promise<void>    
    
    /**
     * @param apiClientID ID of the api client.
     * @param supplierID ID of the supplier.
     */
    export function DeleteSupplierAssignment(apiClientID: string, supplierID: string): Promise<void>    
    
    /**
     * @param apiClientID ID of the api client.
     */
    export function Get(apiClientID: string): Promise<ApiClient>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListApiClient>    
    
    /**
     * @param options.apiClientID ID of the api client.
     * @param options.buyerID ID of the buyer.
     * @param options.supplierID ID of the supplier.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(options?: { apiClientID?: string, buyerID?: string, supplierID?: string, page?: number, pageSize?: number }): Promise<ListApiClientAssignment>    
    
    /**
     * @param apiClientID ID of the api client.
     * @param partialApiClient 
     */
    export function Patch(apiClientID: string, partialApiClient: ApiClient): Promise<ApiClient>    
    
    /**
     * @param apiClientID ID of the api client.
     * @param apiClient 
     */
    export function Save(apiClientID: string, apiClient: ApiClient): Promise<ApiClient>    
    
    /**
     * @param apiClientAssignment 
     */
    export function SaveAssignment(apiClientAssignment: ApiClientAssignment): Promise<void>    
    
}

export namespace ApprovalRules {

    /**
     * @param buyerID ID of the buyer.
     * @param approvalRule 
     */
    export function Create(buyerID: string, approvalRule: ApprovalRule): Promise<ApprovalRule>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param approvalRuleID ID of the approval rule.
     */
    export function Delete(buyerID: string, approvalRuleID: string): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param approvalRuleID ID of the approval rule.
     */
    export function Get(buyerID: string, approvalRuleID: string): Promise<ApprovalRule>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListApprovalRule>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param approvalRuleID ID of the approval rule.
     * @param partialApprovalRule 
     */
    export function Patch(buyerID: string, approvalRuleID: string, partialApprovalRule: ApprovalRule): Promise<ApprovalRule>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param approvalRuleID ID of the approval rule.
     * @param approvalRule 
     */
    export function Save(buyerID: string, approvalRuleID: string, approvalRule: ApprovalRule): Promise<ApprovalRule>    
    
}

export namespace Buyers {

    /**
     * @param buyer 
     */
    export function Create(buyer: Buyer): Promise<Buyer>    
    
    /**
     * @param buyerID ID of the buyer.
     */
    export function Delete(buyerID: string): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     */
    export function Get(buyerID: string): Promise<Buyer>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListBuyer>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param partialBuyer 
     */
    export function Patch(buyerID: string, partialBuyer: Buyer): Promise<Buyer>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param buyer 
     */
    export function Save(buyerID: string, buyer: Buyer): Promise<Buyer>    
    
}

export namespace Catalogs {

    /**
     * @param catalog 
     */
    export function Create(catalog: Catalog): Promise<Catalog>    
    
    /**
     * @param catalogID ID of the catalog.
     */
    export function Delete(catalogID: string): Promise<void>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param options.buyerID ID of the buyer.
     */
    export function DeleteAssignment(catalogID: string, options?: { buyerID?: string }): Promise<void>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param productID ID of the product.
     */
    export function DeleteProductAssignment(catalogID: string, productID: string): Promise<void>    
    
    /**
     * @param catalogID ID of the catalog.
     */
    export function Get(catalogID: string): Promise<Catalog>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListCatalog>    
    
    /**
     * @param options.catalogID ID of the catalog.
     * @param options.buyerID ID of the buyer.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(options?: { catalogID?: string, buyerID?: string, page?: number, pageSize?: number }): Promise<ListCatalogAssignment>    
    
    /**
     * @param options.catalogID ID of the catalog.
     * @param options.productID ID of the product.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListProductAssignments(options?: { catalogID?: string, productID?: string, page?: number, pageSize?: number }): Promise<ListProductCatalogAssignment>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param partialCatalog 
     */
    export function Patch(catalogID: string, partialCatalog: Catalog): Promise<Catalog>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param catalog 
     */
    export function Save(catalogID: string, catalog: Catalog): Promise<Catalog>    
    
    /**
     * @param catalogAssignment 
     */
    export function SaveAssignment(catalogAssignment: CatalogAssignment): Promise<void>    
    
    /**
     * @param productCatalogAssignment 
     */
    export function SaveProductAssignment(productCatalogAssignment: ProductCatalogAssignment): Promise<void>    
    
}

export namespace Categories {

    /**
     * @param catalogID ID of the catalog.
     * @param category 
     */
    export function Create(catalogID: string, category: Category): Promise<Category>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param categoryID ID of the category.
     */
    export function Delete(catalogID: string, categoryID: string): Promise<void>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param categoryID ID of the category.
     * @param options.buyerID ID of the buyer.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     */
    export function DeleteAssignment(catalogID: string, categoryID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string }): Promise<void>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param categoryID ID of the category.
     * @param productID ID of the product.
     */
    export function DeleteProductAssignment(catalogID: string, categoryID: string, productID: string): Promise<void>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param categoryID ID of the category.
     */
    export function Get(catalogID: string, categoryID: string): Promise<Category>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param options.depth Depth of the category.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(catalogID: string, options?: { depth?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListCategory>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param options.categoryID ID of the category.
     * @param options.buyerID ID of the buyer.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the category assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(catalogID: string, options?: { categoryID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }): Promise<ListCategoryAssignment>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param options.categoryID ID of the category.
     * @param options.productID ID of the product.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListProductAssignments(catalogID: string, options?: { categoryID?: string, productID?: string, page?: number, pageSize?: number }): Promise<ListCategoryProductAssignment>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param categoryID ID of the category.
     * @param partialCategory 
     */
    export function Patch(catalogID: string, categoryID: string, partialCategory: Category): Promise<Category>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param categoryID ID of the category.
     * @param category 
     */
    export function Save(catalogID: string, categoryID: string, category: Category): Promise<Category>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param categoryAssignment 
     */
    export function SaveAssignment(catalogID: string, categoryAssignment: CategoryAssignment): Promise<void>    
    
    /**
     * @param catalogID ID of the catalog.
     * @param categoryProductAssignment 
     */
    export function SaveProductAssignment(catalogID: string, categoryProductAssignment: CategoryProductAssignment): Promise<void>    
    
}

export namespace CostCenters {

    /**
     * @param buyerID ID of the buyer.
     * @param costCenter 
     */
    export function Create(buyerID: string, costCenter: CostCenter): Promise<CostCenter>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param costCenterID ID of the cost center.
     */
    export function Delete(buyerID: string, costCenterID: string): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param costCenterID ID of the cost center.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     */
    export function DeleteAssignment(buyerID: string, costCenterID: string, options?: { userID?: string, userGroupID?: string }): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param costCenterID ID of the cost center.
     */
    export function Get(buyerID: string, costCenterID: string): Promise<CostCenter>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListCostCenter>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.costCenterID ID of the cost center.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the cost center assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(buyerID: string, options?: { costCenterID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }): Promise<ListCostCenterAssignment>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param costCenterID ID of the cost center.
     * @param partialCostCenter 
     */
    export function Patch(buyerID: string, costCenterID: string, partialCostCenter: CostCenter): Promise<CostCenter>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param costCenterID ID of the cost center.
     * @param costCenter 
     */
    export function Save(buyerID: string, costCenterID: string, costCenter: CostCenter): Promise<CostCenter>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param costCenterAssignment 
     */
    export function SaveAssignment(buyerID: string, costCenterAssignment: CostCenterAssignment): Promise<void>    
    
}

export namespace CreditCards {

    /**
     * @param buyerID ID of the buyer.
     * @param creditCard 
     */
    export function Create(buyerID: string, creditCard: CreditCard): Promise<CreditCard>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     */
    export function Delete(buyerID: string, creditCardID: string): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     */
    export function DeleteAssignment(buyerID: string, creditCardID: string, options?: { userID?: string, userGroupID?: string }): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     */
    export function Get(buyerID: string, creditCardID: string): Promise<CreditCard>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListCreditCard>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.creditCardID ID of the credit card.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the credit card assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(buyerID: string, options?: { creditCardID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }): Promise<ListCreditCardAssignment>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     * @param partialCreditCard 
     */
    export function Patch(buyerID: string, creditCardID: string, partialCreditCard: CreditCard): Promise<CreditCard>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     * @param creditCard 
     */
    export function Save(buyerID: string, creditCardID: string, creditCard: CreditCard): Promise<CreditCard>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param creditCardAssignment 
     */
    export function SaveAssignment(buyerID: string, creditCardAssignment: CreditCardAssignment): Promise<void>    
    
}

export namespace ImpersonationConfigs {

    /**
     * @param impersonationConfig 
     */
    export function Create(impersonationConfig: ImpersonationConfig): Promise<ImpersonationConfig>    
    
    /**
     * @param impersonationConfigID ID of the impersonation config.
     */
    export function Delete(impersonationConfigID: string): Promise<void>    
    
    /**
     * @param impersonationConfigID ID of the impersonation config.
     */
    export function Get(impersonationConfigID: string): Promise<ImpersonationConfig>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListImpersonationConfig>    
    
    /**
     * @param impersonationConfigID ID of the impersonation config.
     * @param partialImpersonationConfig 
     */
    export function Patch(impersonationConfigID: string, partialImpersonationConfig: ImpersonationConfig): Promise<ImpersonationConfig>    
    
    /**
     * @param impersonationConfigID ID of the impersonation config.
     * @param impersonationConfig 
     */
    export function Save(impersonationConfigID: string, impersonationConfig: ImpersonationConfig): Promise<ImpersonationConfig>    
    
}

export namespace Incrementors {

    /**
     * @param incrementor 
     */
    export function Create(incrementor: Incrementor): Promise<Incrementor>    
    
    /**
     * @param incrementorID ID of the incrementor.
     */
    export function Delete(incrementorID: string): Promise<void>    
    
    /**
     * @param incrementorID ID of the incrementor.
     */
    export function Get(incrementorID: string): Promise<Incrementor>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListIncrementor>    
    
    /**
     * @param incrementorID ID of the incrementor.
     * @param partialIncrementor 
     */
    export function Patch(incrementorID: string, partialIncrementor: Incrementor): Promise<Incrementor>    
    
    /**
     * @param incrementorID ID of the incrementor.
     * @param incrementor 
     */
    export function Save(incrementorID: string, incrementor: Incrementor): Promise<Incrementor>    
    
}

export namespace LineItems {

    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param lineItem 
     */
    export function Create(direction: string, orderID: string, lineItem: LineItem): Promise<LineItem>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param lineItemID ID of the line item.
     */
    export function Delete(direction: string, orderID: string, lineItemID: string): Promise<void>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param lineItemID ID of the line item.
     */
    export function Get(direction: string, orderID: string, lineItemID: string): Promise<LineItem>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListLineItem>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param lineItemID ID of the line item.
     * @param partialLineItem 
     */
    export function Patch(direction: string, orderID: string, lineItemID: string, partialLineItem: LineItem): Promise<LineItem>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param lineItemID ID of the line item.
     * @param partialAddress 
     */
    export function PatchShippingAddress(direction: string, orderID: string, lineItemID: string, partialAddress: Address): Promise<LineItem>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param lineItemID ID of the line item.
     * @param lineItem 
     */
    export function Save(direction: string, orderID: string, lineItemID: string, lineItem: LineItem): Promise<LineItem>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param lineItemID ID of the line item.
     * @param address 
     */
    export function SetShippingAddress(direction: string, orderID: string, lineItemID: string, address: Address): Promise<LineItem>    
    
}

export namespace Me {

    /**
     * @param buyerAddress 
     */
    export function CreateAddress(buyerAddress: BuyerAddress): Promise<BuyerAddress>    
    
    /**
     * @param buyerCreditCard 
     */
    export function CreateCreditCard(buyerCreditCard: BuyerCreditCard): Promise<BuyerCreditCard>    
    
    /**
     * @param addressID ID of the address.
     */
    export function DeleteAddress(addressID: string): Promise<void>    
    
    /**
     * @param creditcardID ID of the creditcard.
     */
    export function DeleteCreditCard(creditcardID: string): Promise<void>    
    
    /**
     */
    export function Get(): Promise<MeUser>    
    
    /**
     * @param addressID ID of the address.
     */
    export function GetAddress(addressID: string): Promise<BuyerAddress>    
    
    /**
     * @param catalogID ID of the catalog.
     */
    export function GetCatalog(catalogID: string): Promise<Catalog>    
    
    /**
     * @param categoryID ID of the category.
     * @param options.catalogID ID of the catalog.
     */
    export function GetCategory(categoryID: string, options?: { catalogID?: string }): Promise<Category>    
    
    /**
     * @param creditcardID ID of the creditcard.
     */
    export function GetCreditCard(creditcardID: string): Promise<BuyerCreditCard>    
    
    /**
     * @param productID ID of the product.
     */
    export function GetProduct(productID: string): Promise<BuyerProduct>    
    
    /**
     * @param promotionID ID of the promotion.
     */
    export function GetPromotion(promotionID: string): Promise<Promotion>    
    
    /**
     * @param shipmentID ID of the shipment.
     */
    export function GetShipment(shipmentID: string): Promise<Shipment>    
    
    /**
     * @param productID ID of the product.
     * @param specID ID of the spec.
     * @param options.catalogID ID of the catalog.
     */
    export function GetSpec(productID: string, specID: string, options?: { catalogID?: string }): Promise<BuyerSpec>    
    
    /**
     * @param spendingAccountID ID of the spending account.
     */
    export function GetSpendingAccount(spendingAccountID: string): Promise<SpendingAccount>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListAddresses(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListBuyerAddress>    
    
    /**
     * @param options.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
     * @param options.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListApprovableOrders(options?: { from?: string, to?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListOrder>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListCatalogs(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListCatalog>    
    
    /**
     * @param options.depth Indicates how deep down the hierarchy to return results. Valid values are a number of 1 or greater, or &#39;all&#39;. Relative to ParentID if specified. Default is 1.
     * @param options.catalogID ID of the catalog.
     * @param options.productID ID of the product.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListCategories(options?: { depth?: string, catalogID?: string, productID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListCategory>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListCostCenters(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListCostCenter>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListCreditCards(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListBuyerCreditCard>    
    
    /**
     * @param options.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
     * @param options.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListOrders(options?: { from?: string, to?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListOrder>    
    
    /**
     * @param options.catalogID ID of the catalog.
     * @param options.categoryID ID of the category.
     * @param options.depth Indicates how deep down the category hierarchy to return results. Valid values are a number of 1 or greater, or &#39;all&#39;. Relative to CategoryID if specified, otherwise top level of the Catalog. Default is &#39;all&#39;.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListProducts(options?: { catalogID?: string, categoryID?: string, depth?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListBuyerProduct>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListPromotions(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListPromotion>    
    
    /**
     * @param shipmentID ID of the shipment.
     * @param options.orderID ID of the order.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListShipmentItems(shipmentID: string, options?: { orderID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListShipmentItem>    
    
    /**
     * @param options.orderID ID of the order.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListShipments(options?: { orderID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListShipment>    
    
    /**
     * @param productID ID of the product.
     * @param options.catalogID ID of the catalog.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListSpecs(productID: string, options?: { catalogID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListBuyerSpec>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListSpendingAccounts(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListSpendingAccount>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListUserGroups(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListUserGroup>    
    
    /**
     * @param partialMeUser 
     */
    export function Patch(partialMeUser: MeUser): Promise<MeUser>    
    
    /**
     * @param addressID ID of the address.
     * @param partialBuyerAddress 
     */
    export function PatchAddress(addressID: string, partialBuyerAddress: BuyerAddress): Promise<void>    
    
    /**
     * @param creditcardID ID of the creditcard.
     * @param partialBuyerCreditCard 
     */
    export function PatchCreditCard(creditcardID: string, partialBuyerCreditCard: BuyerCreditCard): Promise<void>    
    
    /**
     * @param options.anonUserToken Anon user token of the user.
     * @param meUser 
     */
    export function Register(meUser: MeUser, options?: { anonUserToken?: string }): Promise<Object>    
    
    /**
     * @param tokenPasswordReset 
     */
    export function ResetPasswordByToken(tokenPasswordReset: TokenPasswordReset): Promise<void>    
    
    /**
     * @param meUser 
     */
    export function Save(meUser: MeUser): Promise<MeUser>    
    
    /**
     * @param addressID ID of the address.
     * @param buyerAddress 
     */
    export function SaveAddress(addressID: string, buyerAddress: BuyerAddress): Promise<BuyerAddress>    
    
    /**
     * @param creditcardID ID of the creditcard.
     * @param buyerCreditCard 
     */
    export function SaveCreditCard(creditcardID: string, buyerCreditCard: BuyerCreditCard): Promise<BuyerCreditCard>    
    
    /**
     * @param options.anonUserToken Anon user token of the me.
     */
    export function TransferAnonUserOrder(options?: { anonUserToken?: string }): Promise<void>    
    
}

export namespace MessageSenders {

    /**
     * @param messageSender 
     */
    export function Create(messageSender: MessageSender): Promise<MessageSender>    
    
    /**
     * @param messageSenderID ID of the message sender.
     */
    export function Delete(messageSenderID: string): Promise<void>    
    
    /**
     * @param messageSenderID ID of the message sender.
     * @param options.buyerID ID of the buyer.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.supplierID ID of the supplier.
     */
    export function DeleteAssignment(messageSenderID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string }): Promise<void>    
    
    /**
     * @param messageSenderID ID of the message sender.
     */
    export function Get(messageSenderID: string): Promise<MessageSender>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListMessageSender>    
    
    /**
     * @param options.buyerID ID of the buyer.
     * @param options.messageSenderID ID of the message sender.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the message sender assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.supplierID ID of the supplier.
     */
    export function ListAssignments(options?: { buyerID?: string, messageSenderID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, supplierID?: string }): Promise<ListMessageSenderAssignment>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListCCListenerAssignments(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListMessageCCListenerAssignment>    
    
    /**
     * @param messageSenderID ID of the message sender.
     * @param partialMessageSender 
     */
    export function Patch(messageSenderID: string, partialMessageSender: MessageSender): Promise<MessageSender>    
    
    /**
     * @param messageSenderID ID of the message sender.
     * @param messageSender 
     */
    export function Save(messageSenderID: string, messageSender: MessageSender): Promise<MessageSender>    
    
    /**
     * @param messageSenderAssignment 
     */
    export function SaveAssignment(messageSenderAssignment: MessageSenderAssignment): Promise<void>    
    
    /**
     * @param messageCCListenerAssignment 
     */
    export function SaveCCListenerAssignment(messageCCListenerAssignment: MessageCCListenerAssignment): Promise<void>    
    
}

export namespace OpenIdConnects {

    /**
     * @param openIdConnect 
     */
    export function Create(openIdConnect: OpenIdConnect): Promise<OpenIdConnect>    
    
    /**
     * @param openidconnectID ID of the openidconnect.
     */
    export function Delete(openidconnectID: string): Promise<void>    
    
    /**
     * @param openidconnectID ID of the openidconnect.
     */
    export function Get(openidconnectID: string): Promise<OpenIdConnect>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListOpenIdConnect>    
    
    /**
     * @param openidconnectID ID of the openidconnect.
     * @param partialOpenIdConnect 
     */
    export function Patch(openidconnectID: string, partialOpenIdConnect: OpenIdConnect): Promise<OpenIdConnect>    
    
    /**
     * @param openidconnectID ID of the openidconnect.
     * @param openIdConnect 
     */
    export function Save(openidconnectID: string, openIdConnect: OpenIdConnect): Promise<OpenIdConnect>    
    
}

export namespace Orders {

    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param promoCode Promo code of the order promotion.
     */
    export function AddPromotion(direction: string, orderID: string, promoCode: string): Promise<OrderPromotion>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param orderApprovalInfo 
     */
    export function Approve(direction: string, orderID: string, orderApprovalInfo: OrderApprovalInfo): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     */
    export function Cancel(direction: string, orderID: string): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param order 
     */
    export function Create(direction: string, order: Order): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param orderApprovalInfo 
     */
    export function Decline(direction: string, orderID: string, orderApprovalInfo: OrderApprovalInfo): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     */
    export function Delete(direction: string, orderID: string): Promise<void>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     */
    export function Get(direction: string, orderID: string): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param options.buyerID ID of the buyer.
     * @param options.supplierID ID of the supplier.
     * @param options.from Lower bound of date range that the order was created.
     * @param options.to Upper bound of date range that the order was created.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(direction: string, options?: { buyerID?: string, supplierID?: string, from?: string, to?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListOrder>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListApprovals(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListOrderApproval>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListEligibleApprovers(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListUser>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListPromotions(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListOrderPromotion>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param partialOrder 
     */
    export function Patch(direction: string, orderID: string, partialOrder: Order): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param partialAddress 
     */
    export function PatchBillingAddress(direction: string, orderID: string, partialAddress: Address): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param partialUser 
     */
    export function PatchFromUser(direction: string, orderID: string, partialUser: User): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param partialAddress 
     */
    export function PatchShippingAddress(direction: string, orderID: string, partialAddress: Address): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param promoCode Promo code of the order.
     */
    export function RemovePromotion(direction: string, orderID: string, promoCode: string): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param order 
     */
    export function Save(direction: string, orderID: string, order: Order): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param address 
     */
    export function SetBillingAddress(direction: string, orderID: string, address: Address): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param address 
     */
    export function SetShippingAddress(direction: string, orderID: string, address: Address): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param shipment 
     */
    export function Ship(direction: string, orderID: string, shipment: Shipment): Promise<Order>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     */
    export function Submit(direction: string, orderID: string): Promise<Order>    
    
}

export namespace PasswordResets {

    /**
     * @param verificationCode Verification code of the password reset.
     * @param passwordReset 
     */
    export function ResetPasswordByVerificationCode(verificationCode: string, passwordReset: PasswordReset): Promise<void>    
    
    /**
     * @param passwordResetRequest 
     */
    export function SendVerificationCode(passwordResetRequest: PasswordResetRequest): Promise<void>    
    
}

export namespace Payments {

    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param payment 
     */
    export function Create(direction: string, orderID: string, payment: Payment): Promise<Payment>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     * @param paymentTransaction 
     */
    export function CreateTransaction(direction: string, orderID: string, paymentID: string, paymentTransaction: PaymentTransaction): Promise<Payment>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     */
    export function Delete(direction: string, orderID: string, paymentID: string): Promise<void>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     * @param transactionID ID of the transaction.
     */
    export function DeleteTransaction(direction: string, orderID: string, paymentID: string, transactionID: string): Promise<void>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     */
    export function Get(direction: string, orderID: string, paymentID: string): Promise<Payment>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListPayment>    
    
    /**
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     * @param partialPayment 
     */
    export function Patch(direction: string, orderID: string, paymentID: string, partialPayment: Payment): Promise<Payment>    
    
}

export namespace PriceSchedules {

    /**
     * @param priceSchedule 
     */
    export function Create(priceSchedule: PriceSchedule): Promise<PriceSchedule>    
    
    /**
     * @param priceScheduleID ID of the price schedule.
     */
    export function Delete(priceScheduleID: string): Promise<void>    
    
    /**
     * @param priceScheduleID ID of the price schedule.
     * @param options.quantity Quantity of the price schedule.
     */
    export function DeletePriceBreak(priceScheduleID: string, options?: { quantity?: number }): Promise<void>    
    
    /**
     * @param priceScheduleID ID of the price schedule.
     */
    export function Get(priceScheduleID: string): Promise<PriceSchedule>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListPriceSchedule>    
    
    /**
     * @param priceScheduleID ID of the price schedule.
     * @param partialPriceSchedule 
     */
    export function Patch(priceScheduleID: string, partialPriceSchedule: PriceSchedule): Promise<PriceSchedule>    
    
    /**
     * @param priceScheduleID ID of the price schedule.
     * @param priceSchedule 
     */
    export function Save(priceScheduleID: string, priceSchedule: PriceSchedule): Promise<PriceSchedule>    
    
    /**
     * @param priceScheduleID ID of the price schedule.
     * @param priceBreak 
     */
    export function SavePriceBreak(priceScheduleID: string, priceBreak: PriceBreak): Promise<PriceSchedule>    
    
}

export namespace Products {

    /**
     * @param product 
     */
    export function Create(product: Product): Promise<Product>    
    
    /**
     * @param productID ID of the product.
     */
    export function Delete(productID: string): Promise<void>    
    
    /**
     * @param productID ID of the product.
     * @param buyerID ID of the buyer.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     */
    export function DeleteAssignment(productID: string, buyerID: string, options?: { userID?: string, userGroupID?: string }): Promise<void>    
    
    /**
     * @param productID ID of the product.
     * @param options.overwriteExisting Overwrite existing of the product.
     */
    export function GenerateVariants(productID: string, options?: { overwriteExisting?: boolean }): Promise<Product>    
    
    /**
     * @param productID ID of the product.
     */
    export function Get(productID: string): Promise<Product>    
    
    /**
     * @param productID ID of the product.
     * @param variantID ID of the variant.
     */
    export function GetVariant(productID: string, variantID: string): Promise<Variant>    
    
    /**
     * @param options.catalogID ID of the catalog.
     * @param options.categoryID ID of the category.
     * @param options.supplierID ID of the supplier.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { catalogID?: string, categoryID?: string, supplierID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListProduct>    
    
    /**
     * @param options.productID ID of the product.
     * @param options.priceScheduleID ID of the price schedule.
     * @param options.buyerID ID of the buyer.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the product assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(options?: { productID?: string, priceScheduleID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }): Promise<ListProductAssignment>    
    
    /**
     * @param productID ID of the product.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListSuppliers(productID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListSupplier>    
    
    /**
     * @param productID ID of the product.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListVariants(productID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListVariant>    
    
    /**
     * @param productID ID of the product.
     * @param partialProduct 
     */
    export function Patch(productID: string, partialProduct: Product): Promise<Product>    
    
    /**
     * @param productID ID of the product.
     * @param variantID ID of the variant.
     * @param partialVariant 
     */
    export function PatchVariant(productID: string, variantID: string, partialVariant: Variant): Promise<Variant>    
    
    /**
     * @param productID ID of the product.
     * @param supplierID ID of the supplier.
     */
    export function RemoveSupplier(productID: string, supplierID: string): Promise<void>    
    
    /**
     * @param productID ID of the product.
     * @param product 
     */
    export function Save(productID: string, product: Product): Promise<Product>    
    
    /**
     * @param productAssignment 
     */
    export function SaveAssignment(productAssignment: ProductAssignment): Promise<void>    
    
    /**
     * @param productID ID of the product.
     * @param supplierID ID of the supplier.
     */
    export function SaveSupplier(productID: string, supplierID: string): Promise<void>    
    
    /**
     * @param productID ID of the product.
     * @param variantID ID of the variant.
     * @param variant 
     */
    export function SaveVariant(productID: string, variantID: string, variant: Variant): Promise<Variant>    
    
}

export namespace ProductFacets {

    /**
     * @param productFacet 
     */
    export function Create(productFacet: ProductFacet): Promise<ProductFacet>    
    
    /**
     * @param productFacetID ID of the product facet.
     */
    export function Delete(productFacetID: string): Promise<void>    
    
    /**
     * @param productFacetID ID of the product facet.
     */
    export function Get(productFacetID: string): Promise<ProductFacet>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListProductFacet>    
    
    /**
     * @param productFacetID ID of the product facet.
     * @param partialProductFacet 
     */
    export function Patch(productFacetID: string, partialProductFacet: ProductFacet): Promise<ProductFacet>    
    
    /**
     * @param productFacetID ID of the product facet.
     * @param productFacet 
     */
    export function Save(productFacetID: string, productFacet: ProductFacet): Promise<ProductFacet>    
    
}

export namespace Promotions {

    /**
     * @param promotion 
     */
    export function Create(promotion: Promotion): Promise<Promotion>    
    
    /**
     * @param promotionID ID of the promotion.
     */
    export function Delete(promotionID: string): Promise<void>    
    
    /**
     * @param promotionID ID of the promotion.
     * @param options.buyerID ID of the buyer.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     */
    export function DeleteAssignment(promotionID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string }): Promise<void>    
    
    /**
     * @param promotionID ID of the promotion.
     */
    export function Get(promotionID: string): Promise<Promotion>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListPromotion>    
    
    /**
     * @param options.buyerID ID of the buyer.
     * @param options.promotionID ID of the promotion.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the promotion assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(options?: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }): Promise<ListPromotionAssignment>    
    
    /**
     * @param promotionID ID of the promotion.
     * @param partialPromotion 
     */
    export function Patch(promotionID: string, partialPromotion: Promotion): Promise<Promotion>    
    
    /**
     * @param promotionID ID of the promotion.
     * @param promotion 
     */
    export function Save(promotionID: string, promotion: Promotion): Promise<Promotion>    
    
    /**
     * @param promotionAssignment 
     */
    export function SaveAssignment(promotionAssignment: PromotionAssignment): Promise<void>    
    
}

export namespace SecurityProfiles {

    /**
     * @param securityProfileID ID of the security profile.
     * @param options.buyerID ID of the buyer.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.supplierID ID of the supplier.
     */
    export function DeleteAssignment(securityProfileID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string }): Promise<void>    
    
    /**
     * @param securityProfileID ID of the security profile.
     */
    export function Get(securityProfileID: string): Promise<SecurityProfile>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListSecurityProfile>    
    
    /**
     * @param options.buyerID ID of the buyer.
     * @param options.supplierID ID of the supplier.
     * @param options.securityProfileID ID of the security profile.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.commerceRole Commerce role of the security profile assignment. Possible values: Buyer, Seller, Supplier.
     * @param options.level Level of the security profile assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(options?: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: string, level?: string, page?: number, pageSize?: number }): Promise<ListSecurityProfileAssignment>    
    
    /**
     * @param securityProfileAssignment 
     */
    export function SaveAssignment(securityProfileAssignment: SecurityProfileAssignment): Promise<void>    
    
}

export namespace Shipments {

    /**
     * @param shipment 
     */
    export function Create(shipment: Shipment): Promise<Shipment>    
    
    /**
     * @param shipmentID ID of the shipment.
     */
    export function Delete(shipmentID: string): Promise<void>    
    
    /**
     * @param shipmentID ID of the shipment.
     * @param orderID ID of the order.
     * @param lineItemID ID of the line item.
     */
    export function DeleteItem(shipmentID: string, orderID: string, lineItemID: string): Promise<void>    
    
    /**
     * @param shipmentID ID of the shipment.
     */
    export function Get(shipmentID: string): Promise<Shipment>    
    
    /**
     * @param shipmentID ID of the shipment.
     * @param orderID ID of the order.
     * @param lineItemID ID of the line item.
     */
    export function GetItem(shipmentID: string, orderID: string, lineItemID: string): Promise<ShipmentItem>    
    
    /**
     * @param options.orderID ID of the order.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { orderID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListShipment>    
    
    /**
     * @param shipmentID ID of the shipment.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListItems(shipmentID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListShipmentItem>    
    
    /**
     * @param shipmentID ID of the shipment.
     * @param partialShipment 
     */
    export function Patch(shipmentID: string, partialShipment: Shipment): Promise<Shipment>    
    
    /**
     * @param shipmentID ID of the shipment.
     * @param shipment 
     */
    export function Save(shipmentID: string, shipment: Shipment): Promise<Shipment>    
    
    /**
     * @param shipmentID ID of the shipment.
     * @param shipmentItem 
     */
    export function SaveItem(shipmentID: string, shipmentItem: ShipmentItem): Promise<ShipmentItem>    
    
}

export namespace Specs {

    /**
     * @param spec 
     */
    export function Create(spec: Spec): Promise<Spec>    
    
    /**
     * @param specID ID of the spec.
     * @param specOption 
     */
    export function CreateOption(specID: string, specOption: SpecOption): Promise<SpecOption>    
    
    /**
     * @param specID ID of the spec.
     */
    export function Delete(specID: string): Promise<void>    
    
    /**
     * @param specID ID of the spec.
     * @param optionID ID of the option.
     */
    export function DeleteOption(specID: string, optionID: string): Promise<void>    
    
    /**
     * @param specID ID of the spec.
     * @param productID ID of the product.
     */
    export function DeleteProductAssignment(specID: string, productID: string): Promise<void>    
    
    /**
     * @param specID ID of the spec.
     */
    export function Get(specID: string): Promise<Spec>    
    
    /**
     * @param specID ID of the spec.
     * @param optionID ID of the option.
     */
    export function GetOption(specID: string, optionID: string): Promise<SpecOption>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListSpec>    
    
    /**
     * @param specID ID of the spec.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListOptions(specID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListSpecOption>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function ListProductAssignments(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListSpecProductAssignment>    
    
    /**
     * @param specID ID of the spec.
     * @param partialSpec 
     */
    export function Patch(specID: string, partialSpec: Spec): Promise<Spec>    
    
    /**
     * @param specID ID of the spec.
     * @param optionID ID of the option.
     * @param partialSpecOption 
     */
    export function PatchOption(specID: string, optionID: string, partialSpecOption: SpecOption): Promise<SpecOption>    
    
    /**
     * @param specID ID of the spec.
     * @param spec 
     */
    export function Save(specID: string, spec: Spec): Promise<Spec>    
    
    /**
     * @param specID ID of the spec.
     * @param optionID ID of the option.
     * @param specOption 
     */
    export function SaveOption(specID: string, optionID: string, specOption: SpecOption): Promise<SpecOption>    
    
    /**
     * @param specProductAssignment 
     */
    export function SaveProductAssignment(specProductAssignment: SpecProductAssignment): Promise<void>    
    
}

export namespace SpendingAccounts {

    /**
     * @param buyerID ID of the buyer.
     * @param spendingAccount 
     */
    export function Create(buyerID: string, spendingAccount: SpendingAccount): Promise<SpendingAccount>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param spendingAccountID ID of the spending account.
     */
    export function Delete(buyerID: string, spendingAccountID: string): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param spendingAccountID ID of the spending account.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     */
    export function DeleteAssignment(buyerID: string, spendingAccountID: string, options?: { userID?: string, userGroupID?: string }): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param spendingAccountID ID of the spending account.
     */
    export function Get(buyerID: string, spendingAccountID: string): Promise<SpendingAccount>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListSpendingAccount>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.spendingAccountID ID of the spending account.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the spending account assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListAssignments(buyerID: string, options?: { spendingAccountID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }): Promise<ListSpendingAccountAssignment>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param spendingAccountID ID of the spending account.
     * @param partialSpendingAccount 
     */
    export function Patch(buyerID: string, spendingAccountID: string, partialSpendingAccount: SpendingAccount): Promise<SpendingAccount>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param spendingAccountID ID of the spending account.
     * @param spendingAccount 
     */
    export function Save(buyerID: string, spendingAccountID: string, spendingAccount: SpendingAccount): Promise<SpendingAccount>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param spendingAccountAssignment 
     */
    export function SaveAssignment(buyerID: string, spendingAccountAssignment: SpendingAccountAssignment): Promise<void>    
    
}

export namespace Suppliers {

    /**
     * @param supplier 
     */
    export function Create(supplier: Supplier): Promise<Supplier>    
    
    /**
     * @param supplierID ID of the supplier.
     */
    export function Delete(supplierID: string): Promise<void>    
    
    /**
     * @param supplierID ID of the supplier.
     */
    export function Get(supplierID: string): Promise<Supplier>    
    
    /**
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListSupplier>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param partialSupplier 
     */
    export function Patch(supplierID: string, partialSupplier: Supplier): Promise<Supplier>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param supplier 
     */
    export function Save(supplierID: string, supplier: Supplier): Promise<Supplier>    
    
}

export namespace SupplierAddresses {

    /**
     * @param supplierID ID of the supplier.
     * @param address 
     */
    export function Create(supplierID: string, address: Address): Promise<Address>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param addressID ID of the address.
     */
    export function Delete(supplierID: string, addressID: string): Promise<void>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param addressID ID of the address.
     */
    export function Get(supplierID: string, addressID: string): Promise<Address>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(supplierID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListAddress>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param addressID ID of the address.
     * @param partialAddress 
     */
    export function Patch(supplierID: string, addressID: string, partialAddress: Address): Promise<Address>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param addressID ID of the address.
     * @param address 
     */
    export function Save(supplierID: string, addressID: string, address: Address): Promise<Address>    
    
}

export namespace SupplierUsers {

    /**
     * @param supplierID ID of the supplier.
     * @param user 
     */
    export function Create(supplierID: string, user: User): Promise<User>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     */
    export function Delete(supplierID: string, userID: string): Promise<void>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     */
    export function Get(supplierID: string, userID: string): Promise<User>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     * @param impersonateTokenRequest 
     */
    export function GetAccessToken(supplierID: string, userID: string, impersonateTokenRequest: ImpersonateTokenRequest): Promise<AccessToken>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param options.userGroupID ID of the user group.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(supplierID: string, options?: { userGroupID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListUser>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     * @param partialUser 
     */
    export function Patch(supplierID: string, userID: string, partialUser: User): Promise<User>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     * @param user 
     */
    export function Save(supplierID: string, userID: string, user: User): Promise<User>    
    
}

export namespace SupplierUserGroups {

    /**
     * @param supplierID ID of the supplier.
     * @param userGroup 
     */
    export function Create(supplierID: string, userGroup: UserGroup): Promise<UserGroup>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userGroupID ID of the user group.
     */
    export function Delete(supplierID: string, userGroupID: string): Promise<void>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userGroupID ID of the user group.
     * @param userID ID of the user.
     */
    export function DeleteUserAssignment(supplierID: string, userGroupID: string, userID: string): Promise<void>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userGroupID ID of the user group.
     */
    export function Get(supplierID: string, userGroupID: string): Promise<UserGroup>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(supplierID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListUserGroup>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param options.userGroupID ID of the user group.
     * @param options.userID ID of the user.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListUserAssignments(supplierID: string, options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number }): Promise<ListUserGroupAssignment>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userGroupID ID of the user group.
     * @param partialUserGroup 
     */
    export function Patch(supplierID: string, userGroupID: string, partialUserGroup: UserGroup): Promise<UserGroup>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userGroupID ID of the user group.
     * @param userGroup 
     */
    export function Save(supplierID: string, userGroupID: string, userGroup: UserGroup): Promise<UserGroup>    
    
    /**
     * @param supplierID ID of the supplier.
     * @param userGroupAssignment 
     */
    export function SaveUserAssignment(supplierID: string, userGroupAssignment: UserGroupAssignment): Promise<void>    
    
}

export namespace Users {

    /**
     * @param buyerID ID of the buyer.
     * @param user 
     */
    export function Create(buyerID: string, user: User): Promise<User>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userID ID of the user.
     */
    export function Delete(buyerID: string, userID: string): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userID ID of the user.
     */
    export function Get(buyerID: string, userID: string): Promise<User>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userID ID of the user.
     * @param impersonateTokenRequest 
     */
    export function GetAccessToken(buyerID: string, userID: string, impersonateTokenRequest: ImpersonateTokenRequest): Promise<AccessToken>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.userGroupID ID of the user group.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(buyerID: string, options?: { userGroupID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListUser>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userID ID of the user.
     * @param newBuyerID ID of the new buyer.
     * @param options.orders Orders of the user. Possible values: None, Unsubmitted, All.
     */
    export function Move(buyerID: string, userID: string, newBuyerID: string, options?: { orders?: string }): Promise<User>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userID ID of the user.
     * @param partialUser 
     */
    export function Patch(buyerID: string, userID: string, partialUser: User): Promise<User>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userID ID of the user.
     * @param user 
     */
    export function Save(buyerID: string, userID: string, user: User): Promise<User>    
    
}

export namespace UserGroups {

    /**
     * @param buyerID ID of the buyer.
     * @param userGroup 
     */
    export function Create(buyerID: string, userGroup: UserGroup): Promise<UserGroup>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userGroupID ID of the user group.
     */
    export function Delete(buyerID: string, userGroupID: string): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userGroupID ID of the user group.
     * @param userID ID of the user.
     */
    export function DeleteUserAssignment(buyerID: string, userGroupID: string, userID: string): Promise<void>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userGroupID ID of the user group.
     */
    export function Get(buyerID: string, userGroupID: string): Promise<UserGroup>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     */
    export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }): Promise<ListUserGroup>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param options.userGroupID ID of the user group.
     * @param options.userID ID of the user.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     */
    export function ListUserAssignments(buyerID: string, options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number }): Promise<ListUserGroupAssignment>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userGroupID ID of the user group.
     * @param partialUserGroup 
     */
    export function Patch(buyerID: string, userGroupID: string, partialUserGroup: UserGroup): Promise<UserGroup>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userGroupID ID of the user group.
     * @param userGroup 
     */
    export function Save(buyerID: string, userGroupID: string, userGroup: UserGroup): Promise<UserGroup>    
    
    /**
     * @param buyerID ID of the buyer.
     * @param userGroupAssignment 
     */
    export function SaveUserAssignment(buyerID: string, userGroupAssignment: UserGroupAssignment): Promise<void>    
    
}
