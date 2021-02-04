import React, { useEffect } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import { URL_SHAPE, URL_TILES, URL_COLORS, URL_OPACITY } from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faSearch } from '@fortawesome/free-solid-svg-icons';
import { handleLocationButton } from 'utils';
import { setSource } from '../../api/map-data';

export default function OlInit() {
  const [shape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles] = useQueryParam(URL_TILES, StringParam);
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);

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
        olInstances.map.getView().fit(olInstances.shapeSource.getExtent(), {
          padding: [20, 20, 20, 420],
        });
      });
    }

    if (olInstances.rasterLayer) {
      olInstances.rasterLayer.setOpacity(parseFloat(opacity));
    }

    if (olInstances.rasterSource) {
      olInstances.rasterSource.refresh();
    }
  }, [shape, tiles, colors, opacity, prevTiles, prevShape]);

  //Display the search bar after click on the search icon for small screens only
  const displaysearchbar=(e)=>
  {
    let div=document.getElementsByClassName('gcd-gl-control')[0];
    div.classList.add('show-results');

  }

  return (
    <>
      <div>
        <div id="map" className="main-map">
          <div className="ol-control location-btn">
            <button onClick={() => handleLocationButton()}>
              <FontAwesomeIcon icon={faCompass} />
            </button>
          </div>
          
          {/* //Search bar icon */}
          <div className="ol-control search">
            <button onClick={displaysearchbar}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
