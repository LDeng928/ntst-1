import Articles from 'src/components/Articles'
export const QUERY = gql`
  query FindSearchtagQuery($tag: String!) {
    searchArticle(tag: $tag) {
      id
      title
      author

      tag
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

export const Success = ({ searchArticle }) => {
  return (
    <>
      <Articles articles={searchArticle} />
    </>
  )
}
