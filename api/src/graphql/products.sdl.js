export const schema = gql`
  type Product {
    id: Int!
    type: String!
    name: String!
    description: String!
    imgUrl: String
    price: Float!
    tag: String!
  }

  type Query {
    products: [Product!]!
    product(id: Int!): Product
  }

  input CreateProductInput {
    type: String!
    name: String!
    description: String!
    imgUrl: String
    price: Float!
    tag: String!
  }

  input UpdateProductInput {
    type: String
    name: String
    description: String
    imgUrl: String
    price: Float
    tag: String
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(id: Int!, input: UpdateProductInput!): Product!
    deleteProduct(id: Int!): Product!
  }
`
