import Product from 'src/components/Product'

export const QUERY = gql`
  query FindProductdetailQuery($id: Int!) {
    product: product(id: $id) {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ product }) => {
  return <div><Product product={product} /></div>
}
