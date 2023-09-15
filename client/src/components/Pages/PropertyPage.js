import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROPERTIES } from "../../utils/queries/propertyQueries.js";

const PropertyPage = () => {
  const { propertyId } = useParams();
  const { loading, error, data } = useQuery(GET_PROPERTIES);

  // TO DO
  /*
    const { loading, data } = useQuery(GET_SINGLE_PROPERTIES, {
      // pass URL parameter
      variables: { propertyId: propertyId },
    });
*/

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="propertyDetailsings">
      <div key="1">
        <div className="PropertyTile">
          <img
            src="https://i.imgur.com/id7Ci0F.jpg"
            height="200"
            width="350"
            alt="house"
          ></img>
          <div className="propertyText">
            <h2>$1,000,000</h2>
            <p>10 bedroom house for sale</p>
            <p>This is a Property Details page</p>
            <span className="imgSpan">
              <img
                src="https://i.imgur.com/J23J5au.png"
                height="25"
                width="25"
                alt="bathrooms"
              ></img>
              Bathrooms: 79871232
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
