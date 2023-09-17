import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROPERTY_TYPES } from '../utils/queries/propertyQueries.js';

const PropertyFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({});
  const { loading, error, data } = useQuery(GET_PROPERTY_TYPES);

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
  const bathroomOptions = ['', '1', '2', '3', '4', '5', '6'];

  // Sort property types alphabetically
  const sortedPropertyTypes = data?.propertyTypes.slice().sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  return (
    <div>
      <span className="centerPages">
        <span className="inline">
          <button className="rent">rent</button> or
          <button className="buy">buy</button>
        </span>

        <span className="filterContainer">
          <span className="filterBox">
            <select
              id="prices"
              name="priceMax"
              onChange={handleChange}
              value={filter.priceMax || ''}
            >
              {priceOptions.map((option) => (
                <option key={option} value={option}>
                  {option === '' ? 'Prices' : `£${option}`}
                </option>
              ))}
            </select>
            <p className="priceSym">£££</p>
          </span>

          <span className="filterBox">
            <select
              id="bedrooms"
              name="beds"
              onChange={handleChange}
              value={filter.beds || ''}
            >
              {bedroomOptions.map((option) => (
                <option key={option} value={option}>
                  {option === '' ? 'Bedrooms' : `${option}`}
                </option>
              ))}
            </select>
            <img
              src="https://imgur.com/bvlccTM.png"
              height="80"
              width="80"
              alt="bed"
            ></img>
          </span>

          <span className="filterBox">
            <select
              id="properties"
              name="propertyType"
              onChange={handleChange}
              value={filter.propertyType}
            >
              <option value="">Property</option>
              {loading ? (
                <option>Loading...</option>
              ) : error ? (
                <option>Error loading property types</option>
              ) : (
                sortedPropertyTypes.map((type) => (
                  <option key={type._id} value={type._id}>
                    {type.name}
                  </option>
                ))
              )}
            </select>
            <img
              src="https://i.imgur.com/TIlKLdj.png"
              height="80"
              width="80"
              alt="property type"
            ></img>
          </span>

          <span className="filterBox">
            <select
              id="bathroom"
              name="baths"
              onChange={handleChange}
              value={filter.baths || ''}
            >
              {bathroomOptions.map((option) => (
                <option key={option} value={option}>
                  {option === '' ? 'Bathrooms' : `${option}`}
                </option>
              ))}
            </select>
            <img
              src="https://i.imgur.com/J23J5au.png"
              height="80"
              width="80"
              alt="bathrooms"
            ></img>
          </span>

          <span className="filterBox">
            <select
              id="pets"
              name="pets"
              onChange={handleChange}
              value={
                filter.pets === true ? true : filter.pets === false ? false : ''
              }
            >
              <option value="">Pet-Friendly</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <img
              src="https://i.imgur.com/bvR5Faw.png"
              height="80"
              width="80"
              alt="paw"
            ></img>
          </span>
        </span>
      </span>
    </div>
  );
};

export default PropertyFilter;
