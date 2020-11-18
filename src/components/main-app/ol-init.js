import React, { useEffect } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';

export default function OlInit() {
  useEffect(() => {
    const olInstances = olMain();
    console.log(olInstances);
  }, []);
  return (
    <>
      <div>
        <div id="map" className="main-map"></div>
      </div>
    </>
  );
}
