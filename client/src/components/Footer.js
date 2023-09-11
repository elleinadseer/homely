import React from 'react';

// Links to my gitHub, linkedIn and a (random) X profile with images attached
export default function Header() {
  return (
    <div>
    <span className="center">
      <a href="https://github.com/elleinadseer"><img src="https://img.icons8.com/?size=1x&id=118557&format=png" alt="GitHub"></img></a>

      <a href="https://www.linkedin.com/in/danielle-rees-982b8b266/"><img src="https://img.icons8.com/?size=1x&id=64154&format=png" alt="LinkedIn"></img></a>

      <a href="http://x.com/example"><img src="https://img.icons8.com/?size=1x&id=109467&format=png" alt="Twitter"></img></a>
    </span>
    </div>
  );
}