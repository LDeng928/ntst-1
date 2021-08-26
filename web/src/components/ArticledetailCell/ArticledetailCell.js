import Article from 'src/components/Article'

export const QUERY = gql`
  query FindArticledetailQuery($id: Int!) {
    article: article(id: $id) {
      id
      title
      description
      author

      tag
      createAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }) => {
  return <Article article={article} />
}
