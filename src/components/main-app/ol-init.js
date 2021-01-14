import React, { useEffect, useState } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import { URL_SHAPE, URL_TILES, URL_COLORS, URL_OPACITY } from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';
import { setSource } from '../../api/map-data'

export default function OlInit() {
  const [shape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles] = useQueryParam(URL_TILES, StringParam);
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  
  const darkModeUrl = 'https://api.mapbox.com/styles/v1/srijitcoder/cke5v5nbb1uov19lj4n25qojl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0Y29kZXIiLCJhIjoiY2s3MzhnZGZyMDlrbDNvbW5mcXpwZnoxMyJ9.ILgPQHEJq6lFRt2fN0j2sQ'
  const lightModeUrl = 'https://api.mapbox.com/styles/v1/srijitcoder/ckhnsil6g15ud19qqo9leet6e/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0Y29kZXIiLCJhIjoiY2s3MzhnZGZyMDlrbDNvbW5mcXpwZnoxMyJ9.ILgPQHEJq6lFRt2fN0j2sQ'
  
  const prevTiles = usePrevious(tiles);
  const prevShape = usePrevious(shape);

  // const [darkMode, setDarkMode] = useState('light')

  useEffect(() => {
    const olInstances = olMain({ shape, tiles, colors, opacity });
    setSource(olInstances.map.getLayers().getArray()[0].values_.source)
    // var temp = olInstances.map.getLayers().getArray()[0].values_.source
    // let temp = olInstances.rasterSource
    // console.log(temp.getUrls())
    // console.log(temp.setUrl('temp') + temp.getUrls())

    if (olInstances.rasterSource && shape && prevTiles !== tiles) {
      // if (darkMode === 'dark'){
      //   temp.setUrl(darkModeUrl)
      // } else if (darkMode === 'light'){
      //   temp.setUrl(lightModeUrl)
      // }
      olInstances.rasterSource.setUrl(tiles);
      olInstances.rasterSource.refresh();
    }

    if (olInstances.shapeSource && shape && prevShape !== shape) {
      olInstances.shapeSource.setUrl(shape);
      olInstances.shapeSource.refresh();
    }

    if (olInstances.rasterLayer) {
      olInstances.rasterLayer.setOpacity(parseFloat(opacity));
    }

    if (olInstances.rasterSource) {
      olInstances.rasterSource.refresh();
    }
  }, [shape, tiles, colors, opacity, prevTiles, prevShape]);

  return (
    <>
      <div>
        {/* <button style={{'float':'right'}} onClick={setDarkMode('dark')}>Switch Theme</button> */}
        <div id="map" className="main-map"></div>
      </div>
    </>
  );
}
