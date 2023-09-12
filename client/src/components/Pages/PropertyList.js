import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../utils/queries/propertyQueries.js';

const PropertyList = () => {
  const { loading, error, data } = useQuery(GET_PROPERTIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="propertyListings">
      {data.properties.map(property => (
        <div key={property.address}>
          <div className="PropertyTile">
            <img src="https://i.imgur.com/id7Ci0F.jpg" height="200" width="350" alt="house"></img>
          <h2>£{property.price}</h2>
          <p>{property.beds} bedroom house for sale</p>
          <p>{property.address}, {property.city}, {property.postcode}</p>
          <p>bathrooms: {property.baths}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;

// Portfolio which changes the project components 
/*
export default function Portfolio() {
  return (
    <div>
      <Property/>
   </div>
  );
}
*/

// PropertyList.js
/*
import React, { useState, useEffect } from 'react';
import PropertyTile from '/Users/danielle/homely/client/src/components/PropertyTile.js';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Assume you have a function to fetch properties from your backend
    // and update the state with setProperties
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties'); // Replace with your API endpoint
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  return (
    <div className="property-list">
      {properties.map(property => (
        <PropertyTile key={property._id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList; */

