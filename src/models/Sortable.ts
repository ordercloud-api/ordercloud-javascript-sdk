export type Sortable<TSortableEndpoint extends SortableEndpoint> = SortableMap[TSortableEndpoint]

interface SortableMap {
'AdminAddresses.List': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'AdminUsers.List': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'ApiClients.List': ('ID' | 'AppName' | 'DefaultContextUserName' | '!ID' | '!AppName' | '!DefaultContextUserName')[]
'SellerApprovalRules.List': ('Name' | 'ID' | 'ApprovingGroupID' | 'RuleExpression' | '!Name' | '!ID' | '!ApprovingGroupID' | '!RuleExpression')[]
'Buyers.List': ('ID' | 'Name' | 'DateCreated' | '!ID' | '!Name' | '!DateCreated')[]
'Addresses.List': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'ApprovalRules.List': ('Name' | 'ID' | 'ApprovingGroupID' | 'RuleExpression' | '!Name' | '!ID' | '!ApprovingGroupID' | '!RuleExpression')[]
'CostCenters.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'CreditCards.List': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate' | 'DateCreated' | '!ID' | '!CardholderName' | '!CardType' | '!ExpirationDate' | '!DateCreated')[]
'Buyers.ListBuyerSellers': ('Name' | 'ID' | '!Name' | '!ID')[]
'SpendingAccounts.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'UserGroups.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'Users.List': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'Catalogs.List': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Categories.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'ImpersonationConfigs.List': ('ImpersonationBuyerID' | 'ImpersonationGroupID' | 'ImpersonationUserID' | 'BuyerID' | 'GroupID' | 'UserID' | 'SecurityProfileID' | 'ClientID' | 'ID' | '!ImpersonationBuyerID' | '!ImpersonationGroupID' | '!ImpersonationUserID' | '!BuyerID' | '!GroupID' | '!UserID' | '!SecurityProfileID' | '!ClientID' | '!ID')[]
'Incrementors.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'IntegrationEvents.List': ('ID' | 'EventType' | 'Name' | '!ID' | '!EventType' | '!Name')[]
'LineItems.ListAcrossOrders': ('DateAdded' | 'ID' | 'ProductID' | '!DateAdded' | '!ID' | '!ProductID')[]
'Locales.List': ('ID' | '!ID')[]
'Me.ListAddresses': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'Me.ListCatalogs': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Me.ListCategories': ('ID' | 'Name' | '!ID' | '!Name')[]
'Me.ListCostCenters': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListCreditCards': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate' | 'DateCreated' | '!ID' | '!CardholderName' | '!CardType' | '!ExpirationDate' | '!DateCreated')[]
'Me.ListOrders': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'LastUpdated' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!LastUpdated' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Me.ListApprovableOrders': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'LastUpdated' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!LastUpdated' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Me.ListProducts': string[]
'Me.ListSpecs': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Me.ListVariants': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Me.ListPromotions': ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine')[]
'Me.ListBuyerSellers': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListShipments': ('DateShipped' | 'OwnerID' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!OwnerID' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Me.ListShipmentItems': ('DateShipped' | 'OwnerID' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!OwnerID' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Me.ListSpendingAccounts': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListUserGroups': ('Name' | 'ID' | '!Name' | '!ID')[]
'MessageSenders.List': ('ID' | 'Name' | 'URL' | '!ID' | '!Name' | '!URL')[]
'MessageSenders.ListCCListenerAssignments': ('BuyerID' | 'UserGroupID' | 'UserID' | 'MessageConfigName' | 'SupplierID' | '!BuyerID' | '!UserGroupID' | '!UserID' | '!MessageConfigName' | '!SupplierID')[]
'OpenIdConnects.List': ('ID' | '!ID')[]
'OrderReturns.List': ('DateSubmitted' | 'DateCreated' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'LastUpdated' | '!DateSubmitted' | '!DateCreated' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!LastUpdated')[]
'OrderReturns.ListApprovals': ('DateCreated' | 'ApprovalRuleID' | 'ApprovingGroupID' | 'Status' | 'DateCompleted' | 'Approver' | '!DateCreated' | '!ApprovalRuleID' | '!ApprovingGroupID' | '!Status' | '!DateCompleted' | '!Approver')[]
'OrderReturns.ListEligibleApprovers': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'Orders.List': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'LastUpdated' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!LastUpdated' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Orders.ListApprovals': ('DateCreated' | 'AllowResubmit' | 'ApprovalRuleID' | 'ApprovingGroupID' | 'Status' | 'DateCompleted' | 'Approver' | '!DateCreated' | '!AllowResubmit' | '!ApprovalRuleID' | '!ApprovingGroupID' | '!Status' | '!DateCompleted' | '!Approver')[]
'Orders.ListEligibleApprovers': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'LineItems.List': ('DateAdded' | 'ID' | 'ProductID' | '!DateAdded' | '!ID' | '!ProductID')[]
'Payments.List': ('DateCreated' | 'ID' | 'Type' | 'CreditCardID' | 'SpendingAccountID' | '!DateCreated' | '!ID' | '!Type' | '!CreditCardID' | '!SpendingAccountID')[]
'Orders.ListPromotions': ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine')[]
'Orders.ListShipments': ('DateShipped' | 'OwnerID' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!OwnerID' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'PriceSchedules.List': ('Name' | 'ID' | 'OwnerID' | '!Name' | '!ID' | '!OwnerID')[]
'ProductFacets.List': ('ListOrder' | 'ID' | 'Name' | 'XpPath' | '!ListOrder' | '!ID' | '!Name' | '!XpPath')[]
'Products.List': string[]
'InventoryRecords.List': ('ID' | 'AddressID' | '!ID' | '!AddressID')[]
'Products.ListSpecs': ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[]
'Products.ListSuppliers': ('ID' | 'Name' | 'DateCreated' | '!ID' | '!Name' | '!DateCreated')[]
'Products.ListVariants': ('ID' | 'Name' | '!ID' | '!Name')[]
'InventoryRecords.ListVariant': ('ID' | 'AddressID' | '!ID' | '!AddressID')[]
'Promotions.List': ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine')[]
'SecurityProfiles.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'Shipments.List': ('DateShipped' | 'OwnerID' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!OwnerID' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Shipments.ListItems': []
'Specs.List': ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[]
'Specs.ListOptions': ('ListOrder' | 'ID' | '!ListOrder' | '!ID')[]
'Specs.ListProductAssignments': ('SpecID' | 'ProductID' | 'DefaultOptionID' | 'DefaultValue' | '!SpecID' | '!ProductID' | '!DefaultOptionID' | '!DefaultValue')[]
'Suppliers.List': ('ID' | 'Name' | 'DateCreated' | '!ID' | '!Name' | '!DateCreated')[]
'SupplierAddresses.List': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'Suppliers.ListBuyers': ('Name' | 'ID' | '!Name' | '!ID')[]
'SupplierUserGroups.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'SupplierUsers.List': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'AdminUserGroups.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'Webhooks.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'XpIndices.List': ('ThingType' | 'Key' | '!ThingType' | '!Key')[]
}

type SortableEndpoint = 'AdminAddresses.List' | 
'AdminUsers.List' | 
'ApiClients.List' | 
'SellerApprovalRules.List' | 
'Buyers.List' | 
'Addresses.List' | 
'ApprovalRules.List' | 
'CostCenters.List' | 
'CreditCards.List' | 
'Buyers.ListBuyerSellers' | 
'SpendingAccounts.List' | 
'UserGroups.List' | 
'Users.List' | 
'Catalogs.List' | 
'Categories.List' | 
'ImpersonationConfigs.List' | 
'Incrementors.List' | 
'IntegrationEvents.List' | 
'LineItems.ListAcrossOrders' | 
'Locales.List' | 
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
'Me.ListBuyerSellers' | 
'Me.ListShipments' | 
'Me.ListShipmentItems' | 
'Me.ListSpendingAccounts' | 
'Me.ListUserGroups' | 
'MessageSenders.List' | 
'MessageSenders.ListCCListenerAssignments' | 
'OpenIdConnects.List' | 
'OrderReturns.List' | 
'OrderReturns.ListApprovals' | 
'OrderReturns.ListEligibleApprovers' | 
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
'InventoryRecords.List' | 
'Products.ListSpecs' | 
'Products.ListSuppliers' | 
'Products.ListVariants' | 
'InventoryRecords.ListVariant' | 
'Promotions.List' | 
'SecurityProfiles.List' | 
'Shipments.List' | 
'Shipments.ListItems' | 
'Specs.List' | 
'Specs.ListOptions' | 
'Specs.ListProductAssignments' | 
'Suppliers.List' | 
'SupplierAddresses.List' | 
'Suppliers.ListBuyers' | 
'SupplierUserGroups.List' | 
'SupplierUsers.List' | 
'AdminUserGroups.List' | 
'Webhooks.List' | 
'XpIndices.List'
