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

/*    propertyType {
        name
      }
      images {
        image
      } */

export const GET_PROPERTY_TYPES = gql`
  query getPropertyTypes {
    propertyTypes {
      _id
      name
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      firstName
      lastName
      savedProperties {
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
        dateListed
        propertyType {
          name
        }
        description
        images {
          image
        }
      }
    }
  }
`;
