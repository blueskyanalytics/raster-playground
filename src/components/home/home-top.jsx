import React from 'react';
import { Link } from 'react-router-dom';

const HomeTop = () => {
  return (
    <header className="home-top">
      <div className="container">
        <div className="top-content">
          <div className="main-content">
            <h1 className="heading heading-lg mb-sm">
              <span className="heading-bold">Hello</span>World
            </h1>
            <p className="para para-bg mb-bg top-msg">
              Raster Playground is a color playground to visualise the world in
              a better way
            </p>
            <div className="action">
              <Link to="/main" className="btn btn-filled">
                See In Action
              </Link>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-white"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="visual">
            <img
              src={require('../../assets/png/raster-mock-ipad.png').default}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeTop;
