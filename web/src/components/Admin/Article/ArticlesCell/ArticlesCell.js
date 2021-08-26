import { Link, routes } from '@redwoodjs/router'

import Articles from 'src/components/Admin/Article/Articles'

export const QUERY = gql`
  query FindArticles {
    articles {
      id
      title
      description
      createAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No articles yet. '}
      <Link to={routes.adminNewArticle()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return <Articles articles={articles} />
}
