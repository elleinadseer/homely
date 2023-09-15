import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./components/Header";
import PropertyFilter from "./components/PropertyFilters";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";

import PropertyPage from "./components/Pages/PropertyPage";
import Home from "./components/Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

export default function SiteContainer() {
  return (
    <ApolloProvider client={client}>
      <div>
        <span className="headerSearchInline">
          <Header />
          <PropertyFilter />
        </span>
        <span className="propertySearchInline">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/property/:propertyId"
                element={<PropertyPage />}
              />
            </Routes>
          </Router>
        </span>
      </div>
    </ApolloProvider>
  );
}
