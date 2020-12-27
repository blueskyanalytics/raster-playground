import React, { useEffect } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import { URL_SHAPE, URL_TILES, URL_COLORS, URL_OPACITY } from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';
import { unByKey } from 'ol/Observable';

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
      olInstances.shapeSource.setUrl(shape);
      olInstances.shapeSource.refresh();

      let source = olInstances.shapeSource;
      var listenerKey = source.on('change', function (e) {
        if (source.getState() === 'ready') {
          var extent = source.getExtent();
          olInstances.map.getView().fit(extent, { padding: [20, 20, 20, 420] });
          unByKey(listenerKey);
        }
      });
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
        <div id="map" className="main-map"></div>
      </div>
    </>
  );
}
