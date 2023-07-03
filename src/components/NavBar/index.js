import React from 'react';
import { Link } from 'react-router-dom';
import urlConfig from './src/config/urlConfig.js';

const Navbar = () => (
    <nav>
      <ul>
        {Object.keys(urlConfig).map((path) => (
          <li key={path}>
            <Link to={path}>{path === '/' ? 'Home' : path.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </nav>
);

export default Navbar;