import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="upper">
          <div className="row row-1">
            <h2 className="heading heading-sm text-lt">
              <span className="heading-bold">Find</span>Us
            </h2>
            <div className="social-cont">
              <Link to="/">
                <img
                  className="icon"
                  src={require('../../assets/png/github-ico.png').default}
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  className="icon"
                  src={require('../../assets/png/linkedin-ico.png').default}
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  className="icon"
                  src={require('../../assets/png/insta-ico.png').default}
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  className="icon"
                  src={require('../../assets/png/twitter-ico.png').default}
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  className="icon"
                  src={require('../../assets/png/yt-ico.png').default}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="row row-2">
            <h4 className="heading heading-sm text-lt">
              <span className="heading-bold">Raster</span>Playground
            </h4>
            <p className="para para-sm short-desc">
              Raster Playground is a color playground to visualise the world in
              a better way made by people at BlueSkyAnalytics
            </p>
          </div>
        </div>

        <div className="lower">&copy; Copyright 2021. Made in India</div>
      </div>
    </footer>
  );
};

export default MainFooter;
