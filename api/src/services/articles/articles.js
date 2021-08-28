import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

const ARTICLE_BACKEND_ROLES = ['admin', 'manager']

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const searchArticle = ({ tag }) => {
  return db.article.findMany({
    where: {
      tag: {
        contains: tag.toLowerCase(),
      },
    },
  })
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
  requireAuth({ role: ARTICLE_BACKEND_ROLES })
  return db.article.create({
    data: input,
  })
}

export const updateArticle = ({ id, input }) => {
  requireAuth({ role: ARTICLE_BACKEND_ROLES })
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
