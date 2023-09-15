import React, { useState } from 'react';

const PropertyFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue;

    if (name === 'priceMax' || name === 'beds' || name === 'baths') {
      newValue = parseFloat(value);
    } else if (name === 'pets') {
      value === 'true'
        ? (newValue = true)
        : value === 'false'
        ? (newValue = false)
        : (newValue = undefined);
    } else {
      newValue = value;
    }

    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: newValue,
    }));
    // Call the parent component's callback function to pass the updated filters
    onFilterChange({ ...filter, [name]: newValue });
  };

  const priceOptions = [
    '',
    '100000',
    '200000',
    '300000',
    '400000',
    '500000',
    '600000',
    '700000',
    '800000',
    '900000',
    '1000000',
  ];
  const bedroomOptions = ['', '1', '2', '3', '4', '5', '6'];
  const propertyTypeOptions = ['', 'apartment', 'bungalow', 'detached'];
  const bathroomOptions = ['', '1', '2', '3', '4', '5', '6'];

  return (
    <div>
      <span className="centerPages">
        <span className="inline">
          <button className="rent">rent</button> or
          <button className="buy">buy</button>
        </span>

        <span className="filterContainer">
          <span className="filterBox">
            price
            <p className="priceSym">£££</p>
            <select
              id="prices"
              name="priceMax"
              onChange={handleChange}
              value={filter.priceMax || ''}
            >
              {priceOptions.map((option) => (
                <option key={option} value={option}>
                  {option === '' ? '-- Prices --' : `£${option}`}
                </option>
              ))}
            </select>
          </span>

          <span className="filterBox">
            beds
            <img
              src="https://imgur.com/bvlccTM.png"
              height="80"
              width="80"
              alt="bed"
            ></img>
            <select
              id="bedrooms"
              name="beds"
              onChange={handleChange}
              value={filter.beds || ''}
            >
              {bedroomOptions.map((option) => (
                <option key={option} value={option}>
                  {option === '' ? '-- Bedrooms --' : `${option}`}
                </option>
              ))}
            </select>
          </span>

          <span className="filterBox">
            type
            <img
              src="https://i.imgur.com/TIlKLdj.png"
              height="80"
              width="80"
              alt="property type"
            ></img>
            <select
              id="properties"
              name="propertyType"
              onChange={handleChange}
              value={filter.propertyType || ''}
            >
              {propertyTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option === '' ? '-- Property Type --' : option}
                </option>
              ))}
            </select>
          </span>

          <span className="filterBox">
            bathroom
            <img
              src="https://i.imgur.com/J23J5au.png"
              height="80"
              width="80"
              alt="bathrooms"
            ></img>
            <select
              id="bathroom"
              name="baths"
              onChange={handleChange}
              value={filter.baths || ''}
            >
              {bathroomOptions.map((option) => (
                <option key={option} value={option}>
                  {option === '' ? '-- Bathrooms --' : `${option}`}
                </option>
              ))}
            </select>
          </span>

          <span className="filterBox">
            pets
            <img
              src="https://i.imgur.com/bvR5Faw.png"
              height="80"
              width="80"
              alt="paw"
            ></img>
            <select
              id="pets"
              name="pets"
              onChange={handleChange}
              value={
                filter.pets === true ? true : filter.pets === false ? false : ''
              }
            >
              <option value="">-- Pet-Friendly --</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </span>
        </span>
      </span>
    </div>
  );
};

export default PropertyFilter;
