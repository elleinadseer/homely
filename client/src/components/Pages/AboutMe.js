import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <span className="centerPages">
        Are you seeking to rent or buy?
        <span className="inline">
          <button className="rent">Rent</button>
          <button className="buy">Buy</button>
        </span>
        Filters: Proximity / Price / Beds / Pets / Type / Bathroom 


        <span className="filterContainer">

        <span className="filterBox">
          PRICE
          <p className="priceSym">£££</p>
        </span> 

        <span className="filterBox">
          BEDS
        <img src="https://imgur.com/bvlccTM.png" height="80" width="80" alt="bed"></img>
        </span>

        <span className="filterBox">
          TYPE
        <img src="https://i.imgur.com/TIlKLdj.png" height="80" width="80" alt="property type"></img>
        </span>

        <span className="filterBox">
          BATHROOMS
        <img src="https://i.imgur.com/J23J5au.png" height="80" width="80" alt="bathrooms"></img>
        </span>

        <span className="filterBox">
          PETS
        <img src="https://i.imgur.com/bvR5Faw.png" height="80" width="80" alt="paw"></img>
        </span>
        
        </span>
      </span>
    </div>
  );
}