import Articles from 'src/components/Articles'
export const QUERY = gql`
  query KnowledgeBasicsQuery {
    articles {
      id
      title
    description
    createAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
      <Articles articles={articles} />
    </>
  )
}
