import {
  Address,
  Category,
  LineItem,
  LineItemProduct,
  LineItemVariant,
  ListFacet,
  ListPageWithFacets,
  MessageSenderOrderSubmittedPayload,
  Order,
  OrderUser,
  OrderWorksheet,
  Product,
} from '../src/models'

interface MyOrderXp {
  ErpId?: string
}
interface MyFromUserXp {
  Department?: string
}
interface MyAddressXp {
  Dock?: string
}
interface MyFacetXp {
  Color?: string
}

type OrderXpOnly = Order<MyOrderXp>
const orderXpOnly: OrderXpOnly = { xp: { ErpId: '1' } }

interface MyOrderUser extends OrderUser<MyFromUserXp> {}
interface MyAddress extends Address<MyAddressXp> {}
interface MyOrder extends Order<MyOrderXp, MyOrderUser, MyAddress> {}
interface MyLineItem
  extends LineItem<
    { GiftWrap?: boolean },
    LineItemProduct,
    LineItemVariant,
    MyAddress,
    MyAddress
  > {}

type Worksheet = OrderWorksheet<MyOrder, MyLineItem>
const worksheet: Worksheet = {
  Order: {
    xp: { ErpId: '1' },
    FromUser: { xp: { Department: 'sales' } },
    BillingAddress: {
      Street1: '1 Main',
      City: 'Minneapolis',
      Country: 'US',
      xp: { Dock: 'A' },
    },
  },
  LineItems: [{ ProductID: 'sku', xp: { GiftWrap: true } }],
}

type CategoryXpOnly = Category<{ Featured?: boolean }>
const category: CategoryXpOnly = { xp: { Featured: true } }

type ProductList = ListPageWithFacets<Product>
type FacetList = ListPageWithFacets<Product, ListFacet<MyFacetXp>>
const facetName: string | undefined = ({} as FacetList).Meta?.Facets?.[0]?.xp
  ?.Color

type Submitted = MessageSenderOrderSubmittedPayload<
  any,
  MyOrder,
  any,
  MyLineItem
>

// Own-xp-only models do not grow a second parameter.
// @ts-expect-error Category accepts only its own xp
type CategoryWithExtra = Category<{ Featured?: boolean }, { no: true }>

// The second parameter is the user model, not an xp bag.
// @ts-expect-error Order's second parameter must extend OrderUser
type OrderWithNestedXp = Order<MyOrderXp, MyFromUserXp>

// The first parameter is the order model, not an xp bag.
// @ts-expect-error OrderWorksheet's first parameter must extend Order
type WorksheetWithXp = OrderWorksheet<MyOrderXp>

void orderXpOnly
void worksheet
void category
void facetName
void (null as ProductList | Submitted | null)
