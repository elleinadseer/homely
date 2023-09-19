import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

// handles sign-up validation to see if email & password matches validation details
function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Uses GraphQL mutation for adding a user and signing up
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    // if login is successful, user token is added to allow user to sign up
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signupForm">

      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
      <div className="labelInput">
          <label htmlFor="username">Username:</label><br></br>
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="firstName">First Name:</label><br></br>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="lastName">Last Name:</label><br></br>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="email">Email:</label><br></br>
          <input
  placeholder="youremail@test.com"
  name="email"
  type="email"
  id="signup-email" // Unique ID for signup email input
  onChange={handleChange}
/>
        </div>
        <div className="labelInput">
          <label htmlFor="pwd">Password:</label><br></br>
          <input
  placeholder="******"
  name="password"
  type="password"
  id="signup-pwd" // Unique ID for signup password input
  onChange={handleChange}
/>
        </div>
        <div className="submitButton">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;