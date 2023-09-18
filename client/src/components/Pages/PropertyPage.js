import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_PROPERTY, QUERY_ME } from '../../utils/queries/propertyQueries.js'
import {
  SAVE_PROPERTY_TO_USER,
  REMOVE_PROPERTY_FROM_USER,
} from '../../utils/mutations.js'
import Contact from './Contact'

const PropertyPage = ({ isLoggedin }) => {
  const { propertyId } = useParams()

  const [savePropertyToUser] = useMutation(SAVE_PROPERTY_TO_USER)

  const [removePropertyFromUser] = useMutation(REMOVE_PROPERTY_FROM_USER)

  const [isSaved, setIsSaved] = useState(false)

  // TO DO
  const { loading, data, error } = useQuery(GET_PROPERTY, {
    // pass URL parameter
    variables: { id: propertyId },
  })

  const { data: userData } = useQuery(QUERY_ME)

  useEffect(() => {
    const savedPropertyIds = userData?.me.savedProperties.map(
      (property) => property._id
    )
    setIsSaved(savedPropertyIds?.includes(propertyId))
  }, [userData, propertyId])

  const handleSaveProperty = async () => {
    try {
      if (!isSaved) {
        // If it's not saved, save it
        await savePropertyToUser({
          variables: { propertyId },
        })
      } else {
        // If it's saved, remove it
        await removePropertyFromUser({
          variables: { propertyId },
        })
      }
      setIsSaved(!isSaved) // Toggle the saved state
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) {
    console.error('Error fetching property:', error)
    return <p>Error: {error.message}</p>
  }

  const property = data.property

  return (
    <div className="propertyDetails">
      <div className="propertySolo">
        {property.images ? (
          property.images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              height="250"
              width="400"
              alt="property"
            />
          ))
        ) : (
          <p>No images available</p>
        )}
        <div className="propertyPageText">
          <h2>£{property.price}</h2>
          <p>
            {property.beds} Bedroom {property.propertyType.name} For Sale
          </p>
          <p>
            {property.address}, {property.city}
            <br></br>
            {property.postcode}
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
          <p>{property.description}</p>
          {isLoggedin ? (
            <button className="saveButton" onClick={handleSaveProperty}>
              {isSaved ? 'Remove from saved' : 'Save property'}
            </button>
          ) : (
            ''
          )}
        </div>
      </div>

      <span className="mapContact">
        <div className="mapContainer">
          <div>
            <iframe
              className="map"
              title="property-map"
              width="750"
              height="500"
              border="0px"
              src={`https://maps.google.com/maps?q=${property.lat},${property.lng}&output=embed`}
            ></iframe>
          </div>
        </div>

        <div className="contactForm">
          <Contact />
        </div>
      </span>
    </div>
  )
}

export default PropertyPage
