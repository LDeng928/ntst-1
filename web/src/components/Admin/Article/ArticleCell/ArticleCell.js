import Article from 'src/components/Admin/Article/Article'

export const QUERY = gql`
  query FindArticleById($id: Int!) {
    article: article(id: $id) {
      id
      title
      description
      createAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Article not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }) => {
  return <Article article={article} />
}
