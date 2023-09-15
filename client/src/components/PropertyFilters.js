import React from 'react';

export default function PropertyFilter() {
  return (
    <div>
      <span className="centerPages">
        <span className="inline">
          <button className="rent">rent</button> or
          <button className="buy">buy</button>
        </span>

        <span className="filterContainer">

        <span className="filterBox">
        <select id="prices">
            <option value="prices" selected>Price</option>
            <option value="less">&lt; £99,000</option>
            <option value="1">£100,000</option>
            <option value="2">£200,000</option>
            <option value="3">£300,000</option>
            <option value="4">£400,000</option>
            <option value="5">£500,000</option>
            <option value="more">&gt; £600,000</option>
          </select>          <p className="priceSym">£££</p>
        </span> 

        <span className="filterBox">
        <select id="bedrooms">
            <option value="bedrooms" selected>Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
         <img src="https://imgur.com/bvlccTM.png" height="80" width="80" alt="bed"></img>
        </span>

        <span className="filterBox">
        <select id="properties">
            <option value="property" selected>Property</option>
            <option value="flat">Flat</option>
            <option value="cottage">Cottage</option>
            <option value="bungalow">Bungalow</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="mansion">Mansion</option>
          </select>
          <img src="https://i.imgur.com/TIlKLdj.png" height="80" width="80" alt="property type"></img>
        </span>

        <span className="filterBox">
        <select id="bathroom">
            <option value="bathroom" selected>Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>       
          <img src="https://i.imgur.com/J23J5au.png" height="80" width="80" alt="bathrooms"></img>
        </span>

        <span className="filterBox">
        <select id="bathroom">
            <option value="bathroom" selected>Pet-Friendly</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
        <img src="https://i.imgur.com/bvR5Faw.png" height="80" width="80" alt="paw"></img>
        </span>        
        </span>
      </span>
    </div>
  );
}