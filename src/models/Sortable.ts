export type Sortable<TSortableEndpoint extends SortableEndpoint> = SortableMap[TSortableEndpoint]

interface SortableMap {
'AdminAddresses.List': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'AdminUsers.List': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'ApiClients.List': ('ID' | 'AppName' | 'DefaultContextUserName' | '!ID' | '!AppName' | '!DefaultContextUserName')[]
'SellerApprovalRules.List': ('Name' | 'ID' | 'ApprovingGroupID' | 'RuleExpression' | '!Name' | '!ID' | '!ApprovingGroupID' | '!RuleExpression')[]
'Bundles.List': string[]
'Buyers.List': ('ID' | 'Name' | 'DateCreated' | '!ID' | '!Name' | '!DateCreated')[]
'Addresses.List': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'ApprovalRules.List': ('Name' | 'ID' | 'ApprovingGroupID' | 'RuleExpression' | '!Name' | '!ID' | '!ApprovingGroupID' | '!RuleExpression')[]
'CostCenters.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'CreditCards.List': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate' | 'DateCreated' | '!ID' | '!CardholderName' | '!CardType' | '!ExpirationDate' | '!DateCreated')[]
'ProductCollections.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'ProductCollections.ListEntries': string[]
'Buyers.ListBuyerSellers': ('Name' | 'ID' | '!Name' | '!ID')[]
'SpendingAccounts.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'UserGroups.List': ('Name' | 'ID' | '!Name' | '!ID')[]
'Users.List': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'Users.ListAcrossBuyers': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'Cart.ListEligiblePromotions': ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | 'AutoApply' | 'Active' | 'Priority' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine' | '!AutoApply' | '!Active' | '!Priority')[]
'Cart.ListLineItems': ('DateAdded' | 'ID' | 'ProductID' | '!DateAdded' | '!ID' | '!ProductID')[]
'Cart.ListPayments': ('DateCreated' | 'ID' | 'Type' | 'CreditCardID' | 'SpendingAccountID' | '!DateCreated' | '!ID' | '!Type' | '!CreditCardID' | '!SpendingAccountID')[]
'Cart.ListPromotions': ('Name' | 'ID' | 'Code' | 'DateApplied' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | 'AutoApply' | 'Active' | 'Priority' | '!Name' | '!ID' | '!Code' | '!DateApplied' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine' | '!AutoApply' | '!Active' | '!Priority')[]
'Catalogs.List': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Categories.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'ImpersonationConfigs.List': ('ImpersonationBuyerID' | 'ImpersonationGroupID' | 'ImpersonationUserID' | 'BuyerID' | 'GroupID' | 'UserID' | 'SecurityProfileID' | 'ClientID' | 'ID' | '!ImpersonationBuyerID' | '!ImpersonationGroupID' | '!ImpersonationUserID' | '!BuyerID' | '!GroupID' | '!UserID' | '!SecurityProfileID' | '!ClientID' | '!ID')[]
'Incrementors.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'IntegrationEvents.List': ('ID' | 'EventType' | 'Name' | '!ID' | '!EventType' | '!Name')[]
'DeliveryConfigurations.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'TrackingEvents.List': ('ID' | 'EventType' | '!ID' | '!EventType')[]
'LineItems.ListAcrossOrders': ('DateAdded' | 'ID' | 'ProductID' | '!DateAdded' | '!ID' | '!ProductID')[]
'Locales.List': ('ID' | '!ID')[]
'Me.ListAddresses': ('AddressName' | 'ID' | 'DateCreated' | 'CompanyName' | 'FirstName' | 'LastName' | 'Street1' | 'Street2' | 'City' | 'State' | 'Zip' | 'Country' | 'Phone' | '!AddressName' | '!ID' | '!DateCreated' | '!CompanyName' | '!FirstName' | '!LastName' | '!Street1' | '!Street2' | '!City' | '!State' | '!Zip' | '!Country' | '!Phone')[]
'Me.ListCatalogs': ('OwnerID' | 'Name' | 'ID' | '!OwnerID' | '!Name' | '!ID')[]
'Me.ListCategories': ('ID' | 'Name' | '!ID' | '!Name')[]
'Me.ListCostCenters': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListCreditCards': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate' | 'DateCreated' | '!ID' | '!CardholderName' | '!CardType' | '!ExpirationDate' | '!DateCreated')[]
'Me.ListOrders': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'LastUpdated' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!LastUpdated' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Me.ListApprovableOrders': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'LastUpdated' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!LastUpdated' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Me.ListProductCollections': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListProductCollectionInvitations': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListProductCollectionEntries': string[]
'Me.ListProducts': string[]
'Me.ListProductInventoryRecords': ('ID' | 'AddressID' | '!ID' | '!AddressID')[]
'Me.ListProductSellers': ('OwnerID' | 'Name' | 'ID' | 'ParentID' | '!OwnerID' | '!Name' | '!ID' | '!ParentID')[]
'Me.ListSpecs': ('OwnerID' | 'Name' | 'ID' | 'ParentID' | '!OwnerID' | '!Name' | '!ID' | '!ParentID')[]
'Me.ListVariants': ('OwnerID' | 'Name' | 'ID' | 'ParentID' | '!OwnerID' | '!Name' | '!ID' | '!ParentID')[]
'Me.ListVariantInventoryRecords': ('ID' | 'AddressID' | '!ID' | '!AddressID')[]
'Me.ListPromotions': ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | 'AutoApply' | 'Active' | 'Priority' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine' | '!AutoApply' | '!Active' | '!Priority')[]
'Me.ListBuyerSellers': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListShipments': ('DateShipped' | 'OwnerID' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!OwnerID' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Me.ListShipmentItems': ('DateShipped' | 'OwnerID' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!OwnerID' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Me.ListSpendingAccounts': ('Name' | 'ID' | '!Name' | '!ID')[]
'Me.ListSubscriptions': ('NextOrderDate' | 'LastOrderDate' | 'DateCreated' | 'ID' | 'Interval' | 'EndDate' | 'FromCompanyID' | 'FromUserID' | 'ToCompanyID' | '!NextOrderDate' | '!LastOrderDate' | '!DateCreated' | '!ID' | '!Interval' | '!EndDate' | '!FromCompanyID' | '!FromUserID' | '!ToCompanyID')[]
'Me.ListSubscriptionItems': ('DateAdded' | 'ID' | 'ProductID' | '!DateAdded' | '!ID' | '!ProductID')[]
'Me.ListUserGroups': ('Name' | 'ID' | '!Name' | '!ID')[]
'MessageSenders.List': ('ID' | 'Name' | 'URL' | '!ID' | '!Name' | '!URL')[]
'MessageSenders.ListCCListenerAssignments': ('BuyerID' | 'UserGroupID' | 'UserID' | 'MessageConfigName' | 'SupplierID' | '!BuyerID' | '!UserGroupID' | '!UserID' | '!MessageConfigName' | '!SupplierID')[]
'OpenIdConnects.List': ('ID' | '!ID')[]
'OrderReturns.List': ('DateSubmitted' | 'DateCreated' | 'ID' | 'OrderID' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'LastUpdated' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!OrderID' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!LastUpdated')[]
'OrderReturns.ListApprovals': ('DateCreated' | 'ApprovalRuleID' | 'ApprovingGroupID' | 'Status' | 'DateCompleted' | 'Approver' | '!DateCreated' | '!ApprovalRuleID' | '!ApprovingGroupID' | '!Status' | '!DateCompleted' | '!Approver')[]
'OrderReturns.ListEligibleApprovers': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'Orders.List': ('DateSubmitted' | 'DateCreated' | 'ID' | 'FromCompanyID' | 'ToCompanyID' | 'FromUserID' | 'Status' | 'DateApproved' | 'DateDeclined' | 'DateCanceled' | 'DateCompleted' | 'LastUpdated' | 'Subtotal' | 'ShippingCost' | 'TaxCost' | 'PromotionDiscount' | 'Total' | 'IsSubmitted' | '!DateSubmitted' | '!DateCreated' | '!ID' | '!FromCompanyID' | '!ToCompanyID' | '!FromUserID' | '!Status' | '!DateApproved' | '!DateDeclined' | '!DateCanceled' | '!DateCompleted' | '!LastUpdated' | '!Subtotal' | '!ShippingCost' | '!TaxCost' | '!PromotionDiscount' | '!Total' | '!IsSubmitted')[]
'Orders.ListApprovals': ('DateCreated' | 'AllowResubmit' | 'ApprovalRuleID' | 'ApprovingGroupID' | 'Status' | 'DateCompleted' | 'Approver' | '!DateCreated' | '!AllowResubmit' | '!ApprovalRuleID' | '!ApprovingGroupID' | '!Status' | '!DateCompleted' | '!Approver')[]
'Orders.ListEligibleApprovers': ('LastName' | 'FirstName' | 'Username' | 'ID' | 'Email' | 'DateCreated' | 'PasswordLastSetDate' | '!LastName' | '!FirstName' | '!Username' | '!ID' | '!Email' | '!DateCreated' | '!PasswordLastSetDate')[]
'Orders.ListEligiblePromotions': ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | 'AutoApply' | 'Active' | 'Priority' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine' | '!AutoApply' | '!Active' | '!Priority')[]
'LineItems.List': ('DateAdded' | 'ID' | 'ProductID' | '!DateAdded' | '!ID' | '!ProductID')[]
'Payments.List': ('DateCreated' | 'ID' | 'Type' | 'CreditCardID' | 'SpendingAccountID' | '!DateCreated' | '!ID' | '!Type' | '!CreditCardID' | '!SpendingAccountID')[]
'Orders.ListPromotions': ('Name' | 'ID' | 'Code' | 'DateApplied' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | 'AutoApply' | 'Active' | 'Priority' | '!Name' | '!ID' | '!Code' | '!DateApplied' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine' | '!AutoApply' | '!Active' | '!Priority')[]
'Orders.ListShipments': ('DateShipped' | 'OwnerID' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!OwnerID' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'PriceSchedules.List': ('Name' | 'ID' | 'OwnerID' | '!Name' | '!ID' | '!OwnerID')[]
'ProductFacets.List': ('ListOrder' | 'ID' | 'Name' | 'XpPath' | '!ListOrder' | '!ID' | '!Name' | '!XpPath')[]
'Products.List': string[]
'InventoryRecords.List': ('ID' | 'AddressID' | '!ID' | '!AddressID')[]
'Products.ListSpecs': ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[]
'Products.ListSuppliers': ('ID' | 'Name' | 'DateCreated' | '!ID' | '!Name' | '!DateCreated')[]
'Products.ListVariants': ('ID' | 'Name' | '!ID' | '!Name')[]
'InventoryRecords.ListVariant': ('ID' | 'AddressID' | '!ID' | '!AddressID')[]
'Promotions.List': ('Name' | 'ID' | 'Code' | 'StartDate' | 'ExpirationDate' | 'EligibleExpression' | 'ValueExpression' | 'CanCombine' | 'AutoApply' | 'Active' | 'Priority' | '!Name' | '!ID' | '!Code' | '!StartDate' | '!ExpirationDate' | '!EligibleExpression' | '!ValueExpression' | '!CanCombine' | '!AutoApply' | '!Active' | '!Priority')[]
'SecurityProfiles.List': ('ID' | 'Name' | '!ID' | '!Name')[]
'Shipments.List': ('DateShipped' | 'OwnerID' | 'ID' | 'BuyerID' | 'Shipper' | 'DateDelivered' | 'Cost' | '!DateShipped' | '!OwnerID' | '!ID' | '!BuyerID' | '!Shipper' | '!DateDelivered' | '!Cost')[]
'Shipments.ListItems': []
'Specs.List': ('ListOrder' | 'Name' | 'ID' | '!ListOrder' | '!Name' | '!ID')[]
'Specs.ListOptions': ('ListOrder' | 'ID' | '!ListOrder' | '!ID')[]
'Specs.ListProductAssignments': ('SpecID' | 'ProductID' | 'DefaultOptionID' | 'DefaultValue' | '!SpecID' | '!ProductID' | '!DefaultOptionID' | '!DefaultValue')[]
'Subscriptions.List': ('NextOrderDate' | 'LastOrderDate' | 'DateCreated' | 'ID' | 'Interval' | 'EndDate' | 'FromCompanyID' | 'FromUserID' | 'ToCompanyID' | '!NextOrderDate' | '!LastOrderDate' | '!DateCreated' | '!ID' | '!Interval' | '!EndDate' | '!FromCompanyID' | '!FromUserID' | '!ToCompanyID')[]
'SubscriptionItems.List': ('DateAdded' | 'ID' | 'ProductID' | '!DateAdded' | '!ID' | '!ProductID')[]
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
'Bundles.List' | 
'Buyers.List' | 
'Addresses.List' | 
'ApprovalRules.List' | 
'CostCenters.List' | 
'CreditCards.List' | 
'ProductCollections.List' | 
'ProductCollections.ListEntries' | 
'Buyers.ListBuyerSellers' | 
'SpendingAccounts.List' | 
'UserGroups.List' | 
'Users.List' | 
'Users.ListAcrossBuyers' | 
'Cart.ListEligiblePromotions' | 
'Cart.ListLineItems' | 
'Cart.ListPayments' | 
'Cart.ListPromotions' | 
'Catalogs.List' | 
'Categories.List' | 
'ImpersonationConfigs.List' | 
'Incrementors.List' | 
'IntegrationEvents.List' | 
'DeliveryConfigurations.List' | 
'TrackingEvents.List' | 
'LineItems.ListAcrossOrders' | 
'Locales.List' | 
'Me.ListAddresses' | 
'Me.ListCatalogs' | 
'Me.ListCategories' | 
'Me.ListCostCenters' | 
'Me.ListCreditCards' | 
'Me.ListOrders' | 
'Me.ListApprovableOrders' | 
'Me.ListProductCollections' | 
'Me.ListProductCollectionInvitations' | 
'Me.ListProductCollectionEntries' | 
'Me.ListProducts' | 
'Me.ListProductInventoryRecords' | 
'Me.ListProductSellers' | 
'Me.ListSpecs' | 
'Me.ListVariants' | 
'Me.ListVariantInventoryRecords' | 
'Me.ListPromotions' | 
'Me.ListBuyerSellers' | 
'Me.ListShipments' | 
'Me.ListShipmentItems' | 
'Me.ListSpendingAccounts' | 
'Me.ListSubscriptions' | 
'Me.ListSubscriptionItems' | 
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
'Orders.ListEligiblePromotions' | 
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
'Subscriptions.List' | 
'SubscriptionItems.List' | 
'Suppliers.List' | 
'SupplierAddresses.List' | 
'Suppliers.ListBuyers' | 
'SupplierUserGroups.List' | 
'SupplierUsers.List' | 
'AdminUserGroups.List' | 
'Webhooks.List' | 
'XpIndices.List'
