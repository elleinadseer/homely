import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../../utils/queries/propertyQueries'
import { Link } from 'react-router-dom'

const FavouritesPage = ({ filter }) => {
  // Use the GraphQL query to fetch the user's favourite properties
  const { loading, error, data } = useQuery(QUERY_ME, {
    variables: { filter },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const favouriteProperties = data.me.savedProperties

  return (
    <div className="propertyListings">
      {/* Display the user's favourite properties */}
      {favouriteProperties.map((property) => (
        <div key={property._id}>
          {/* Display property details as needed */}
          <div className="PropertyTile">
            <Link to={`/property/${property._id}`}>
              {property?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.image}
                  height="250"
                  width="400"
                  alt="property"
                />
              ))}
            </Link>
            <div className="propertyText">
              <h2>
                £{property.price} {property.rent === true ? 'pcm' : ''}
              </h2>
              <p>
                {property.beds} Bedroom {property?.propertyType?.name} For{' '}
                {property.rent === true ? 'Rent' : 'Sale'}
              </p>
              <p>
                {property.address}, {property.city}, {property.postcode}
              </p>
              <span className="imgSpan">
                <img
                  src="https://i.imgur.com/J23J5au.png"
                  height="25"
                  width="25"
                  alt="bathrooms"
                ></img>{' '}
                Bathrooms: {property.baths}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavouritesPage
