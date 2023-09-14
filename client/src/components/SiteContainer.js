import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';
import PropertyTile from './PropertyTile';
import AboutMe from './Pages/PropertyFilter';

import PropertyList from './Pages/PropertyList';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import MapContainer from './MapContainer';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

export default function SiteContainer() {
  const [currentPage, setCurrentPage] = useState('PropertyList');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'PropertyList') {
      return <PropertyList />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ApolloProvider client={client}>
      <div>
        <span className='headerSearchInline'>
          <Header />
          <AboutMe />
        </span>
        <LogIn />
        <Signup />
        <span className='propertySearchInline'>
        <PropertyList />
        <MapContainer />       
        </span>
      </div>
    </ApolloProvider>
  );
}
