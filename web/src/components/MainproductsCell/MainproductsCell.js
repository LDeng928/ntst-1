import Products from 'src/components/products'

export const QUERY = gql`
  query MainproductsQuery {
    products {
      id
      type
      name
  description
  imgUrl
  price
  tag
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div><h1>No Product in Database Yet</h1></div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ products }) => {
  return (
    <>
      <Products products={products} />
    </>
  )
}
