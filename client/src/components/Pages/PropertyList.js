import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '/Users/danielle/homely/client/src/queries/propertyQueries.js';

const PropertyList = () => {
  const { loading, error, data } = useQuery(GET_PROPERTIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.properties.map(property => (
        <div key={property.address}>
          <h2>{property.address}</h2>
          <p>Price: £{property.price}</p>
          {/* Add more details as needed */}
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

