/* import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './Header';
import PropertyFilter from './PropertyFilter';
import MapContainer from './MapContainer';
import LogIn from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import PropertyList from './Pages/PropertyList';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

export default function SiteContainer() {

  return (
    <ApolloProvider client={client}>
      <div>
        <span className='headerSearchInline'>
          <Header />
          <PropertyFilter />
        </span>
        <span className='propertySearchInline'>
    
        </span>
      </div>
    </ApolloProvider>
  );
}

/* 
import Footer from './Footer';
import PropertyTile from './PropertyTile';
import NavTabs from './NavTabs';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

  const [currentPage, setCurrentPage] = useState('PropertyList');

  const handlePageChange = (page) => setCurrentPage(page);
  
  const renderPage = () => {
    if (currentPage === 'PropertyFilter') {
      return <PropertyFilter />;
    }
    if (currentPage === 'PropertyList') {
      return <PropertyList />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
*/
