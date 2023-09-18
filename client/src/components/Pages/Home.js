import React, { useState } from 'react';

import PropertyList from './PropertyList';
import MapContainer from '../MapContainer';
import PropertyFilter from '../PropertyFilters';
import Header from '../Header';

const Home = () => {

  const [filter, setFilter] = useState({});

const handleFilterChange = (newFilter) => {
  setFilter(newFilter);
};

  return (
    <>
      <span className="headerSearchInline">
      <Header />
      <PropertyFilter onFilterChange={handleFilterChange} />
      </span>
      <span className="propertySearchInline">
      <PropertyList filter={filter} />
      <MapContainer />
      </span>

    </>
  );
};

export default Home;
