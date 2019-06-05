
export interface AccessToken {
    access_token: string;
    expires_in: number;
    token_type: string;
    refresh_token: string;
}

export interface Address {
    ID: string;
    DateCreated: string;
    CompanyName: string;
    FirstName: string;
    LastName: string;
    Street1: string;
    Street2: string;
    City: string;
    State: string;
    Zip: string;
    Country: string;
    Phone: string;
    AddressName: string;
    xp: any;
}

export interface AddressAssignment {
    AddressID: string;
    UserID: string;
    UserGroupID: string;
    IsShipping: boolean;
    IsBilling: boolean;
}

export interface ApiClient {
    ID: string;
    ClientSecret: string;
    AccessTokenDuration: number;
    Active: boolean;
    AppName: string;
    RefreshTokenDuration: number;
    DefaultContextUserName: string;
    xp: any;
    AllowAnyBuyer: boolean;
    AllowAnySupplier: boolean;
    AllowSeller: boolean;
    IsAnonBuyer: boolean;
    AssignedBuyerCount: number;
    AssignedSupplierCount: number;
}

export interface ApiClientAssignment {
    ApiClientID: string;
    BuyerID: string;
    SupplierID: string;
}

export interface ApprovalRule {
    ID: string;
    Name: string;
    Description: string;
    ApprovingGroupID: string;
    RuleExpression: string;
    xp: any;
}

export interface Buyer {
    ID: string;
    Name: string;
    DefaultCatalogID: string;
    Active: boolean;
    xp: any;
}

export interface BuyerAddress {
    ID: string;
    Shipping: boolean;
    Billing: boolean;
    Editable: boolean;
    DateCreated: string;
    CompanyName: string;
    FirstName: string;
    LastName: string;
    Street1: string;
    Street2: string;
    City: string;
    State: string;
    Zip: string;
    Country: string;
    Phone: string;
    AddressName: string;
    xp: any;
}

export interface BuyerCreditCard {
    ID: string;
    Editable: boolean;
    Token: string;
    DateCreated: string;
    CardType: string;
    PartialAccountNumber: string;
    CardholderName: string;
    ExpirationDate: string;
    xp: any;
}

export interface BuyerProduct {
    PriceSchedule: PriceSchedule;
    ID: string;
    Name: string;
    Description: string;
    QuantityMultiplier: number;
    ShipWeight: number;
    ShipHeight: number;
    ShipWidth: number;
    ShipLength: number;
    Active: boolean;
    SpecCount: number;
    xp: any;
    VariantCount: number;
    ShipFromAddressID: string;
    Inventory: Inventory;
    DefaultSupplierID: string;
}

export interface BuyerSpec {
    Options: SpecOption[];
    ID: string;
    ListOrder: number;
    Name: string;
    DefaultValue: string;
    Required: boolean;
    AllowOpenText: boolean;
    DefaultOptionID: string;
    DefinesVariant: boolean;
    xp: any;
}

export interface Catalog {
    ID: string;
    Name: string;
    Description: string;
    Active: boolean;
    CategoryCount: number;
    xp: any;
}

export interface CatalogAssignment {
    CatalogID: string;
    BuyerID: string;
    ViewAllCategories: boolean;
    ViewAllProducts: boolean;
}

export interface Category {
    ID: string;
    Name: string;
    Description: string;
    ListOrder: number;
    Active: boolean;
    ParentID: string;
    ChildCount: number;
    xp: any;
}

export interface CategoryAssignment {
    CategoryID: string;
    BuyerID: string;
    UserGroupID: string;
    Visible: boolean;
    ViewAllProducts: boolean;
}

export interface CategoryProductAssignment {
    CategoryID: string;
    ProductID: string;
    ListOrder: number;
}

export interface CostCenter {
    ID: string;
    Name: string;
    Description: string;
    xp: any;
}

export interface CostCenterAssignment {
    CostCenterID: string;
    UserGroupID: string;
}

export interface CreditCard {
    ID: string;
    Token: string;
    DateCreated: string;
    CardType: string;
    PartialAccountNumber: string;
    CardholderName: string;
    ExpirationDate: string;
    xp: any;
}

export interface CreditCardAssignment {
    CreditCardID: string;
    UserID: string;
    UserGroupID: string;
}

export interface ImpersonateTokenRequest {
    ClientID: string;
    Roles: string[];
}

export interface ImpersonationConfig {
    ID: string;
    ImpersonationBuyerID: string;
    ImpersonationGroupID: string;
    ImpersonationUserID: string;
    BuyerID: string;
    GroupID: string;
    UserID: string;
    SecurityProfileID: string;
    ClientID: string;
}

export interface Incrementor {
    ID: string;
    Name: string;
    LastNumber: number;
    LeftPaddingCount: number;
}

export interface Inventory {
    Enabled: boolean;
    NotificationPoint: number;
    VariantLevelTracking: boolean;
    OrderCanExceed: boolean;
    QuantityAvailable: number;
    LastUpdated: string;
}

export interface LineItem {
    ID: string;
    ProductID: string;
    Quantity: number;
    DateAdded: string;
    QuantityShipped: number;
    UnitPrice: number;
    LineTotal: number;
    CostCenter: string;
    DateNeeded: string;
    ShippingAccount: string;
    ShippingAddressID: string;
    ShipFromAddressID: string;
    Product: LineItemProduct;
    Variant: LineItemVariant;
    ShippingAddress: Address;
    ShipFromAddress: Address;
    SupplierID: string;
    Specs: LineItemSpec[];
    xp: any;
}

export interface LineItemProduct {
    ID: string;
    Name: string;
    Description: string;
    QuantityMultiplier: number;
    ShipWeight: number;
    ShipHeight: number;
    ShipWidth: number;
    ShipLength: number;
    xp: any;
}

export interface LineItemSpec {
    SpecID: string;
    Name: string;
    OptionID: string;
    Value: string;
}

export interface LineItemVariant {
    ID: string;
    Name: string;
    Description: string;
    ShipWeight: number;
    ShipHeight: number;
    ShipWidth: number;
    ShipLength: number;
    xp: any;
}

export interface ListAddress {
    Items: Address[];
    Meta: Meta;
}

export interface ListAddressAssignment {
    Items: AddressAssignment[];
    Meta: Meta;
}

export interface ListApiClient {
    Items: ApiClient[];
    Meta: Meta;
}

export interface ListApiClientAssignment {
    Items: ApiClientAssignment[];
    Meta: Meta;
}

export interface ListApprovalRule {
    Items: ApprovalRule[];
    Meta: Meta;
}

export interface ListBuyer {
    Items: Buyer[];
    Meta: Meta;
}

export interface ListBuyerAddress {
    Items: BuyerAddress[];
    Meta: Meta;
}

export interface ListBuyerCreditCard {
    Items: BuyerCreditCard[];
    Meta: Meta;
}

export interface ListBuyerProduct {
    Items: BuyerProduct[];
    Meta: MetaWithFacets;
}

export interface ListBuyerSpec {
    Items: BuyerSpec[];
    Meta: Meta;
}

export interface ListCatalog {
    Items: Catalog[];
    Meta: Meta;
}

export interface ListCatalogAssignment {
    Items: CatalogAssignment[];
    Meta: Meta;
}

export interface ListCategory {
    Items: Category[];
    Meta: Meta;
}

export interface ListCategoryAssignment {
    Items: CategoryAssignment[];
    Meta: Meta;
}

export interface ListCategoryProductAssignment {
    Items: CategoryProductAssignment[];
    Meta: Meta;
}

export interface ListCostCenter {
    Items: CostCenter[];
    Meta: Meta;
}

export interface ListCostCenterAssignment {
    Items: CostCenterAssignment[];
    Meta: Meta;
}

export interface ListCreditCard {
    Items: CreditCard[];
    Meta: Meta;
}

export interface ListCreditCardAssignment {
    Items: CreditCardAssignment[];
    Meta: Meta;
}

export interface ListFacet {
    Name: string;
    XpPath: string;
    Values: ListFacetValue[];
    xp: any;
}

export interface ListFacetValue {
    Value: string;
    Count: number;
}

export interface ListImpersonationConfig {
    Items: ImpersonationConfig[];
    Meta: Meta;
}

export interface ListIncrementor {
    Items: Incrementor[];
    Meta: Meta;
}

export interface ListLineItem {
    Items: LineItem[];
    Meta: Meta;
}

export interface ListMessageCCListenerAssignment {
    Items: MessageCCListenerAssignment[];
    Meta: Meta;
}

export interface ListMessageSender {
    Items: MessageSender[];
    Meta: Meta;
}

export interface ListMessageSenderAssignment {
    Items: MessageSenderAssignment[];
    Meta: Meta;
}

export interface ListOpenIdConnect {
    Items: OpenIdConnect[];
    Meta: Meta;
}

export interface ListOrder {
    Items: Order[];
    Meta: Meta;
}

export interface ListOrderApproval {
    Items: OrderApproval[];
    Meta: Meta;
}

export interface ListOrderPromotion {
    Items: OrderPromotion[];
    Meta: Meta;
}

export interface ListPayment {
    Items: Payment[];
    Meta: Meta;
}

export interface ListPriceSchedule {
    Items: PriceSchedule[];
    Meta: Meta;
}

export interface ListProduct {
    Items: Product[];
    Meta: Meta;
}

export interface ListProductAssignment {
    Items: ProductAssignment[];
    Meta: Meta;
}

export interface ListProductCatalogAssignment {
    Items: ProductCatalogAssignment[];
    Meta: Meta;
}

export interface ListProductFacet {
    Items: ProductFacet[];
    Meta: Meta;
}

export interface ListPromotion {
    Items: Promotion[];
    Meta: Meta;
}

export interface ListPromotionAssignment {
    Items: PromotionAssignment[];
    Meta: Meta;
}

export interface ListSecurityProfile {
    Items: SecurityProfile[];
    Meta: Meta;
}

export interface ListSecurityProfileAssignment {
    Items: SecurityProfileAssignment[];
    Meta: Meta;
}

export interface ListShipment {
    Items: Shipment[];
    Meta: Meta;
}

export interface ListShipmentItem {
    Items: ShipmentItem[];
    Meta: Meta;
}

export interface ListSpec {
    Items: Spec[];
    Meta: Meta;
}

export interface ListSpecOption {
    Items: SpecOption[];
    Meta: Meta;
}

export interface ListSpecProductAssignment {
    Items: SpecProductAssignment[];
    Meta: Meta;
}

export interface ListSpendingAccount {
    Items: SpendingAccount[];
    Meta: Meta;
}

export interface ListSpendingAccountAssignment {
    Items: SpendingAccountAssignment[];
    Meta: Meta;
}

export interface ListSupplier {
    Items: Supplier[];
    Meta: Meta;
}

export interface ListUser {
    Items: User[];
    Meta: Meta;
}

export interface ListUserGroup {
    Items: UserGroup[];
    Meta: Meta;
}

export interface ListUserGroupAssignment {
    Items: UserGroupAssignment[];
    Meta: Meta;
}

export interface ListVariant {
    Items: Variant[];
    Meta: Meta;
}

export interface MeBuyer {
    ID: string;
    DefaultCatalogID: string;
}

export interface MeSupplier {
    ID: string;
}

export interface MeUser {
    Buyer: MeBuyer;
    Supplier: MeSupplier;
    ID: string;
    Username: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    TermsAccepted: string;
    Active: boolean;
    xp: any;
    AvailableRoles: string[];
}

export interface MessageCCListenerAssignment {
    MessageSenderAssignment: MessageSenderAssignment;
    MessageConfigName: string;
    MessageConfigDescription: string;
    MessageType: string;
    BuyerID: string;
    SupplierID: string;
    UserGroupID: string;
    UserID: string;
}

export interface MessageSender {
    ID: string;
    Name: string;
    MessageTypes: string[];
    Description: string;
    URL: string;
    ElevatedRoles: string[];
    SharedKey: string;
    xp: any;
}

export interface MessageSenderAssignment {
    MessageSenderID: string;
    BuyerID: string;
    SupplierID: string;
    UserGroupID: string;
    MessageConfigName: string;
    MessageConfigDescription: string;
}

export interface Meta {
    Page: number;
    PageSize: number;
    TotalCount: number;
    TotalPages: number;
    ItemRange: number[];
}

export interface MetaWithFacets {
    Facets: ListFacet[];
    Page: number;
    PageSize: number;
    TotalCount: number;
    TotalPages: number;
    ItemRange: number[];
}

export interface OpenIdConnect {
    ID: string;
    OrderCloudApiClientID: string;
    ConnectClientID: string;
    ConnectClientSecret: string;
    AppStartUrl: string;
    AuthorizationEndpoint: string;
    TokenEndpoint: string;
}

export interface Order {
    ID: string;
    FromUser: User;
    FromCompanyID: string;
    FromUserID: string;
    BillingAddressID: string;
    BillingAddress: Address;
    ShippingAddressID: string;
    Comments: string;
    LineItemCount: number;
    Status: string;
    DateCreated: string;
    DateSubmitted: string;
    DateApproved: string;
    DateDeclined: string;
    DateCanceled: string;
    DateCompleted: string;
    Subtotal: number;
    ShippingCost: number;
    TaxCost: number;
    PromotionDiscount: number;
    Total: number;
    IsSubmitted: boolean;
    xp: any;
}

export interface OrderApproval {
    ApprovalRuleID: string;
    ApprovingGroupID: string;
    Status: string;
    AllowResubmit: boolean;
    DateCreated: string;
    DateCompleted: string;
    Approver: User;
    Comments: string;
}

export interface OrderApprovalInfo {
    Comments: string;
    AllowResubmit: boolean;
}

export interface OrderPromotion {
    Amount: number;
    ID: string;
    Code: string;
    Name: string;
    RedemptionLimit: number;
    RedemptionLimitPerUser: number;
    RedemptionCount: number;
    Description: string;
    FinePrint: string;
    StartDate: string;
    ExpirationDate: string;
    EligibleExpression: string;
    ValueExpression: string;
    CanCombine: boolean;
    xp: any;
}

export interface PasswordReset {
    ClientID: string;
    Username: string;
    Password: string;
}

export interface PasswordResetRequest {
    ClientID: string;
    Email: string;
    Username: string;
    URL: string;
}

export interface Payment {
    ID: string;
    Type: string;
    DateCreated: string;
    CreditCardID: string;
    SpendingAccountID: string;
    Description: string;
    Amount: number;
    Accepted: boolean;
    xp: any;
    Transactions: PaymentTransaction[];
}

export interface PaymentTransaction {
    ID: string;
    Type: string;
    DateExecuted: string;
    Amount: number;
    Succeeded: boolean;
    ResultCode: string;
    ResultMessage: string;
    xp: any;
}

export interface PriceBreak {
    Quantity: number;
    Price: number;
}

export interface PriceSchedule {
    ID: string;
    Name: string;
    ApplyTax: boolean;
    ApplyShipping: boolean;
    MinQuantity: number;
    MaxQuantity: number;
    UseCumulativeQuantity: boolean;
    RestrictedQuantity: boolean;
    PriceBreaks: PriceBreak[];
    xp: any;
}

export interface Product {
    DefaultPriceScheduleID: string;
    ID: string;
    Name: string;
    Description: string;
    QuantityMultiplier: number;
    ShipWeight: number;
    ShipHeight: number;
    ShipWidth: number;
    ShipLength: number;
    Active: boolean;
    SpecCount: number;
    xp: any;
    VariantCount: number;
    ShipFromAddressID: string;
    Inventory: Inventory;
    DefaultSupplierID: string;
}

export interface ProductAssignment {
    ProductID: string;
    BuyerID: string;
    UserGroupID: string;
    PriceScheduleID: string;
}

export interface ProductCatalogAssignment {
    CatalogID: string;
    ProductID: string;
}

export interface ProductFacet {
    ID: string;
    Name: string;
    XpPath: string;
    ListOrder: number;
    MinCount: number;
    xp: any;
}

export interface Promotion {
    ID: string;
    Code: string;
    Name: string;
    RedemptionLimit: number;
    RedemptionLimitPerUser: number;
    RedemptionCount: number;
    Description: string;
    FinePrint: string;
    StartDate: string;
    ExpirationDate: string;
    EligibleExpression: string;
    ValueExpression: string;
    CanCombine: boolean;
    xp: any;
}

export interface PromotionAssignment {
    PromotionID: string;
    BuyerID: string;
    UserGroupID: string;
}

export interface SecurityProfile {
    ID: string;
    Name: string;
    Roles: string[];
}

export interface SecurityProfileAssignment {
    SecurityProfileID: string;
    BuyerID: string;
    SupplierID: string;
    UserID: string;
    UserGroupID: string;
}

export interface Shipment {
    ID: string;
    BuyerID: string;
    Shipper: string;
    DateShipped: string;
    DateDelivered: string;
    TrackingNumber: string;
    Cost: number;
    xp: any;
    Account: string;
    FromAddressID: string;
    ToAddressID: string;
    FromAddress: Address;
    ToAddress: Address;
}

export interface ShipmentItem {
    OrderID: string;
    LineItemID: string;
    QuantityShipped: number;
    UnitPrice: number;
    CostCenter: string;
    DateNeeded: string;
    Product: LineItemProduct;
    Variant: LineItemVariant;
    Specs: LineItemSpec[];
    xp: any;
}

export interface Spec {
    OptionCount: number;
    ID: string;
    ListOrder: number;
    Name: string;
    DefaultValue: string;
    Required: boolean;
    AllowOpenText: boolean;
    DefaultOptionID: string;
    DefinesVariant: boolean;
    xp: any;
}

export interface SpecOption {
    ID: string;
    Value: string;
    ListOrder: number;
    IsOpenText: boolean;
    PriceMarkupType: string;
    PriceMarkup: number;
    xp: any;
}

export interface SpecProductAssignment {
    SpecID: string;
    ProductID: string;
    DefaultValue: string;
    DefaultOptionID: string;
}

export interface SpendingAccount {
    ID: string;
    Name: string;
    Balance: number;
    AllowAsPaymentMethod: boolean;
    RedemptionCode: string;
    StartDate: string;
    EndDate: string;
    xp: any;
}

export interface SpendingAccountAssignment {
    SpendingAccountID: string;
    UserID: string;
    UserGroupID: string;
    AllowExceed: boolean;
}

export interface Supplier {
    ID: string;
    Name: string;
    Active: boolean;
    xp: any;
}

export interface TokenPasswordReset {
    NewPassword: string;
}

export interface User {
    ID: string;
    Username: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    TermsAccepted: string;
    Active: boolean;
    xp: any;
    AvailableRoles: string[];
}

export interface UserGroup {
    ID: string;
    Name: string;
    Description: string;
    xp: any;
}

export interface UserGroupAssignment {
    UserGroupID: string;
    UserID: string;
}

export interface Variant {
    ID: string;
    Name: string;
    Description: string;
    Active: boolean;
    ShipWeight: number;
    ShipHeight: number;
    ShipWidth: number;
    ShipLength: number;
    Inventory: VariantInventory;
    xp: any;
}

export interface VariantInventory {
    QuantityAvailable: number;
    LastUpdated: string;
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

export namespace OrderCloudSDK {
    export namespace Sdk {
        export let instance: SdkInstance;
    }

    /**
    * Will use the impersonation token for the following call
    * for example: OrderCloudSDK.As().Me.ListProducts(); will list
    * products for the user being impersonated
    */
    export function As(): typeof OrderCloudSDK

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

    
    export namespace Addresses {

        /**
        * @param buyerID ID of the buyer.
        * @param address 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(buyerID: string, address: Partial<Address>, accessToken?: string): Promise<Address>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param addressID ID of the address.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(buyerID: string, addressID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param addressID ID of the address.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(buyerID: string, addressID: string, options?: { userID?: string, userGroupID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param addressID ID of the address.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(buyerID: string, addressID: string, accessToken?: string): Promise<Address>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListAddress>    
        
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
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(buyerID: string, options?: { addressID?: string, userID?: string, userGroupID?: string, level?: string, isShipping?: boolean, isBilling?: boolean, page?: number, pageSize?: number }, accessToken?: string): Promise<ListAddressAssignment>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param addressID ID of the address.
        * @param partialAddress 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(buyerID: string, addressID: string, partialAddress: Partial<Address>, accessToken?: string): Promise<Address>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param addressID ID of the address.
        * @param address 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(buyerID: string, addressID: string, address: Partial<Address>, accessToken?: string): Promise<Address>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param addressAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(buyerID: string, addressAssignment: Partial<AddressAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace AdminAddresses {

        /**
        * @param address 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(address: Partial<Address>, accessToken?: string): Promise<Address>    
        
        /**
        * @param addressID ID of the address.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(addressID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param addressID ID of the address.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(addressID: string, accessToken?: string): Promise<Address>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListAddress>    
        
        /**
        * @param addressID ID of the address.
        * @param partialAddress 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(addressID: string, partialAddress: Partial<Address>, accessToken?: string): Promise<Address>    
        
        /**
        * @param addressID ID of the address.
        * @param address 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(addressID: string, address: Partial<Address>, accessToken?: string): Promise<Address>    
        
    }
    
    export namespace AdminUsers {

        /**
        * @param user 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(user: Partial<User>, accessToken?: string): Promise<User>    
        
        /**
        * @param userID ID of the user.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(userID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param userID ID of the user.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(userID: string, accessToken?: string): Promise<User>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListUser>    
        
        /**
        * @param userID ID of the user.
        * @param partialUser 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(userID: string, partialUser: Partial<User>, accessToken?: string): Promise<User>    
        
        /**
        * @param userID ID of the user.
        * @param user 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(userID: string, user: Partial<User>, accessToken?: string): Promise<User>    
        
    }
    
    export namespace AdminUserGroups {

        /**
        * @param userGroup 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(userGroup: Partial<UserGroup>, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(userGroupID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param userGroupID ID of the user group.
        * @param userID ID of the user.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteUserAssignment(userGroupID: string, userID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(userGroupID: string, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListUserGroup>    
        
        /**
        * @param options.userGroupID ID of the user group.
        * @param options.userID ID of the user.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListUserAssignments(options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListUserGroupAssignment>    
        
        /**
        * @param userGroupID ID of the user group.
        * @param partialUserGroup 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(userGroupID: string, partialUserGroup: Partial<UserGroup>, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param userGroupID ID of the user group.
        * @param userGroup 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(userGroupID: string, userGroup: Partial<UserGroup>, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param userGroupAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveUserAssignment(userGroupAssignment: Partial<UserGroupAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace ApiClients {

        /**
        * @param apiClient 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(apiClient: Partial<ApiClient>, accessToken?: string): Promise<ApiClient>    
        
        /**
        * @param apiClientID ID of the api client.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(apiClientID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param apiClientID ID of the api client.
        * @param buyerID ID of the buyer.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteBuyerAssignment(apiClientID: string, buyerID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param apiClientID ID of the api client.
        * @param supplierID ID of the supplier.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteSupplierAssignment(apiClientID: string, supplierID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param apiClientID ID of the api client.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(apiClientID: string, accessToken?: string): Promise<ApiClient>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListApiClient>    
        
        /**
        * @param options.apiClientID ID of the api client.
        * @param options.buyerID ID of the buyer.
        * @param options.supplierID ID of the supplier.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(options?: { apiClientID?: string, buyerID?: string, supplierID?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListApiClientAssignment>    
        
        /**
        * @param apiClientID ID of the api client.
        * @param partialApiClient 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(apiClientID: string, partialApiClient: Partial<ApiClient>, accessToken?: string): Promise<ApiClient>    
        
        /**
        * @param apiClientID ID of the api client.
        * @param apiClient 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(apiClientID: string, apiClient: Partial<ApiClient>, accessToken?: string): Promise<ApiClient>    
        
        /**
        * @param apiClientAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(apiClientAssignment: Partial<ApiClientAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace ApprovalRules {

        /**
        * @param buyerID ID of the buyer.
        * @param approvalRule 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(buyerID: string, approvalRule: Partial<ApprovalRule>, accessToken?: string): Promise<ApprovalRule>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param approvalRuleID ID of the approval rule.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(buyerID: string, approvalRuleID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param approvalRuleID ID of the approval rule.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(buyerID: string, approvalRuleID: string, accessToken?: string): Promise<ApprovalRule>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListApprovalRule>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param approvalRuleID ID of the approval rule.
        * @param partialApprovalRule 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(buyerID: string, approvalRuleID: string, partialApprovalRule: Partial<ApprovalRule>, accessToken?: string): Promise<ApprovalRule>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param approvalRuleID ID of the approval rule.
        * @param approvalRule 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(buyerID: string, approvalRuleID: string, approvalRule: Partial<ApprovalRule>, accessToken?: string): Promise<ApprovalRule>    
        
    }
    
    export namespace Buyers {

        /**
        * @param buyer 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(buyer: Partial<Buyer>, accessToken?: string): Promise<Buyer>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(buyerID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(buyerID: string, accessToken?: string): Promise<Buyer>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListBuyer>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param partialBuyer 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(buyerID: string, partialBuyer: Partial<Buyer>, accessToken?: string): Promise<Buyer>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param buyer 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(buyerID: string, buyer: Partial<Buyer>, accessToken?: string): Promise<Buyer>    
        
    }
    
    export namespace Catalogs {

        /**
        * @param catalog 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(catalog: Partial<Catalog>, accessToken?: string): Promise<Catalog>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(catalogID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param options.buyerID ID of the buyer.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(catalogID: string, options?: { buyerID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param productID ID of the product.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteProductAssignment(catalogID: string, productID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(catalogID: string, accessToken?: string): Promise<Catalog>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListCatalog>    
        
        /**
        * @param options.catalogID ID of the catalog.
        * @param options.buyerID ID of the buyer.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(options?: { catalogID?: string, buyerID?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListCatalogAssignment>    
        
        /**
        * @param options.catalogID ID of the catalog.
        * @param options.productID ID of the product.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListProductAssignments(options?: { catalogID?: string, productID?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListProductCatalogAssignment>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param partialCatalog 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(catalogID: string, partialCatalog: Partial<Catalog>, accessToken?: string): Promise<Catalog>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param catalog 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(catalogID: string, catalog: Partial<Catalog>, accessToken?: string): Promise<Catalog>    
        
        /**
        * @param catalogAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(catalogAssignment: Partial<CatalogAssignment>, accessToken?: string): Promise<void>    
        
        /**
        * @param productCatalogAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveProductAssignment(productCatalogAssignment: Partial<ProductCatalogAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace Categories {

        /**
        * @param catalogID ID of the catalog.
        * @param category 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(catalogID: string, category: Partial<Category>, accessToken?: string): Promise<Category>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param categoryID ID of the category.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(catalogID: string, categoryID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param categoryID ID of the category.
        * @param options.buyerID ID of the buyer.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(catalogID: string, categoryID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param categoryID ID of the category.
        * @param productID ID of the product.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteProductAssignment(catalogID: string, categoryID: string, productID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param categoryID ID of the category.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(catalogID: string, categoryID: string, accessToken?: string): Promise<Category>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param options.depth Depth of the category.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(catalogID: string, options?: { depth?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListCategory>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param options.categoryID ID of the category.
        * @param options.buyerID ID of the buyer.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param options.level Level of the category assignment. Possible values: User, Group, Company.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(catalogID: string, options?: { categoryID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListCategoryAssignment>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param options.categoryID ID of the category.
        * @param options.productID ID of the product.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListProductAssignments(catalogID: string, options?: { categoryID?: string, productID?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListCategoryProductAssignment>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param categoryID ID of the category.
        * @param partialCategory 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(catalogID: string, categoryID: string, partialCategory: Partial<Category>, accessToken?: string): Promise<Category>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param categoryID ID of the category.
        * @param category 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(catalogID: string, categoryID: string, category: Partial<Category>, accessToken?: string): Promise<Category>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param categoryAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(catalogID: string, categoryAssignment: Partial<CategoryAssignment>, accessToken?: string): Promise<void>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param categoryProductAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveProductAssignment(catalogID: string, categoryProductAssignment: Partial<CategoryProductAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace CostCenters {

        /**
        * @param buyerID ID of the buyer.
        * @param costCenter 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(buyerID: string, costCenter: Partial<CostCenter>, accessToken?: string): Promise<CostCenter>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param costCenterID ID of the cost center.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(buyerID: string, costCenterID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param costCenterID ID of the cost center.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(buyerID: string, costCenterID: string, options?: { userID?: string, userGroupID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param costCenterID ID of the cost center.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(buyerID: string, costCenterID: string, accessToken?: string): Promise<CostCenter>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListCostCenter>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.costCenterID ID of the cost center.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param options.level Level of the cost center assignment. Possible values: User, Group, Company.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(buyerID: string, options?: { costCenterID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListCostCenterAssignment>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param costCenterID ID of the cost center.
        * @param partialCostCenter 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(buyerID: string, costCenterID: string, partialCostCenter: Partial<CostCenter>, accessToken?: string): Promise<CostCenter>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param costCenterID ID of the cost center.
        * @param costCenter 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(buyerID: string, costCenterID: string, costCenter: Partial<CostCenter>, accessToken?: string): Promise<CostCenter>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param costCenterAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(buyerID: string, costCenterAssignment: Partial<CostCenterAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace CreditCards {

        /**
        * @param buyerID ID of the buyer.
        * @param creditCard 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(buyerID: string, creditCard: Partial<CreditCard>, accessToken?: string): Promise<CreditCard>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param creditCardID ID of the credit card.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(buyerID: string, creditCardID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param creditCardID ID of the credit card.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(buyerID: string, creditCardID: string, options?: { userID?: string, userGroupID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param creditCardID ID of the credit card.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(buyerID: string, creditCardID: string, accessToken?: string): Promise<CreditCard>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListCreditCard>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.creditCardID ID of the credit card.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param options.level Level of the credit card assignment. Possible values: User, Group, Company.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(buyerID: string, options?: { creditCardID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListCreditCardAssignment>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param creditCardID ID of the credit card.
        * @param partialCreditCard 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(buyerID: string, creditCardID: string, partialCreditCard: Partial<CreditCard>, accessToken?: string): Promise<CreditCard>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param creditCardID ID of the credit card.
        * @param creditCard 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(buyerID: string, creditCardID: string, creditCard: Partial<CreditCard>, accessToken?: string): Promise<CreditCard>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param creditCardAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(buyerID: string, creditCardAssignment: Partial<CreditCardAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace ImpersonationConfigs {

        /**
        * @param impersonationConfig 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(impersonationConfig: Partial<ImpersonationConfig>, accessToken?: string): Promise<ImpersonationConfig>    
        
        /**
        * @param impersonationConfigID ID of the impersonation config.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(impersonationConfigID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param impersonationConfigID ID of the impersonation config.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(impersonationConfigID: string, accessToken?: string): Promise<ImpersonationConfig>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListImpersonationConfig>    
        
        /**
        * @param impersonationConfigID ID of the impersonation config.
        * @param partialImpersonationConfig 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(impersonationConfigID: string, partialImpersonationConfig: Partial<ImpersonationConfig>, accessToken?: string): Promise<ImpersonationConfig>    
        
        /**
        * @param impersonationConfigID ID of the impersonation config.
        * @param impersonationConfig 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(impersonationConfigID: string, impersonationConfig: Partial<ImpersonationConfig>, accessToken?: string): Promise<ImpersonationConfig>    
        
    }
    
    export namespace Incrementors {

        /**
        * @param incrementor 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(incrementor: Partial<Incrementor>, accessToken?: string): Promise<Incrementor>    
        
        /**
        * @param incrementorID ID of the incrementor.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(incrementorID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param incrementorID ID of the incrementor.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(incrementorID: string, accessToken?: string): Promise<Incrementor>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListIncrementor>    
        
        /**
        * @param incrementorID ID of the incrementor.
        * @param partialIncrementor 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(incrementorID: string, partialIncrementor: Partial<Incrementor>, accessToken?: string): Promise<Incrementor>    
        
        /**
        * @param incrementorID ID of the incrementor.
        * @param incrementor 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(incrementorID: string, incrementor: Partial<Incrementor>, accessToken?: string): Promise<Incrementor>    
        
    }
    
    export namespace LineItems {

        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param lineItem 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(direction: string, orderID: string, lineItem: Partial<LineItem>, accessToken?: string): Promise<LineItem>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param lineItemID ID of the line item.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(direction: string, orderID: string, lineItemID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param lineItemID ID of the line item.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(direction: string, orderID: string, lineItemID: string, accessToken?: string): Promise<LineItem>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListLineItem>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param lineItemID ID of the line item.
        * @param partialLineItem 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(direction: string, orderID: string, lineItemID: string, partialLineItem: Partial<LineItem>, accessToken?: string): Promise<LineItem>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param lineItemID ID of the line item.
        * @param partialAddress 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function PatchShippingAddress(direction: string, orderID: string, lineItemID: string, partialAddress: Partial<Address>, accessToken?: string): Promise<LineItem>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param lineItemID ID of the line item.
        * @param lineItem 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(direction: string, orderID: string, lineItemID: string, lineItem: Partial<LineItem>, accessToken?: string): Promise<LineItem>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param lineItemID ID of the line item.
        * @param address 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SetShippingAddress(direction: string, orderID: string, lineItemID: string, address: Partial<Address>, accessToken?: string): Promise<LineItem>    
        
    }
    
    export namespace Me {

        /**
        * @param buyerAddress 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function CreateAddress(buyerAddress: Partial<BuyerAddress>, accessToken?: string): Promise<BuyerAddress>    
        
        /**
        * @param buyerCreditCard 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function CreateCreditCard(buyerCreditCard: Partial<BuyerCreditCard>, accessToken?: string): Promise<BuyerCreditCard>    
        
        /**
        * @param addressID ID of the address.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAddress(addressID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param creditcardID ID of the creditcard.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteCreditCard(creditcardID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get( accessToken?: string): Promise<MeUser>    
        
        /**
        * @param addressID ID of the address.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetAddress(addressID: string, accessToken?: string): Promise<BuyerAddress>    
        
        /**
        * @param catalogID ID of the catalog.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetCatalog(catalogID: string, accessToken?: string): Promise<Catalog>    
        
        /**
        * @param categoryID ID of the category.
        * @param options.catalogID ID of the catalog.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetCategory(categoryID: string, options?: { catalogID?: string }, accessToken?: string): Promise<Category>    
        
        /**
        * @param creditcardID ID of the creditcard.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetCreditCard(creditcardID: string, accessToken?: string): Promise<BuyerCreditCard>    
        
        /**
        * @param productID ID of the product.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetProduct(productID: string, accessToken?: string): Promise<BuyerProduct>    
        
        /**
        * @param promotionID ID of the promotion.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetPromotion(promotionID: string, accessToken?: string): Promise<Promotion>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetShipment(shipmentID: string, accessToken?: string): Promise<Shipment>    
        
        /**
        * @param productID ID of the product.
        * @param specID ID of the spec.
        * @param options.catalogID ID of the catalog.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetSpec(productID: string, specID: string, options?: { catalogID?: string }, accessToken?: string): Promise<BuyerSpec>    
        
        /**
        * @param spendingAccountID ID of the spending account.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetSpendingAccount(spendingAccountID: string, accessToken?: string): Promise<SpendingAccount>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAddresses(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListBuyerAddress>    
        
        /**
        * @param options.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
        * @param options.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListApprovableOrders(options?: { from?: string, to?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListOrder>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListCatalogs(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListCatalog>    
        
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
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListCategories(options?: { depth?: string, catalogID?: string, productID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListCategory>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListCostCenters(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListCostCenter>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListCreditCards(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListBuyerCreditCard>    
        
        /**
        * @param options.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
        * @param options.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListOrders(options?: { from?: string, to?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListOrder>    
        
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
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListProducts(options?: { catalogID?: string, categoryID?: string, depth?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListBuyerProduct>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListPromotions(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListPromotion>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param options.orderID ID of the order.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListShipmentItems(shipmentID: string, options?: { orderID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListShipmentItem>    
        
        /**
        * @param options.orderID ID of the order.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListShipments(options?: { orderID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListShipment>    
        
        /**
        * @param productID ID of the product.
        * @param options.catalogID ID of the catalog.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListSpecs(productID: string, options?: { catalogID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListBuyerSpec>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListSpendingAccounts(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListSpendingAccount>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListUserGroups(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListUserGroup>    
        
        /**
        * @param partialMeUser 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(partialMeUser: Partial<MeUser>, accessToken?: string): Promise<MeUser>    
        
        /**
        * @param addressID ID of the address.
        * @param partialBuyerAddress 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function PatchAddress(addressID: string, partialBuyerAddress: Partial<BuyerAddress>, accessToken?: string): Promise<void>    
        
        /**
        * @param creditcardID ID of the creditcard.
        * @param partialBuyerCreditCard 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function PatchCreditCard(creditcardID: string, partialBuyerCreditCard: Partial<BuyerCreditCard>, accessToken?: string): Promise<void>    
        
        /**
        * @param options.anonUserToken Anon user token of the user.
        * @param meUser 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Register(meUser: Partial<MeUser>, options?: { anonUserToken?: string }, accessToken?: string): Promise<Object>    
        
        /**
        * @param tokenPasswordReset 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ResetPasswordByToken(tokenPasswordReset: Partial<TokenPasswordReset>, accessToken?: string): Promise<void>    
        
        /**
        * @param meUser 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(meUser: Partial<MeUser>, accessToken?: string): Promise<MeUser>    
        
        /**
        * @param addressID ID of the address.
        * @param buyerAddress 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAddress(addressID: string, buyerAddress: Partial<BuyerAddress>, accessToken?: string): Promise<BuyerAddress>    
        
        /**
        * @param creditcardID ID of the creditcard.
        * @param buyerCreditCard 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveCreditCard(creditcardID: string, buyerCreditCard: Partial<BuyerCreditCard>, accessToken?: string): Promise<BuyerCreditCard>    
        
        /**
        * @param options.anonUserToken Anon user token of the me.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function TransferAnonUserOrder(options?: { anonUserToken?: string }, accessToken?: string): Promise<void>    
        
    }
    
    export namespace MessageSenders {

        /**
        * @param messageSender 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(messageSender: Partial<MessageSender>, accessToken?: string): Promise<MessageSender>    
        
        /**
        * @param messageSenderID ID of the message sender.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(messageSenderID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param messageSenderID ID of the message sender.
        * @param options.buyerID ID of the buyer.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param options.supplierID ID of the supplier.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(messageSenderID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param messageSenderID ID of the message sender.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(messageSenderID: string, accessToken?: string): Promise<MessageSender>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListMessageSender>    
        
        /**
        * @param options.buyerID ID of the buyer.
        * @param options.messageSenderID ID of the message sender.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param options.level Level of the message sender assignment. Possible values: User, Group, Company.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.supplierID ID of the supplier.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(options?: { buyerID?: string, messageSenderID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, supplierID?: string }, accessToken?: string): Promise<ListMessageSenderAssignment>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListCCListenerAssignments(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListMessageCCListenerAssignment>    
        
        /**
        * @param messageSenderID ID of the message sender.
        * @param partialMessageSender 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(messageSenderID: string, partialMessageSender: Partial<MessageSender>, accessToken?: string): Promise<MessageSender>    
        
        /**
        * @param messageSenderID ID of the message sender.
        * @param messageSender 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(messageSenderID: string, messageSender: Partial<MessageSender>, accessToken?: string): Promise<MessageSender>    
        
        /**
        * @param messageSenderAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(messageSenderAssignment: Partial<MessageSenderAssignment>, accessToken?: string): Promise<void>    
        
        /**
        * @param messageCCListenerAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveCCListenerAssignment(messageCCListenerAssignment: Partial<MessageCCListenerAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace OpenIdConnects {

        /**
        * @param openIdConnect 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(openIdConnect: Partial<OpenIdConnect>, accessToken?: string): Promise<OpenIdConnect>    
        
        /**
        * @param openidconnectID ID of the openidconnect.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(openidconnectID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param openidconnectID ID of the openidconnect.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(openidconnectID: string, accessToken?: string): Promise<OpenIdConnect>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListOpenIdConnect>    
        
        /**
        * @param openidconnectID ID of the openidconnect.
        * @param partialOpenIdConnect 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(openidconnectID: string, partialOpenIdConnect: Partial<OpenIdConnect>, accessToken?: string): Promise<OpenIdConnect>    
        
        /**
        * @param openidconnectID ID of the openidconnect.
        * @param openIdConnect 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(openidconnectID: string, openIdConnect: Partial<OpenIdConnect>, accessToken?: string): Promise<OpenIdConnect>    
        
    }
    
    export namespace Orders {

        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param promoCode Promo code of the order promotion.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function AddPromotion(direction: string, orderID: string, promoCode: string, accessToken?: string): Promise<OrderPromotion>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param orderApprovalInfo 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Approve(direction: string, orderID: string, orderApprovalInfo: Partial<OrderApprovalInfo>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Cancel(direction: string, orderID: string, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param order 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(direction: string, order: Partial<Order>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param orderApprovalInfo 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Decline(direction: string, orderID: string, orderApprovalInfo: Partial<OrderApprovalInfo>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(direction: string, orderID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(direction: string, orderID: string, accessToken?: string): Promise<Order>    
        
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
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(direction: string, options?: { buyerID?: string, supplierID?: string, from?: string, to?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListOrder>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListApprovals(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListOrderApproval>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListEligibleApprovers(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListUser>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListPromotions(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListOrderPromotion>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param partialOrder 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(direction: string, orderID: string, partialOrder: Partial<Order>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param partialAddress 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function PatchBillingAddress(direction: string, orderID: string, partialAddress: Partial<Address>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param partialUser 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function PatchFromUser(direction: string, orderID: string, partialUser: Partial<User>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param partialAddress 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function PatchShippingAddress(direction: string, orderID: string, partialAddress: Partial<Address>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param promoCode Promo code of the order.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function RemovePromotion(direction: string, orderID: string, promoCode: string, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param order 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(direction: string, orderID: string, order: Partial<Order>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param address 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SetBillingAddress(direction: string, orderID: string, address: Partial<Address>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param address 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SetShippingAddress(direction: string, orderID: string, address: Partial<Address>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param shipment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Ship(direction: string, orderID: string, shipment: Partial<Shipment>, accessToken?: string): Promise<Order>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Submit(direction: string, orderID: string, accessToken?: string): Promise<Order>    
        
    }
    
    export namespace PasswordResets {

        /**
        * @param verificationCode Verification code of the password reset.
        * @param passwordReset 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ResetPasswordByVerificationCode(verificationCode: string, passwordReset: Partial<PasswordReset>, accessToken?: string): Promise<void>    
        
        /**
        * @param passwordResetRequest 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SendVerificationCode(passwordResetRequest: Partial<PasswordResetRequest>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace Payments {

        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param payment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(direction: string, orderID: string, payment: Partial<Payment>, accessToken?: string): Promise<Payment>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param paymentID ID of the payment.
        * @param paymentTransaction 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function CreateTransaction(direction: string, orderID: string, paymentID: string, paymentTransaction: Partial<PaymentTransaction>, accessToken?: string): Promise<Payment>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param paymentID ID of the payment.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(direction: string, orderID: string, paymentID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param paymentID ID of the payment.
        * @param transactionID ID of the transaction.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteTransaction(direction: string, orderID: string, paymentID: string, transactionID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param paymentID ID of the payment.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(direction: string, orderID: string, paymentID: string, accessToken?: string): Promise<Payment>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListPayment>    
        
        /**
        * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
        * @param orderID ID of the order.
        * @param paymentID ID of the payment.
        * @param partialPayment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(direction: string, orderID: string, paymentID: string, partialPayment: Partial<Payment>, accessToken?: string): Promise<Payment>    
        
    }
    
    export namespace PriceSchedules {

        /**
        * @param priceSchedule 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(priceSchedule: Partial<PriceSchedule>, accessToken?: string): Promise<PriceSchedule>    
        
        /**
        * @param priceScheduleID ID of the price schedule.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(priceScheduleID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param priceScheduleID ID of the price schedule.
        * @param options.quantity Quantity of the price schedule.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeletePriceBreak(priceScheduleID: string, options?: { quantity?: number }, accessToken?: string): Promise<void>    
        
        /**
        * @param priceScheduleID ID of the price schedule.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(priceScheduleID: string, accessToken?: string): Promise<PriceSchedule>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListPriceSchedule>    
        
        /**
        * @param priceScheduleID ID of the price schedule.
        * @param partialPriceSchedule 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(priceScheduleID: string, partialPriceSchedule: Partial<PriceSchedule>, accessToken?: string): Promise<PriceSchedule>    
        
        /**
        * @param priceScheduleID ID of the price schedule.
        * @param priceSchedule 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(priceScheduleID: string, priceSchedule: Partial<PriceSchedule>, accessToken?: string): Promise<PriceSchedule>    
        
        /**
        * @param priceScheduleID ID of the price schedule.
        * @param priceBreak 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SavePriceBreak(priceScheduleID: string, priceBreak: Partial<PriceBreak>, accessToken?: string): Promise<PriceSchedule>    
        
    }
    
    export namespace Products {

        /**
        * @param product 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(product: Partial<Product>, accessToken?: string): Promise<Product>    
        
        /**
        * @param productID ID of the product.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(productID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param productID ID of the product.
        * @param buyerID ID of the buyer.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(productID: string, buyerID: string, options?: { userID?: string, userGroupID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param productID ID of the product.
        * @param options.overwriteExisting Overwrite existing of the product.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GenerateVariants(productID: string, options?: { overwriteExisting?: boolean }, accessToken?: string): Promise<Product>    
        
        /**
        * @param productID ID of the product.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(productID: string, accessToken?: string): Promise<Product>    
        
        /**
        * @param productID ID of the product.
        * @param variantID ID of the variant.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetVariant(productID: string, variantID: string, accessToken?: string): Promise<Variant>    
        
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
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { catalogID?: string, categoryID?: string, supplierID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListProduct>    
        
        /**
        * @param options.productID ID of the product.
        * @param options.priceScheduleID ID of the price schedule.
        * @param options.buyerID ID of the buyer.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param options.level Level of the product assignment. Possible values: User, Group, Company.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(options?: { productID?: string, priceScheduleID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListProductAssignment>    
        
        /**
        * @param productID ID of the product.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListSuppliers(productID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListSupplier>    
        
        /**
        * @param productID ID of the product.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListVariants(productID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListVariant>    
        
        /**
        * @param productID ID of the product.
        * @param partialProduct 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(productID: string, partialProduct: Partial<Product>, accessToken?: string): Promise<Product>    
        
        /**
        * @param productID ID of the product.
        * @param variantID ID of the variant.
        * @param partialVariant 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function PatchVariant(productID: string, variantID: string, partialVariant: Partial<Variant>, accessToken?: string): Promise<Variant>    
        
        /**
        * @param productID ID of the product.
        * @param supplierID ID of the supplier.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function RemoveSupplier(productID: string, supplierID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param productID ID of the product.
        * @param product 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(productID: string, product: Partial<Product>, accessToken?: string): Promise<Product>    
        
        /**
        * @param productAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(productAssignment: Partial<ProductAssignment>, accessToken?: string): Promise<void>    
        
        /**
        * @param productID ID of the product.
        * @param supplierID ID of the supplier.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveSupplier(productID: string, supplierID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param productID ID of the product.
        * @param variantID ID of the variant.
        * @param variant 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveVariant(productID: string, variantID: string, variant: Partial<Variant>, accessToken?: string): Promise<Variant>    
        
    }
    
    export namespace ProductFacets {

        /**
        * @param productFacet 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(productFacet: Partial<ProductFacet>, accessToken?: string): Promise<ProductFacet>    
        
        /**
        * @param productFacetID ID of the product facet.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(productFacetID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param productFacetID ID of the product facet.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(productFacetID: string, accessToken?: string): Promise<ProductFacet>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListProductFacet>    
        
        /**
        * @param productFacetID ID of the product facet.
        * @param partialProductFacet 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(productFacetID: string, partialProductFacet: Partial<ProductFacet>, accessToken?: string): Promise<ProductFacet>    
        
        /**
        * @param productFacetID ID of the product facet.
        * @param productFacet 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(productFacetID: string, productFacet: Partial<ProductFacet>, accessToken?: string): Promise<ProductFacet>    
        
    }
    
    export namespace Promotions {

        /**
        * @param promotion 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(promotion: Partial<Promotion>, accessToken?: string): Promise<Promotion>    
        
        /**
        * @param promotionID ID of the promotion.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(promotionID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param promotionID ID of the promotion.
        * @param options.buyerID ID of the buyer.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(promotionID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param promotionID ID of the promotion.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(promotionID: string, accessToken?: string): Promise<Promotion>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListPromotion>    
        
        /**
        * @param options.buyerID ID of the buyer.
        * @param options.promotionID ID of the promotion.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param options.level Level of the promotion assignment. Possible values: User, Group, Company.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(options?: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListPromotionAssignment>    
        
        /**
        * @param promotionID ID of the promotion.
        * @param partialPromotion 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(promotionID: string, partialPromotion: Partial<Promotion>, accessToken?: string): Promise<Promotion>    
        
        /**
        * @param promotionID ID of the promotion.
        * @param promotion 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(promotionID: string, promotion: Partial<Promotion>, accessToken?: string): Promise<Promotion>    
        
        /**
        * @param promotionAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(promotionAssignment: Partial<PromotionAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace SecurityProfiles {

        /**
        * @param securityProfileID ID of the security profile.
        * @param options.buyerID ID of the buyer.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param options.supplierID ID of the supplier.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(securityProfileID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param securityProfileID ID of the security profile.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(securityProfileID: string, accessToken?: string): Promise<SecurityProfile>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListSecurityProfile>    
        
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
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(options?: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: string, level?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListSecurityProfileAssignment>    
        
        /**
        * @param securityProfileAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(securityProfileAssignment: Partial<SecurityProfileAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace Shipments {

        /**
        * @param shipment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(shipment: Partial<Shipment>, accessToken?: string): Promise<Shipment>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(shipmentID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param orderID ID of the order.
        * @param lineItemID ID of the line item.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteItem(shipmentID: string, orderID: string, lineItemID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(shipmentID: string, accessToken?: string): Promise<Shipment>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param orderID ID of the order.
        * @param lineItemID ID of the line item.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetItem(shipmentID: string, orderID: string, lineItemID: string, accessToken?: string): Promise<ShipmentItem>    
        
        /**
        * @param options.orderID ID of the order.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { orderID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListShipment>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListItems(shipmentID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListShipmentItem>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param partialShipment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(shipmentID: string, partialShipment: Partial<Shipment>, accessToken?: string): Promise<Shipment>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param shipment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(shipmentID: string, shipment: Partial<Shipment>, accessToken?: string): Promise<Shipment>    
        
        /**
        * @param shipmentID ID of the shipment.
        * @param shipmentItem 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveItem(shipmentID: string, shipmentItem: Partial<ShipmentItem>, accessToken?: string): Promise<ShipmentItem>    
        
    }
    
    export namespace Specs {

        /**
        * @param spec 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(spec: Partial<Spec>, accessToken?: string): Promise<Spec>    
        
        /**
        * @param specID ID of the spec.
        * @param specOption 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function CreateOption(specID: string, specOption: Partial<SpecOption>, accessToken?: string): Promise<SpecOption>    
        
        /**
        * @param specID ID of the spec.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(specID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param specID ID of the spec.
        * @param optionID ID of the option.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteOption(specID: string, optionID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param specID ID of the spec.
        * @param productID ID of the product.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteProductAssignment(specID: string, productID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param specID ID of the spec.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(specID: string, accessToken?: string): Promise<Spec>    
        
        /**
        * @param specID ID of the spec.
        * @param optionID ID of the option.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetOption(specID: string, optionID: string, accessToken?: string): Promise<SpecOption>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListSpec>    
        
        /**
        * @param specID ID of the spec.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListOptions(specID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListSpecOption>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListProductAssignments(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListSpecProductAssignment>    
        
        /**
        * @param specID ID of the spec.
        * @param partialSpec 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(specID: string, partialSpec: Partial<Spec>, accessToken?: string): Promise<Spec>    
        
        /**
        * @param specID ID of the spec.
        * @param optionID ID of the option.
        * @param partialSpecOption 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function PatchOption(specID: string, optionID: string, partialSpecOption: Partial<SpecOption>, accessToken?: string): Promise<SpecOption>    
        
        /**
        * @param specID ID of the spec.
        * @param spec 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(specID: string, spec: Partial<Spec>, accessToken?: string): Promise<Spec>    
        
        /**
        * @param specID ID of the spec.
        * @param optionID ID of the option.
        * @param specOption 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveOption(specID: string, optionID: string, specOption: Partial<SpecOption>, accessToken?: string): Promise<SpecOption>    
        
        /**
        * @param specProductAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveProductAssignment(specProductAssignment: Partial<SpecProductAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace SpendingAccounts {

        /**
        * @param buyerID ID of the buyer.
        * @param spendingAccount 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(buyerID: string, spendingAccount: Partial<SpendingAccount>, accessToken?: string): Promise<SpendingAccount>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param spendingAccountID ID of the spending account.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(buyerID: string, spendingAccountID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param spendingAccountID ID of the spending account.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteAssignment(buyerID: string, spendingAccountID: string, options?: { userID?: string, userGroupID?: string }, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param spendingAccountID ID of the spending account.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(buyerID: string, spendingAccountID: string, accessToken?: string): Promise<SpendingAccount>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListSpendingAccount>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.spendingAccountID ID of the spending account.
        * @param options.userID ID of the user.
        * @param options.userGroupID ID of the user group.
        * @param options.level Level of the spending account assignment. Possible values: User, Group, Company.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListAssignments(buyerID: string, options?: { spendingAccountID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListSpendingAccountAssignment>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param spendingAccountID ID of the spending account.
        * @param partialSpendingAccount 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(buyerID: string, spendingAccountID: string, partialSpendingAccount: Partial<SpendingAccount>, accessToken?: string): Promise<SpendingAccount>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param spendingAccountID ID of the spending account.
        * @param spendingAccount 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(buyerID: string, spendingAccountID: string, spendingAccount: Partial<SpendingAccount>, accessToken?: string): Promise<SpendingAccount>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param spendingAccountAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveAssignment(buyerID: string, spendingAccountAssignment: Partial<SpendingAccountAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace Suppliers {

        /**
        * @param supplier 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(supplier: Partial<Supplier>, accessToken?: string): Promise<Supplier>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(supplierID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(supplierID: string, accessToken?: string): Promise<Supplier>    
        
        /**
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListSupplier>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param partialSupplier 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(supplierID: string, partialSupplier: Partial<Supplier>, accessToken?: string): Promise<Supplier>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param supplier 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(supplierID: string, supplier: Partial<Supplier>, accessToken?: string): Promise<Supplier>    
        
    }
    
    export namespace SupplierAddresses {

        /**
        * @param supplierID ID of the supplier.
        * @param address 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(supplierID: string, address: Partial<Address>, accessToken?: string): Promise<Address>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param addressID ID of the address.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(supplierID: string, addressID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param addressID ID of the address.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(supplierID: string, addressID: string, accessToken?: string): Promise<Address>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(supplierID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListAddress>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param addressID ID of the address.
        * @param partialAddress 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(supplierID: string, addressID: string, partialAddress: Partial<Address>, accessToken?: string): Promise<Address>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param addressID ID of the address.
        * @param address 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(supplierID: string, addressID: string, address: Partial<Address>, accessToken?: string): Promise<Address>    
        
    }
    
    export namespace SupplierUsers {

        /**
        * @param supplierID ID of the supplier.
        * @param user 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(supplierID: string, user: Partial<User>, accessToken?: string): Promise<User>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userID ID of the user.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(supplierID: string, userID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userID ID of the user.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(supplierID: string, userID: string, accessToken?: string): Promise<User>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userID ID of the user.
        * @param impersonateTokenRequest 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetAccessToken(supplierID: string, userID: string, impersonateTokenRequest: Partial<ImpersonateTokenRequest>, accessToken?: string): Promise<AccessToken>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param options.userGroupID ID of the user group.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(supplierID: string, options?: { userGroupID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListUser>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userID ID of the user.
        * @param partialUser 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(supplierID: string, userID: string, partialUser: Partial<User>, accessToken?: string): Promise<User>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userID ID of the user.
        * @param user 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(supplierID: string, userID: string, user: Partial<User>, accessToken?: string): Promise<User>    
        
    }
    
    export namespace SupplierUserGroups {

        /**
        * @param supplierID ID of the supplier.
        * @param userGroup 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(supplierID: string, userGroup: Partial<UserGroup>, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(supplierID: string, userGroupID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userGroupID ID of the user group.
        * @param userID ID of the user.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteUserAssignment(supplierID: string, userGroupID: string, userID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(supplierID: string, userGroupID: string, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(supplierID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListUserGroup>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param options.userGroupID ID of the user group.
        * @param options.userID ID of the user.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListUserAssignments(supplierID: string, options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListUserGroupAssignment>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userGroupID ID of the user group.
        * @param partialUserGroup 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(supplierID: string, userGroupID: string, partialUserGroup: Partial<UserGroup>, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userGroupID ID of the user group.
        * @param userGroup 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(supplierID: string, userGroupID: string, userGroup: Partial<UserGroup>, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param supplierID ID of the supplier.
        * @param userGroupAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveUserAssignment(supplierID: string, userGroupAssignment: Partial<UserGroupAssignment>, accessToken?: string): Promise<void>    
        
    }
    
    export namespace Users {

        /**
        * @param buyerID ID of the buyer.
        * @param user 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(buyerID: string, user: Partial<User>, accessToken?: string): Promise<User>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userID ID of the user.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(buyerID: string, userID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userID ID of the user.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(buyerID: string, userID: string, accessToken?: string): Promise<User>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userID ID of the user.
        * @param impersonateTokenRequest 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function GetAccessToken(buyerID: string, userID: string, impersonateTokenRequest: Partial<ImpersonateTokenRequest>, accessToken?: string): Promise<AccessToken>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.userGroupID ID of the user group.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(buyerID: string, options?: { userGroupID?: string, search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListUser>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userID ID of the user.
        * @param newBuyerID ID of the new buyer.
        * @param options.orders Orders of the user. Possible values: None, Unsubmitted, All.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Move(buyerID: string, userID: string, newBuyerID: string, options?: { orders?: string }, accessToken?: string): Promise<User>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userID ID of the user.
        * @param partialUser 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(buyerID: string, userID: string, partialUser: Partial<User>, accessToken?: string): Promise<User>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userID ID of the user.
        * @param user 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(buyerID: string, userID: string, user: Partial<User>, accessToken?: string): Promise<User>    
        
    }
    
    export namespace UserGroups {

        /**
        * @param buyerID ID of the buyer.
        * @param userGroup 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Create(buyerID: string, userGroup: Partial<UserGroup>, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Delete(buyerID: string, userGroupID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userGroupID ID of the user group.
        * @param userID ID of the user.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function DeleteUserAssignment(buyerID: string, userGroupID: string, userID: string, accessToken?: string): Promise<void>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userGroupID ID of the user group.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Get(buyerID: string, userGroupID: string, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.search Word or phrase to search for.
        * @param options.searchOn Comma-delimited list of fields to search on.
        * @param options.sortBy Comma-delimited list of fields to sort by.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: {[key:string]: string | string[]} }, accessToken?: string): Promise<ListUserGroup>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param options.userGroupID ID of the user group.
        * @param options.userID ID of the user.
        * @param options.page Page of results to return. Default: 1
        * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function ListUserAssignments(buyerID: string, options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number }, accessToken?: string): Promise<ListUserGroupAssignment>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userGroupID ID of the user group.
        * @param partialUserGroup 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Patch(buyerID: string, userGroupID: string, partialUserGroup: Partial<UserGroup>, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userGroupID ID of the user group.
        * @param userGroup 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function Save(buyerID: string, userGroupID: string, userGroup: Partial<UserGroup>, accessToken?: string): Promise<UserGroup>    
        
        /**
        * @param buyerID ID of the buyer.
        * @param userGroupAssignment 
        * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation)
        */
        export function SaveUserAssignment(buyerID: string, userGroupAssignment: Partial<UserGroupAssignment>, accessToken?: string): Promise<void>    
        
    }
    
}
