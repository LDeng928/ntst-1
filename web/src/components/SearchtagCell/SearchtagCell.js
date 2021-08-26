import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindSearchtagQuery($tag: String!) {
    searchProducts(tag: $tag) {
      id
      name
      imgUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No related products</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ searchProducts }) => {
  return (
    <div>
      {searchProducts.map((product) => (
        <h4 key={product.id}>
          <Link to={routes.productdetail({ id: product.id })}>
            {product.name}
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-12 h-12 object-cover"
            />
          </Link>
        </h4>
      ))}
    </div>
  )
}
