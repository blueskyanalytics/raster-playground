import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <h2 className="logo-cont heading heading-sm">
          <span className="heading-bold">Raster</span>Playground
        </h2>
        <div className="nav-actions">
          <Link to="/main" className="btn btn-filled btn-sm">
            See in Action
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
