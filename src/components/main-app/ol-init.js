import React, { useEffect, useState } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import { URL_SHAPE, URL_TILES, URL_COLORS, URL_OPACITY } from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';

export default function OlInit() {
  const [map, updateMap] = useState(null);
  const [rasterSource, setRasterSource] = useState(null);
  const [rasterColorSource, setRasterColorSource] = useState(null);
  const [rasterLayer, setRasterLayer] = useState(null);
  let [shapeSource, setShapeSource] = useState(null);

  const [shape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles] = useQueryParam(URL_TILES, StringParam);
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);

  const prevTiles = usePrevious(tiles);
  const prevShape = usePrevious(shape);

  const updateState = newState => {
    updateMap(newState.map);
    setRasterSource(newState.rasterSource);
    setRasterColorSource(newState.rasterColorSource);
    setRasterLayer(newState.rasterLayer);
    setShapeSource(newState.shapeSource);
  };

  useEffect(() => {
    const olInstances = olMain({
      shape,
      tiles,
      colors,
      opacity,
      rasterSource,
      rasterColorSource,
      rasterLayer,
      shapeSource,
      map,
    });

    updateState(olInstances);

    if (rasterSource && shape && prevTiles !== tiles) {
      rasterSource.setUrl(tiles);
      rasterSource.refresh();
    }

    if (shapeSource && shape && prevShape !== shape) {
      shapeSource.setUrl(shape);
      shapeSource.refresh();
    }

    if (rasterLayer) {
      rasterLayer.setOpacity(parseFloat(opacity));
    }

    if (rasterSource) {
      rasterSource.refresh();
    }
  }, [
    shape,
    tiles,
    colors,
    opacity,
    prevTiles,
    prevShape,
    map,
    rasterLayer,
    rasterSource,
    rasterColorSource,
    shapeSource,
  ]);

  return (
    <>
      <div>
        <div id="map" className="main-map"></div>
      </div>
    </>
  );
}
