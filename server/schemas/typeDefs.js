const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    savedProperties: [Property]
  }

  type Property {
    _id: ID
    address: String
    city: String
    county: String
    postcode: String
    lat: Float
    lng: Float
    price: Float
    beds: Int
    baths: Int
    pets: Boolean
    dateListed: String
    propertyType: PropertyType
    description: String
    images: [Image]
  }

  input PropertyInput {
    address: String
    city: String
    county: String
    postcode: String
    lat: Float
    lng: Float
    price: Float
    beds: Int
    baths: Int
    pets: Boolean
    dateListed: String
    propertyType: ID
    description: String
    images: [ID]
  }

  input PropertyFilterInput {
    priceMax: Float
    beds: Int
    baths: Int
    pets: Boolean
    propertyType: ID
  }

  type PropertyType {
    _id: ID
    name: String
  }

  type Image {
    _id: ID
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    properties(filter: PropertyFilterInput): [Property]
    property(_id: ID!): Property
    propertyTypes: [PropertyType]
    propertyType(_id: ID!): PropertyType
    images: [Image]
    image(_id: ID!): Image
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): Auth
    addProperty(input: PropertyInput): Property
    updateProperty(propertyId: ID!, input: PropertyInput): Property
    removeProperty(propertyId: ID!): Property
    savePropertyToUser(propertyId: ID!): User
    removePropertyFromUser(propertyId: ID!): User
    addPropertyType(name: String!): PropertyType
    removePropertyType(propertyTypeId: ID!): PropertyType
    addImage(image: String!): Image
    removeImage(imageId: ID!): Image
  }
`

module.exports = typeDefs
