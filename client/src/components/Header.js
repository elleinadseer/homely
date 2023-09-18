import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Header() {
  const isLoggedin = Auth.loggedIn();

  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <span className="center">
        <Link to="/">
          <img src="https://i.imgur.com/EfZzC5F.png" alt="homely logo"></img>
        </Link>
        <div className="signLogLinks">
          {isLoggedin ? (
            <>
              <Link to="/favorites">Favorites</Link> |{' '}
              <Link onClick={handleLogout}>Log out</Link>
            </>
          ) : (
            <>
              <Link to="/signup">Sign up</Link> or{' '}
              <Link to="/login">log in</Link> to favourite properties
            </>
          )}
        </div>
      </span>
    </div>
  );
}
