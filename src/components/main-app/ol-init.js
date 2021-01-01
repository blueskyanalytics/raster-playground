import React, { useEffect } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import { URL_SHAPE, URL_TILES, URL_COLORS, URL_OPACITY } from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';
import { useSelector } from 'react-redux';

import { GeoJSON, TopoJSON } from 'ol/format';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

const createLayerFromData = function ({
  title,
  shapeType,
  shapeData,
  featureProjection,
}) {
  const data = JSON.parse(shapeData);

  let features;
  let source;

  if (shapeType === 'geojson') {
    features = new GeoJSON().readFeatures(data, { featureProjection });
    source = new VectorSource({
      format: new GeoJSON(),
      overlaps: false,
    });
  }

  if (shapeType === 'topojson') {
    features = new TopoJSON().readFeatures(data, { featureProjection });
    source = new VectorSource({
      format: new TopoJSON(),
      overlaps: false,
    });
  }

  source.addFeatures(features);

  return new VectorLayer({
    source,
    title,
  });
};

export default function OlInit() {
  const [shape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles] = useQueryParam(URL_TILES, StringParam);
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);

  const shapeData = useSelector(state => state.shape);

  const prevTiles = usePrevious(tiles);
  const prevShape = usePrevious(shape);
  const prevShapeData = usePrevious(shapeData);

  useEffect(() => {
    const { map, rasterSource, shapeSource, rasterLayer } = olMain({
      shape,
      tiles,
      colors,
      opacity,
      shapeData,
    });

    if (shapeData !== prevShapeData && shapeData && shapeData.type) {
      const featureProjection = map.getView().getProjection();

      const layer = createLayerFromData({
        title: 'upload-layer',
        shapeType: shapeData.type,
        shapeData: shapeData.data,
        featureProjection,
      });

      map.getLayers().forEach(layer => {
        if (layer.get('title') === 'upload-layer') 
          map.removeLayer(layer);
      });

      map.addLayer(layer);
    }

    if (prevTiles !== tiles && rasterSource && shape) {
      rasterSource.setUrl(tiles);
      rasterSource.refresh();
    }

    if (prevShape !== shape && shapeSource && shape) {
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
    shapeData,
    prevShapeData,
  ]);
  return (
    <>
      <div>
        <div id="map" className="main-map"></div>
      </div>
    </>
  );
}
