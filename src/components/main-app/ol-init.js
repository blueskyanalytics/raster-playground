import React, { useEffect } from 'react';
import olMain from './ol/main';
import 'ol/ol.css';
import { URL_SHAPE, URL_TILES, URL_COLORS, URL_OPACITY } from 'config';
import { useQueryParam, StringParam } from 'use-query-params';
import { usePrevious } from 'react-use';
import { OSM } from 'ol/source';
import XYZ from 'ol/source/XYZ';
import '../../sass/index.sass';
import { handleBaseMapChange } from '../../utils/map-data';

export default function OlInit() {
  const [shape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles] = useQueryParam(URL_TILES, StringParam);
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);

  const prevTiles = usePrevious(tiles);
  const prevShape = usePrevious(shape);

  const mapBoxSource = new XYZ({
    url: `https://api.mapbox.com/styles/v1/srijitcoder/ckhnsil6g15ud19qqo9leet6e/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0Y29kZXIiLCJhIjoiY2s3MzhnZGZyMDlrbDNvbW5mcXpwZnoxMyJ9.ILgPQHEJq6lFRt2fN0j2sQ`,
  });

  const satelliteSource = new XYZ({
    url:
      'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  });

  const osmSource = new OSM();

  useEffect(() => {
    const olInstances = olMain({ shape, tiles, colors, opacity });

    if (olInstances.rasterSource && shape && prevTiles !== tiles) {
      olInstances.rasterSource.setUrl(tiles);
      olInstances.rasterSource.refresh();
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
  }, [shape, tiles, colors, opacity, prevTiles, prevShape]);

  return (
    <>
      <div>
        <div id="map" className="main-map">
          <div className="btn-group">
            <button
              className="view"
              onClick={() => handleBaseMapChange(mapBoxSource)}
            >
              MapBox
            </button>
            <button
              className="view"
              onClick={() => handleBaseMapChange(satelliteSource)}
            >
              Satellite
            </button>
            <button
              className="view"
              onClick={() => handleBaseMapChange(osmSource)}
            >
              OSM
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
