import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';
import PropertyTile from './PropertyTile';
import PropertyFilter from './Pages/PropertyFilter';
import LogIn from './Pages/Login';
import Signup from './Pages/Signup';
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
  const [filter, setFilter] = useState({});

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <PropertyFilter onFilterChange={handleFilterChange} />;
    }
    if (currentPage === 'PropertyList') {
      return <PropertyList filter={filter} />;
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
        <span className="headerSearchInline">
          <Header />
          <PropertyFilter onFilterChange={handleFilterChange} />
        </span>
        <LogIn />
        <Signup />
        <span className="propertySearchInline">
          <PropertyList filter={filter} />
          <MapContainer />
        </span>
      </div>
    </ApolloProvider>
  );
}
