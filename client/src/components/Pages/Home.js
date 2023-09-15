import React from 'react';

import PropertyList from './PropertyList';
import MapContainer from '../MapContainer';

const Home = ({ filter }) => {
  return (
    <>
      <PropertyList filter={filter} />
    </>
  );
};

export default Home;
