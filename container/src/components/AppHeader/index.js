import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.scss';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>Your Chef <span role="img" aria-label="chef">👨‍🍳</span></h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">Browse restaurants</NavLink>
        </li>
        <li>
          <NavLink to="/random">Pick me one</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
