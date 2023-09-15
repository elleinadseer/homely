import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROPERTY } from "../../utils/queries/propertyQueries.js";

const PropertyPage = () => {
  const { propertyId } = useParams();
  console.log('Property ID:', propertyId);
  //const { error } = useQuery(GET_PROPERTIES);

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

  const property = data.property; // Assuming 'property' is the correct field name in your GraphQL query
  console.log('Property data:', property);

  return (
    <div className="propertyDetails">
        <div className="PropertyTile">
          <img
            src="https://i.imgur.com/id7Ci0F.jpg"
            height="200"
            width="350"
            alt="house"
          ></img>
          <div className="propertyText">
            <h2>£{property.price}</h2>
            <p>{property.beds} bedroom house for sale</p>
            <p>
              {property.address}, {property.city}, {property.postcode}
            </p>
            <span className="imgSpan">
              <img
                src="https://i.imgur.com/J23J5au.png"
                height="25"
                width="25"
                alt="bathrooms"
              ></img>{' '}
              Bathrooms: {property.baths}
            </span>
          </div>
        </div>
    </div>
  );
};

export default PropertyPage;