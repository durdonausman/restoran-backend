const { gql } = require("apollo-server-express");

module.exports = gql` 
  type Products {
    id: ID!
    name: String!
    price: String!
    description: String!
  }

  input productDetail {
    categoryID: ID!
    subcategoryID: ID!
    name: String!
    price: String!
    description: String!
  }

  extend type Mutation {
    newProduct(detail: productDetail): Products
  }

  extend type Query {
    products(categoryID: ID!, subcategoryID: ID!): [Products]
  }
`;
