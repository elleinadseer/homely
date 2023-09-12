import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';
import Project from './PropertyTile';
import AboutMe from './Pages/AboutMe';
import PropertyList from './Pages/PropertyList';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import MapContainer from './MapContainer';

export default function SiteContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
  // <MapContainer />
  //       <Footer/>

  return (
    <div>
      <span className='headerSearchInline'>
      <Header/>
      <AboutMe/>
      </span>
      <PropertyList/>
    </div>
  );
}