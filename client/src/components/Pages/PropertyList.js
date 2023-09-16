import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../utils/queries/propertyQueries.js';

const PropertyList = ({ filter }) => {
  console.log('Received filter in PropertyList:', filter);
  const { loading, error, data } = useQuery(GET_PROPERTIES, {
    variables: { filter },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="propertyListings">
      {data.properties.map((property) => (
        <div key={property.address}>
          <div className="PropertyTile">
          <Link to={`/property/${property._id}`}>
          {property.images.map((image, index) => (
  <img key={index} src={image.image} height="250" width="400" alt="property" />
            ))}
            </Link >
            <div className="propertyText">
              <h2>£{property.price}</h2>
              <p>{property.beds} Bedroom {property.propertyType.name} For Sale</p>
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
  );
};

export default PropertyList;
