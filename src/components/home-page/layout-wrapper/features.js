import React, { useEffect, useRef, useContext, useCallback } from 'react';
import banner1 from '../../../assets/png/feature1.jpg';
import banner2 from '../../../assets/png/feature2.jpg';
import banner3 from '../../../assets/png/feature3.jpg';

import HorizontalScroll from './horizontal-scroll';
import { ScrollSpyContext } from './scrollspyContext';

export default function Features() {
  const ref = useRef();
  const [isFeatureVisible, setFeaturesVisible] = useContext(ScrollSpyContext);

  /* if feature is in viewport setFeaturesVisible is set to true which highlights the tab on the navbar*/
  const isInViewport = useCallback (() => {
    if (!ref.current) {
      setFeaturesVisible(false);
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    if (rect.top - 600 <= 0) {
      setFeaturesVisible(true);
    } else {
      setFeaturesVisible(false);
    }
  },[isFeatureVisible]);

  useEffect(() => {
    document.addEventListener('scroll', isInViewport, true);
  }, [isInViewport]);

  return (
    <>
      <div className="horizontal-section" id="features">
        <div ref={ref}>
          <h2>Features</h2>
        </div>
        <HorizontalScroll>
          <div className="image-container">
            <img src={banner1} alt=""></img>
            <img src={banner2} alt=""></img>
            <img src={banner3} alt=""></img>
          </div>
        </HorizontalScroll>
      </div>

      <div>
        <ul>
          <li>Raster color manipulation </li>
          <li>All state in url</li>
          <li>Monochromatic tiles URL as an input</li>
          <li> Clip as shape (for better visualisation)</li>
          <li>Add and remove colors</li>
          <li>Copy color in different format - HEX, RGBA, HSLA (JSON)</li>
          <li> Search bar to search places</li>
          <li>Go to current location</li>
          <li> Dark Mode </li>
        </ul>
      </div>
    </>
  );
}
