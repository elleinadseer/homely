import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [moreDetails, setMoreDetails] = useState(false);
  const [viewProperty, setViewProperty] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.type === 'checkbox' ? target.checked : target.value;

    // Based on the input type, we set the state
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    } else if (inputType === 'moreDetails') {
      setMoreDetails(inputValue);
    } else if (inputType === 'viewProperty') {
      setViewProperty(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the Name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setMoreDetails(false);
    setViewProperty(false);
  };

  return (
    <div>
      <span className="centerPages">
        <p> <strong>Contact the estate agent</strong> </p>
        <br></br>

        <span className="checkboxes"><label>
            <input
              type="checkbox"
              name="moreDetails"
              checked={moreDetails}
              onChange={handleInputChange}
            />
            More details
          </label>

          <label>
            <input
              type="checkbox"
              name="viewProperty"
              checked={viewProperty}
              onChange={handleInputChange}
            />
            To view a property
          </label></span>
        <form className="form">
          Email:
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />

          Name:
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />

          Message: <br />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            rows="4"
            type="textarea"
            placeholder="message"
            className="message"
          />
          <br />

          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </span>
    </div>
  );
}

export default Form;
