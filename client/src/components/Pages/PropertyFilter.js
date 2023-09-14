import React from 'react';

export default function PropertyFilter() {
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
          <select id="prices">
            <option value="prices" selected>-- Prices --</option>
            <option value="less">Less than £99,000</option>
            <option value="1">£100,000</option>
            <option value="2">£200,000</option>
            <option value="3">£300,000</option>
            <option value="4">£400,000</option>
            <option value="5">£500,000</option>
            <option value="more">More than £600,000</option>
          </select>
        </span> 


        <span className="filterBox">
          beds
        <img src="https://imgur.com/bvlccTM.png" height="80" width="80" alt="bed"></img>
        <select id="bedrooms">
            <option value="bedrooms" selected>-- Bedrooms --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </span>

        <span className="filterBox">
          type
        <img src="https://i.imgur.com/TIlKLdj.png" height="80" width="80" alt="property type"></img>
        <select id="properties">
            <option value="property" selected>-- Properties --</option>
            <option value="flat">Flat</option>
            <option value="cottage">Cottage</option>
            <option value="bungalow">Bungalow</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="mansion">Mansion</option>
          </select>
        </span>

        <span className="filterBox">
          bathroom
        <img src="https://i.imgur.com/J23J5au.png" height="80" width="80" alt="bathrooms"></img>
        <select id="bathroom">
            <option value="bathroom" selected>-- Bathrooms --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </span>

        <span className="filterBox">
          pets
        <img src="https://i.imgur.com/bvR5Faw.png" height="80" width="80" alt="paw"></img>
        <select id="bathroom">
            <option value="bathroom" selected>-- Pet-Friendly --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
        </span>
        
        </span>
      </span>
    </div>
  );
}