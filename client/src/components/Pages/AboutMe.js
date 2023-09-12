import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <span className="centerPages">
        <span className="inline">
          <button className="rent">rent</button> OR
          <button className="buy">buy</button>
        </span>

        <span className="filterContainer">

        <span className="filterBox">
          price
          <p className="priceSym">£££</p>
        </span> 

        <span className="filterBox">
          beds
        <img src="https://imgur.com/bvlccTM.png" height="80" width="80" alt="bed"></img>
        </span>

        <span className="filterBox">
          type
        <img src="https://i.imgur.com/TIlKLdj.png" height="80" width="80" alt="property type"></img>
        </span>

        <span className="filterBox">
          bathroom
        <img src="https://i.imgur.com/J23J5au.png" height="80" width="80" alt="bathrooms"></img>
        </span>

        <span className="filterBox">
          pets
        <img src="https://i.imgur.com/bvR5Faw.png" height="80" width="80" alt="paw"></img>
        </span>
        
        </span>
      </span>
    </div>
  );
}