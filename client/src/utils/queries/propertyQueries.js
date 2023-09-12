import { gql } from '@apollo/client'

export const GET_PROPERTIES = gql`
  query {
    properties {
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
