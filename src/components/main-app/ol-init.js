import React, { useEffect } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import { URL_SHAPE, URL_TILES, URL_COLORS, URL_OPACITY } from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { handleLocationButton } from 'utils';
import { setSource } from '../../api/map-data';
import { useSelector } from 'react-redux';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { GeoJSON, TopoJSON } from 'ol/format';
const addVectorLayer = (title, type, jsonObj, featureProjection) => {
  let source, features;
  if (type === 'geojson') {
    features = new GeoJSON().readFeatures(jsonObj, { featureProjection });
    source = new VectorSource({
      features,
      format: new GeoJSON(),
      overlaps: false,
    });
  } else if (type === 'topojson') {
    features = new TopoJSON().readFeatures(jsonObj, { featureProjection });
    source = new VectorSource({
      features,
      format: new TopoJSON(),
      overlaps: false,
    });
  }
  return new VectorLayer({
    source,
    title,
  });
};
export default function OlInit() {
  const shapeData = useSelector(state => state.shapeData);
  const [shape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles] = useQueryParam(URL_TILES, StringParam);
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const prevShapeData = usePrevious(shapeData);
  const prevTiles = usePrevious(tiles);
  const prevShape = usePrevious(shape);

  useEffect(() => {
    const olInstances = olMain({ shape, tiles, colors, opacity });
    setSource(olInstances.map.getLayers().getArray()[0].values_.source);

    if (olInstances.rasterSource && shape && prevTiles !== tiles) {
      olInstances.rasterSource.setUrl(tiles);
      olInstances.rasterSource.refresh();
    }

    if (olInstances.shapeSource && shape && prevShape !== shape) {
      olInstances.shapeSource.setUrl(shape);
      olInstances.shapeSource.refresh();

      olInstances.shapeSource.on('change', () => {
        let shapeExtentArray = olInstances.shapeSource.getExtent();
        if (
          shapeExtentArray &&
          !shapeExtentArray.includes(Infinity) &&
          !shapeExtentArray.includes(-Infinity)
        ) {
          olInstances.map.getView().fit(olInstances.shapeSource.getExtent(), {
            padding: [20, 20, 20, 420],
          });
        }
      });
    }

    if (olInstances.rasterLayer) {
      olInstances.rasterLayer.setOpacity(parseFloat(opacity));
    }

    if (olInstances.rasterSource) {
      olInstances.rasterSource.refresh();
    }
    if (
      shapeData &&
      shapeData.fileType &&
      shapeData.parsedFileData &&
      prevShapeData !== shapeData
    ) {
      let jsonObj = JSON.stringify(shapeData.parsedFileData);
      let featureProjection = olInstances.map.getView().getProjection();
      let title = 'upload-file-layer';

      olInstances.map.getLayers().forEach(vectorLayer => {
        if (vectorLayer.get('title') === 'upload-file-layer')
          olInstances.map.removeLayer(vectorLayer);
      });

      const newShape = addVectorLayer(
        title,
        shapeData.fileType,
        jsonObj,
        featureProjection
      );
      olInstances.map.addLayer(newShape);
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
        <div id="map" className="main-map">
          <div className="ol-control location-btn">
            <button onClick={() => handleLocationButton()}>
              <FontAwesomeIcon icon={faCompass} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
