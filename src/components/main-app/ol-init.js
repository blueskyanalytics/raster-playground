import React, { useEffect } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import { URL_SHAPE, URL_TILES, URL_COLORS, URL_OPACITY } from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';

export default function OlInit() {
  const [shape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles] = useQueryParam(URL_TILES, StringParam);
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);

  const prevTiles = usePrevious(tiles);
  const prevShape = usePrevious(shape);

  useEffect(() => {
    const olInstances = olMain({ shape, tiles, colors, opacity });

    if (olInstances.rasterSource && shape && prevTiles !== tiles) {
      olInstances.rasterSource.setUrl(tiles);
      olInstances.rasterSource.refresh();
    }

    if (olInstances.shapeSource && shape && prevShape !== shape) {
      setTimeout(() => {
        olInstances.map
          .getView()
          .fit(olInstances.shapeSource.getExtent(), olInstances.map.getSize());
      }, 1000);
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
        <div
          style={{
            width: `${window.innerWidth - 460}px`,
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          id="map"
          className="main-map"
        ></div>
      </div>
    </>
  );
}
