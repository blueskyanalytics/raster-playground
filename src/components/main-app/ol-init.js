import React, { useEffect } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import {
  URL_SHAPE,
  URL_TILES,
  URL_COLORS,
  URL_OPACITY,
  URL_BASE_LAYER,
} from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';
import BaseMapLayer from './map-components/base-map-layer';
import { getBaseMapUrl } from 'utils';

export default function OlInit() {
  const [shape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles] = useQueryParam(URL_TILES, StringParam);
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [baseLayer] = useQueryParam(URL_BASE_LAYER, StringParam);

  const prevTiles = usePrevious(tiles);
  const prevShape = usePrevious(shape);
  const prevBaseLayer = usePrevious(baseLayer);

  useEffect(() => {
    const olInstances = olMain({ shape, tiles, colors, opacity, baseLayer });

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

      olInstances.shapeSource.on('change', () => {
        olInstances.map
          .getView()
          .fit(olInstances.shapeSource.getExtent(), {
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
  }, [
    shape,
    tiles,
    colors,
    opacity,
    baseLayer,
    prevTiles,
    prevShape,
    prevBaseLayer,
  ]);
  return (
    <>
      <div>
        <div id="map" className="main-map"></div>
        <BaseMapLayer />
      </div>
    </>
  );
}
