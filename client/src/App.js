import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';

import PropertyPage from './components/Pages/PropertyPage';
import Home from './components/Pages/Home';

import Favourites from './components/Pages/Favourites';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: Auth.getToken() || '',
  },
});

export default function SiteContainer() {
  const [filter, setFilter] = useState({});

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home filter={filter} />} />
            <Route
              path="/login"
              element={
                <>
                  <Header />
                  <Login />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  <Header />
                  <Signup />
                </>
              }
            />
            <Route
              path="/property/:propertyId"
              element={
                <>
                  <Header />
                  <PropertyPage />
                </>
              }
            />
            <Route
              path="/favourites"
              element={
                <>
                  <Header />
                  <Favourites />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
