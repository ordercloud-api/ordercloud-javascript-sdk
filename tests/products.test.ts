import { Tokens, Products, Product } from '../src'
import { makeToken } from './utils'
import { expectJsonCall, installFetchMock } from './fetchMock'

const apiUrl = 'https://api.ordercloud.io/v1'
const validToken = makeToken()

beforeEach(() => {
  installFetchMock()
  Tokens.RemoveAccessToken()
})

test('can create product', async () => {
  Tokens.SetAccessToken(validToken)
  const product: Product = {
    Name: 'Tennis Balls',
    ID: 'TB2038',
  }
  await Products.Create(product)
  expectJsonCall('POST', `${apiUrl}/products`, validToken, product)
})

test('can patch product', async () => {
  Tokens.SetAccessToken(validToken)
  const productID = 'mockproductid'
  const partialProduct: Partial<Product> = {
    Description: 'This product is pretty sweet, trust me',
  }
  await Products.Patch(productID, partialProduct)
  expectJsonCall(
    'PATCH',
    `${apiUrl}/products/${productID}`,
    validToken,
    partialProduct
  )
})

test('can update product', async () => {
  Tokens.SetAccessToken(validToken)
  const productID = 'mockproductid'
  const product: Product = {
    Name: 'Tennis Balls',
    Description: 'This product is pretty sweet, trust me',
  }
  await Products.Save(productID, product)
  expectJsonCall('PUT', `${apiUrl}/products/${productID}`, validToken, product)
})

test('can delete product', async () => {
  Tokens.SetAccessToken(validToken)
  const productID = 'mockproductid'
  await Products.Delete(productID)
  expectJsonCall('DELETE', `${apiUrl}/products/${productID}`, validToken)
})
