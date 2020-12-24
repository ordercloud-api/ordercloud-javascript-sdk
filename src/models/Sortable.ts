export type Sortable<TSortableEndpoint extends SortableEndpoint> = SortableMap[TSortableEndpoint]

interface SortableMap {
'AdminAddresses.List': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'AdminUsers.List': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'ApiClients.List': ('ID' | 'AppName' | 'DefaultContextUserName' | '!ID' | '!AppName' | '!DefaultContextUserName')[]
'Buyers.List': ('ID' | 'Name' | 'DateCreated' | '!ID' | '!Name' | '!DateCreated')[]
'Addresses.List': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'ApprovalRules.List': ('Name' | 'ID' | 'ApprovingGroupID' | 'RuleExpression' | '!Name' | '!ID' | '!ApprovingGroupID' | '!RuleExpression')[]
'CostCenters.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'CreditCards.List': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate' | 'DateCreated' | '!ID' | '!CardholderName' | '!CardType' | '!ExpirationDate' | '!DateCreated')[]
'SpendingAccounts.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'UserGroups.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'Users.List': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'Catalogs.List': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Categories.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'ImpersonationConfigs.List': ('ImpersonationBuyerID' | 'ImpersonationGroupID' | 'ImpersonationUserID' | 'BuyerID' | 'GroupID' | 'UserID' | 'SecurityProfileID' | 'ClientID' | 'ID' | '!ImpersonationBuyerID' | '!ImpersonationGroupID' | '!ImpersonationUserID' | '!BuyerID' | '!GroupID' | '!UserID' | '!SecurityProfileID' | '!ClientID' | '!ID')[]
'Incrementors.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'IntegrationEvents.List': ('ID' | 'EventType' | 'Name' | '!ID' | '!EventType' | '!Name')[]
'Me.ListAddresses': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'Me.ListCatalogs': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Me.ListCategories': ('ID' | 'Name' | '!ID' | '!Name')[]
'Me.ListCostCenters': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListCreditCards': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate' | 'DateCreated' | '!ID' | '!CardholderName' | '!CardType' | '!ExpirationDate' | '!DateCreated')[]
'Me.ListOrders': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Me.ListApprovableOrders': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Me.ListProducts': string[]
'Me.ListSpecs': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Me.ListVariants': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Me.ListPromotions': ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine')[]
'Me.ListShipments': ('DateShipped' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Me.ListShipmentItems': ('DateShipped' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Me.ListSpendingAccounts': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListUserGroups': ('Name' | 'ID' | '!Name' | '!ID')[]
'MessageSenders.List': ('ID' | 'Name' | 'URL' | '!ID' | '!Name' | '!URL')[]
'MessageSenders.ListCCListenerAssignments': ('ID' | 'Name' | 'URL' | '!ID' | '!Name' | '!URL')[]
'OpenIdConnects.List': ('ID' | '!ID')[]
'Orders.List': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Orders.ListApprovals': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Orders.ListEligibleApprovers': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'LineItems.List': ('DateAdded' | 'ID' | 'ProductID' | '!DateAdded' | '!ID' | '!ProductID')[]
'Payments.List': ('DateCreated' | 'ID' | 'Type' | 'CreditCardID' | 'SpendingAccountID' | '!DateCreated' | '!ID' | '!Type' | '!CreditCardID' | '!SpendingAccountID')[]
'Orders.ListPromotions': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Orders.ListShipments': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'PriceSchedules.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'ProductFacets.List': ('ListOrder' | 'ID' | 'Name' | 'XpPath' | '!ListOrder' | '!ID' | '!Name' | '!XpPath')[]
'Products.List': string[]
'Products.ListSpecs': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Products.ListSuppliers': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Products.ListVariants': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Promotions.List': ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine')[]
'SecurityProfiles.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'Shipments.List': ('DateShipped' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Shipments.ListItems': ('DateShipped' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Specs.List': ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[]
'Specs.ListOptions': ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[]
'Specs.ListProductAssignments': ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[]
'Suppliers.List': ('ID' | 'Name' | 'DateCreated' | '!ID' | '!Name' | '!DateCreated')[]
'SupplierAddresses.List': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'SupplierUserGroups.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'SupplierUsers.List': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'AdminUserGroups.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'Webhooks.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'XpIndices.List': ('ThingType' | 'Key' | '!ThingType' | '!Key')[]
}

type SortableEndpoint = 'AdminAddresses.List' | 
'AdminUsers.List' | 
'ApiClients.List' | 
'Buyers.List' | 
'Addresses.List' | 
'ApprovalRules.List' | 
'CostCenters.List' | 
'CreditCards.List' | 
'SpendingAccounts.List' | 
'UserGroups.List' | 
'Users.List' | 
'Catalogs.List' | 
'Categories.List' | 
'ImpersonationConfigs.List' | 
'Incrementors.List' | 
'IntegrationEvents.List' | 
'Me.ListAddresses' | 
'Me.ListCatalogs' | 
'Me.ListCategories' | 
'Me.ListCostCenters' | 
'Me.ListCreditCards' | 
'Me.ListOrders' | 
'Me.ListApprovableOrders' | 
'Me.ListProducts' | 
'Me.ListSpecs' | 
'Me.ListVariants' | 
'Me.ListPromotions' | 
'Me.ListShipments' | 
'Me.ListShipmentItems' | 
'Me.ListSpendingAccounts' | 
'Me.ListUserGroups' | 
'MessageSenders.List' | 
'MessageSenders.ListCCListenerAssignments' | 
'OpenIdConnects.List' | 
'Orders.List' | 
'Orders.ListApprovals' | 
'Orders.ListEligibleApprovers' | 
'LineItems.List' | 
'Payments.List' | 
'Orders.ListPromotions' | 
'Orders.ListShipments' | 
'PriceSchedules.List' | 
'ProductFacets.List' | 
'Products.List' | 
'Products.ListSpecs' | 
'Products.ListSuppliers' | 
'Products.ListVariants' | 
'Promotions.List' | 
'SecurityProfiles.List' | 
'Shipments.List' | 
'Shipments.ListItems' | 
'Specs.List' | 
'Specs.ListOptions' | 
'Specs.ListProductAssignments' | 
'Suppliers.List' | 
'SupplierAddresses.List' | 
'SupplierUserGroups.List' | 
'SupplierUsers.List' | 
'AdminUserGroups.List' | 
'Webhooks.List' | 
'XpIndices.List'
