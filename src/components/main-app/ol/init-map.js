import Map from 'ol/Map';
import XYZ from 'ol/source/XYZ';
import { Tile as TileLayer } from 'ol/layer';

export default function initMap({
  rasterLayer,
  clipLayer,
  boundaryLayer,
  geolocationLayer,
  view,
}) {
  return new Map({
    target: 'map',
    view: view,
    layers: [
      new TileLayer({
        className: true,
        preload: Infinity,
        source: new XYZ({
          url: `https://api.mapbox.com/styles/v1/srijitcoder/ckhnsil6g15ud19qqo9leet6e/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0Y29kZXIiLCJhIjoiY2s3MzhnZGZyMDlrbDNvbW5mcXpwZnoxMyJ9.ILgPQHEJq6lFRt2fN0j2sQ`,
        }),
      }),
      clipLayer,
      rasterLayer,
      boundaryLayer,
      geolocationLayer,
    ],
  });
}
