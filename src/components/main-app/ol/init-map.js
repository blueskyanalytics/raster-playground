import Map from 'ol/Map';
import XYZ from 'ol/source/XYZ';
import { Tile as TileLayer } from 'ol/layer';
import View from 'ol/View';
import { BASEMAP_LIGHT_STYLE } from 'config';

export default function initMap({ rasterLayer, clipLayer, boundaryLayer }) {
  return new Map({
    target: 'map',
    view: new View({ center: [0, 0], zoom: 0 }),
    layers: [
      new TileLayer({
        className: true,
        preload: Infinity,
        source: new XYZ({
          url: BASEMAP_LIGHT_STYLE,
        }),
      }),
      clipLayer,
      rasterLayer,
      boundaryLayer,
    ],
  });
}
