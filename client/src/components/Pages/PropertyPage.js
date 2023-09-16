import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROPERTY } from "../../utils/queries/propertyQueries.js";
import Contact from './Contact';

const PropertyPage = () => {
  const { propertyId } = useParams();

  // TO DO
  const { loading, data, error } = useQuery(GET_PROPERTY, {
    // pass URL parameter
    variables: { id: propertyId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching property:", error);
    return <p>Error: {error.message}</p>;
  }

  const property = data.property;

  return (
    <div className="propertyDetails">
      <div className="propertySolo">
        {property.images.map((image, index) => (
          <img
            className="mainPropertyImg"
            key={index}
            src={image.image}
            height="400"
            width="650"
            alt="property"
          />
        ))}
        <div className="propertyPageText">
          <h2>£{property.price}</h2>
          <p>
            {property.beds} Bedroom {property.propertyType.name} For Sale
          </p>
          <p>
            {property.address}, {property.city}
            <br></br>
            {property.postcode}
          </p>
          <span className="imgSpan">
            <img
              src="https://i.imgur.com/J23J5au.png"
              height="25"
              width="25"
              alt="bathrooms"
            ></img>{" "}
            Bathrooms: {property.baths}
          </span>
          <p>{property.description}</p>
        </div>
      </div>

      <span className="mapContact">
      <div className="mapContainer">
        <div>
          <iframe
            className="map"
            title="property-map"
            width="650"
            height="400"
            border="0px"
            src={`https://maps.google.com/maps?q=${property.lat},${property.lng}&output=embed`}
          ></iframe>
        </div>
      </div>

      <div className="contactForm">
        <Contact />
        </div></span>
    </div>
  );
};

export default PropertyPage;
