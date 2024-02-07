export type Searchable<TSearchableEndpoint extends SearchableEndpoint> = SearchableMap[TSearchableEndpoint]

interface SearchableMap {
'AdminAddresses.List': ('ID' | 'AddressName' | 'CompanyName' | 'City' | 'Street1' | 'Street2' | 'LastName' | 'FirstName' | 'State' | 'Zip')[]
'AdminUsers.List': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'ApiClients.List': ('ID' | 'AppName' | 'DefaultContextUserName')[]
'SellerApprovalRules.List': ('ID' | 'Name' | 'Description' | 'RuleExpression')[]
'Bundles.List': string[]
'Buyers.List': ('Name' | 'ID')[]
'Addresses.List': ('ID' | 'AddressName' | 'CompanyName' | 'City' | 'Street1' | 'Street2' | 'LastName' | 'FirstName' | 'State' | 'Zip')[]
'ApprovalRules.List': ('ID' | 'Name' | 'Description' | 'RuleExpression')[]
'CostCenters.List': ('ID' | 'Name' | 'Description')[]
'CreditCards.List': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate')[]
'ProductCollections.List': ('ID' | 'Name')[]
'ProductCollections.ListEntries': string[]
'Buyers.ListBuyerSellers': ('ID' | 'Name')[]
'SpendingAccounts.List': ('ID' | 'Name')[]
'UserGroups.List': ('ID' | 'Name' | 'Description')[]
'Users.List': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'Users.ListAcrossBuyers': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'Cart.ListEligiblePromotions': ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[]
'Cart.ListLineItems': ('ID' | 'ProductID')[]
'Cart.ListPayments': ('ID' | 'Description')[]
'Cart.ListPromotions': ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[]
'Catalogs.List': ('ID' | 'Name' | 'Description')[]
'Categories.List': ('ID' | 'Name' | 'Description')[]
'ImpersonationConfigs.List': ('ImpersonationBuyerID' | 'ImpersonationGroupID' | 'ImpersonationUserID' | 'BuyerID' | 'GroupID' | 'UserID' | 'SecurityProfileID' | 'ClientID' | 'ID')[]
'Incrementors.List': ('ID' | 'Name')[]
'IntegrationEvents.List': ('ID' | 'EventType' | 'Name')[]
'DeliveryConfigurations.List': ('ID' | 'Name')[]
'TrackingEvents.List': ('ID' | 'EventType')[]
'LineItems.ListAcrossOrders': ('ID' | 'ProductID')[]
'Locales.List': ('ID' | 'Currency')[]
'Me.ListAddresses': ('ID' | 'AddressName' | 'CompanyName' | 'City' | 'Street1' | 'Street2' | 'LastName' | 'FirstName' | 'State' | 'Zip')[]
'Me.ListCatalogs': ('ID' | 'Name' | 'Description')[]
'Me.ListCategories': ('ID' | 'Name' | 'Description')[]
'Me.ListCostCenters': ('ID' | 'Name' | 'Description')[]
'Me.ListCreditCards': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate')[]
'Me.ListOrders': ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Comments')[]
'Me.ListApprovableOrders': ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Comments')[]
'Me.ListProductCollections': ('ID' | 'Name')[]
'Me.ListProductCollectionInvitations': ('ID' | 'Name')[]
'Me.ListProductCollectionEntries': string[]
'Me.ListProducts': string[]
'Me.ListProductInventoryRecords': ('ID' | 'AddressID')[]
'Me.ListProductSellers': ('ID' | 'ParentID' | 'Name' | 'Description')[]
'Me.ListSpecs': ('ID' | 'ParentID' | 'Name' | 'Description')[]
'Me.ListVariants': ('ID' | 'ParentID' | 'Name' | 'Description')[]
'Me.ListVariantInventoryRecords': ('ID' | 'AddressID')[]
'Me.ListPromotions': ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[]
'Me.ListBuyerSellers': ('ID' | 'Name')[]
'Me.ListShipments': ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[]
'Me.ListShipmentItems': ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[]
'Me.ListSpendingAccounts': ('ID' | 'Name')[]
'Me.ListSubscriptions': ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Interval')[]
'Me.ListSubscriptionItems': ('ID' | 'ProductID')[]
'Me.ListUserGroups': ('ID' | 'Name' | 'Description')[]
'MessageSenders.List': ('ID' | 'Name' | 'URL')[]
'MessageSenders.ListCCListenerAssignments': ('BuyerID' | 'UserGroupID' | 'UserID' | 'MessageConfigName' | 'SupplierID')[]
'OpenIdConnects.List': ('ID')[]
'OrderReturns.List': ('ID' | 'OrderID')[]
'OrderReturns.ListApprovals': ('ApprovalRuleID' | 'ApprovingGroupID' | 'Approver' | 'Comments')[]
'OrderReturns.ListEligibleApprovers': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'Orders.List': ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Comments')[]
'Orders.ListApprovals': ('ApprovalRuleID' | 'ApprovingGroupID' | 'Approver' | 'Comments')[]
'Orders.ListEligibleApprovers': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'Orders.ListEligiblePromotions': ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[]
'LineItems.List': ('ID' | 'ProductID')[]
'Payments.List': ('ID' | 'Description')[]
'Orders.ListPromotions': ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[]
'Orders.ListShipments': ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[]
'PriceSchedules.List': ('ID' | 'Name' | 'ApplyTax' | 'Currency')[]
'ProductFacets.List': ('ID' | 'Name' | 'XpPath')[]
'Products.List': string[]
'InventoryRecords.List': ('ID' | 'AddressID')[]
'Products.ListSpecs': ('Name' | 'ID')[]
'Products.ListSuppliers': ('Name' | 'ID')[]
'Products.ListVariants': ('ID' | 'Name' | 'Description')[]
'InventoryRecords.ListVariant': ('ID' | 'AddressID')[]
'Promotions.List': ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[]
'SecurityProfiles.List': ('ID' | 'Name')[]
'Shipments.List': ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[]
'Shipments.ListItems': []
'Specs.List': ('Name' | 'ID')[]
'Specs.ListOptions': ('Value' | 'ID')[]
'Specs.ListProductAssignments': ('SpecID' | 'ProductID')[]
'Subscriptions.List': ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Interval')[]
'SubscriptionItems.List': ('ID' | 'ProductID')[]
'Suppliers.List': ('Name' | 'ID')[]
'SupplierAddresses.List': ('ID' | 'AddressName' | 'CompanyName' | 'City' | 'Street1' | 'Street2' | 'LastName' | 'FirstName' | 'State' | 'Zip')[]
'Suppliers.ListBuyers': ('ID' | 'Name')[]
'SupplierUserGroups.List': ('ID' | 'Name' | 'Description')[]
'SupplierUsers.List': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'AdminUserGroups.List': ('ID' | 'Name' | 'Description')[]
'Webhooks.List': ('ID' | 'Name' | 'Description' | 'Url')[]
'XpIndices.List': ('ThingType' | 'Key')[]
}

type SearchableEndpoint = 'AdminAddresses.List' | 
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
