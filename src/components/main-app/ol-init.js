import React, { useEffect } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import {
  URL_SHAPE,
  URL_TILES,
  URL_COLORS,
  URL_OPACITY,
  URL_BASE_LAYER,
  URL_UPDATE_PUSH,
} from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { handleLocationButton } from 'utils';
import { setSource } from '../../api/map-data';
import { FOOTER_ICON } from 'config';

import { getBaseMapUrl } from 'utils';


export default function OlInit() {
  const [shape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles] = useQueryParam(URL_TILES, StringParam);
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);

  const [baseLayer, onChangeBaseLayer] = useQueryParam(
    URL_BASE_LAYER,
    StringParam
  );

  const prevTiles = usePrevious(tiles);
  const prevShape = usePrevious(shape);
  const prevBaseLayer = usePrevious(baseLayer);

  useEffect(() => {
    const olInstances = olMain({ shape, tiles, colors, opacity, baseLayer });
    setSource(olInstances.map.getLayers().getArray()[0].values_.source);

    if (olInstances.rasterSource && shape && prevTiles !== tiles) {
      olInstances.rasterSource.setUrl(tiles);
      olInstances.rasterSource.refresh();
    }

    if (olInstances.baseMapSource && baseLayer && prevBaseLayer !== baseLayer) {
      olInstances.baseMapSource.setUrl(getBaseMapUrl(baseLayer));
      olInstances.baseMapSource.refresh();
    }

    if (olInstances.shapeSource && shape && prevShape !== shape) {
      olInstances.shapeSource.setUrl(shape);
      olInstances.shapeSource.refresh();

      let featureProjection = olInstances.map.getView().getProjection();
      console.log(`featureProjection`, featureProjection);

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
  }, [
    shape,
    tiles,
    colors,
    opacity,
    prevTiles,
    prevShape,
    baseLayer,
    prevBaseLayer,
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
        <div id="popup" className="ol-popup">
          <div className="powered">
            Powered by{' '}
            <a href="http://blueskyhq.in/" target="_blank" rel="noreferrer">
              Blue Sky Analytics
            </a>{' '}
            | Made on{' '}
            <a href="https://openlayers.org/" target="_blank" rel="noreferrer">
              OpenLayers
            </a>{' '}
            | Basemap by{' '}
            <a href="mapbox.com" target="_blank" rel="noreferrer">
              Mapbox
            </a>
          </div>
          <div className="button-block">
            <button
              className="toggle"
              onClick={e => onChangeBaseLayer('light', URL_UPDATE_PUSH)}
            >
              light
            </button>
            <button
              className="toggle"
              onClick={e => onChangeBaseLayer('dark', URL_UPDATE_PUSH)}
            >
              dark
            </button>
            <button
              className="toggle"
              onClick={e => onChangeBaseLayer('satelight', URL_UPDATE_PUSH)}
            >
              satelight
            </button>
            <button
              className="toggle"
              onClick={e => onChangeBaseLayer('street', URL_UPDATE_PUSH)}
            >
              street
            </button>
            <button
              className="toggle"
              onClick={e => onChangeBaseLayer('green', URL_UPDATE_PUSH)}
            >
              green
            </button>
          </div>
          <div className="badges">
            {FOOTER_ICON.map(footer => (
              <a
                key={footer.label}
                href={footer.url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={footer.img} alt={footer.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
