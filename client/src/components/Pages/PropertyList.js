
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

export default PropertyList;

