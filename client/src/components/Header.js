import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <span className='center'>
      <Link to="/"><img src="https://i.imgur.com/EfZzC5F.png" alt="homely logo"></img></Link>
      <div className="signLogLinks">
        <Link to="/signup">Sign up</Link> or <Link to="/login">log in</Link> to favourite properties
      </div>
      </span>
    </div>
  );
}