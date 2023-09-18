import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_PROPERTY_TO_USER = gql`
  mutation SavePropertyToUser($propertyId: ID!) {
    savePropertyToUser(propertyId: $propertyId) {
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

export const REMOVE_PROPERTY_FROM_USER = gql`
  mutation RemovePropertyFromUser($propertyId: ID!) {
    removePropertyFromUser(propertyId: $propertyId) {
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
