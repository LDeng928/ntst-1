import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const articles = () => {
  return db.article.findMany()
}

export const article = ({ id }) => {
  return db.article.findUnique({
    where: { id },
  })
}

export const createArticle = ({ input }) => {
  return db.article.create({
    data: input,
  })
}

export const updateArticle = ({ id, input }) => {
  return db.article.update({
    data: input,
    where: { id },
  })
}

export const deleteArticle = ({ id }) => {
  return db.article.delete({
    where: { id },
  })
}
