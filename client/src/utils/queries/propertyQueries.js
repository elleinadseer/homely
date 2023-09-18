import { gql } from '@apollo/client';

export const GET_PROPERTIES = gql`
  query getProperties($filter: PropertyFilterInput) {
    properties(filter: $filter) {
      _id
      rent
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
`;

export const GET_PROPERTY = gql`
  query Property($id: ID!) {
    property(_id: $id) {
      _id
      rent
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
`;

export const GET_PROPERTY_TYPES = gql`
  query getPropertyTypes {
    propertyTypes {
      _id
      name
    }
  }
`;
