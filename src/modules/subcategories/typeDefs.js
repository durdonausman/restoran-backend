const {gql} = require('apollo-server-express')

module.exports = gql `
    type SubCategories {
        id: ID!
        name: String!
    }

    extend type Mutation {
        newSubCategory (name: String! categoryID: ID!):SubCategories
    }

    extend type Query {
        subcategories(categoryID: ID!): [ SubCategories! ]
    }
`