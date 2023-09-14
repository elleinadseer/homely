import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="loginForm">

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label><br></br>
          <input
  placeholder="youremail@test.com"
  name="email"
  type="email"
  id="login-email" // Unique ID for login email input
  onChange={handleChange}
/>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label><br></br>
          <input
  placeholder="******"
  name="password"
  type="password"
  id="login-pwd" // Unique ID for login password input
  onChange={handleChange}
/>
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="submitButton">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;