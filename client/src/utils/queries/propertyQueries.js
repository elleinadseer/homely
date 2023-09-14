import { gql } from '@apollo/client'

export const GET_PROPERTIES = gql`
  query getProperties($filter: PropertyFilterInput) {
    properties(filter: $filter) {
      address
      city
      county
      postcode
      lat
      lng
      price
      beds
      baths
      pets
      description
      propertyType {
        name
      }
      images {
        image
      }
    }
  }
`

export const GET_PROPERTY = gql`
  query getProperty($id: ID!) {
    property(id: $id) {
      address
      city
      county
      postcode
      lat
      lng
      price
      beds
      baths
      pets
      description
      propertyType {
        name
      }
      images {
        image
      }
    }
  }
`
