import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  const { title, description, createAt, author } = article
  return (
    <>
      <div className="flex flex-col p-6 border-2 border-solid border-ntst-grey rounded-md mb-6">
        <h2 className="text-xl text-ntst-blue font-bold mb-2">
          <Link to={routes.articledetail({ id: article.id })}>{title}</Link>
        </h2>
        <h2 className="overflow-y-scroll h-24">{description}</h2>
        <p>Author:{author}</p>
        <p className="font-semibold mt-2">Date created: {createAt}</p>
      </div>
    </>
  )
}

export default Article
