import React, { useState } from 'react';

import PropertyList from './PropertyList';
import MapContainer from '../MapContainer';
import PropertyFilter from '../PropertyFilters';
import Header from '../Header';

// creating variables for state to filter different types of property
const Home = () => {
  const [filter, setFilter] = useState({});
   
  // helps update the filter changes from the current filter value
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    // part that renders onto the page with filter changes
    <>
      <span className="headerSearchInline">
        <Header />
        <PropertyFilter onFilterChange={handleFilterChange} />
      </span>
      <span className="propertySearchInline">
        <PropertyList filter={filter} />
        <MapContainer filter={filter} />
      </span>
    </>
  );
};

export default Home;
