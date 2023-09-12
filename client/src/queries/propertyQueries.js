import { gql } from '@apollo/client';

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
      propertyType
      description
      images
    }
  }
`;
