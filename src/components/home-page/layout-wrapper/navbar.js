import React, { useContext } from 'react';
import logo from '../../../assets/png/android-chrome-192x192.png';
import { ScrollSpyContext } from './scrollspyContext';

export default function Navbar() {
  const [isFeaturesVisible] = useContext(ScrollSpyContext);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <a className="navbar-company" href="https://play.blueskyhq.in/">
            {' '}
            <img src={logo} width="60" height="60" alt=""></img>
            Raster Playground{' '}
          </a>
          <a className="play" href="/play">
            <p>
              <span class="background"></span>
              <span class="base"></span>
              <span class="text">PLAY</span>
            </p>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={isFeaturesVisible ? 'nav-link' : 'nav-link active'}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={isFeaturesVisible ? 'nav-link active' : 'nav-link'}
                href="#features"
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/blueskyanalytics/raster-playground"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://blueskyhq.in/">
                Blue Sky HQ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
