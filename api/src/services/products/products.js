import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const products = () => {
  return db.product.findMany()
}
export const searchProducts = ({ tag }) => {
  return db.product.findMany({
    where: {
      tag: {
        contains: tag,
      },
    },
  })
}

export const product = ({ id }) => {
  return db.product.findUnique({
    where: { id },
  })
}

export const createProduct = ({ input }) => {
  requireAuth()
  return db.product.create({
    data: input,
  })
}

export const updateProduct = ({ id, input }) => {
  return db.product.update({
    data: input,
    where: { id },
  })
}

export const deleteProduct = ({ id }) => {
  return db.product.delete({
    where: { id },
  })
}
