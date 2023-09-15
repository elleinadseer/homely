import React, { useEffect } from 'react';
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
            <img
              src="https://i.imgur.com/id7Ci0F.jpg"
              height="200"
              width="350"
              alt="house"
            ></img>
            <div className="propertyText">
              <h2>£{property.price}</h2>
              <p>{property.beds} bedroom house for sale</p>
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
