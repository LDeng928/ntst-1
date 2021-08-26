export const schema = gql`
  type Article {
    id: Int!
    title: String!
    description: String!
    author: String!
    tag: String!
    createAt: DateTime!
  }

  type Query {
    articles: [Article!]!
    article(id: Int!): Article
    searchArticle(tag: String!): [Article]
  }

  input CreateArticleInput {
    title: String!
    description: String!
    author: String!
    tag: String!
    createAt: DateTime!
  }

  input UpdateArticleInput {
    title: String
    description: String
    author: String
    tag: String
    createAt: DateTime
  }

  type Mutation {
    createArticle(input: CreateArticleInput!): Article!
    updateArticle(id: Int!, input: UpdateArticleInput!): Article!
    deleteArticle(id: Int!): Article!
  }
`
