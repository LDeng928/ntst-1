export const schema = gql`
  type Article {
    id: Int!
    title: String!
    description: String!
    createAt: DateTime!
  }

  type Query {
    articles: [Article!]!
    article(id: Int!): Article
  }

  input CreateArticleInput {
    title: String!
    description: String!
    createAt: DateTime!
  }

  input UpdateArticleInput {
    title: String
    description: String
    createAt: DateTime
  }

  type Mutation {
    createArticle(input: CreateArticleInput!): Article!
    updateArticle(id: Int!, input: UpdateArticleInput!): Article!
    deleteArticle(id: Int!): Article!
  }
`
