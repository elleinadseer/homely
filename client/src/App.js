import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';
import PropertyFilter from './components/PropertyFilters';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';

import PropertyPage from './components/Pages/PropertyPage';
import Home from './components/Pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

export default function SiteContainer() {
  const [filter, setFilter] = useState({});

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
        <span className="headerSearchInline">
          <Header />
          <PropertyFilter onFilterChange={handleFilterChange} />
        </span>
        <span className="propertySearchInline">
            <Routes>
              <Route path="/" element={<Home filter={filter} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/property/:propertyId" element={<PropertyPage />} />
            </Routes>
        </span>
      </div>
      </Router>
    </ApolloProvider>
  );
}
