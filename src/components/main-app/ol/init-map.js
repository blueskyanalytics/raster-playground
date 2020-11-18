import Map from 'ol/Map';
import XYZ from 'ol/source/XYZ';
import { Tile as TileLayer } from 'ol/layer';
import View from 'ol/View';

export default function initMap({ rasterLayer, clipLayer }) {
  return new Map({
    target: 'map',
    view: new View({ center: [0, 0], zoom: 0 }),
    layers: [
      new TileLayer({
        className: true,
        preload: Infinity,
        source: new XYZ({
          url: `https://api.mapbox.com/styles/v1/srijitcoder/ckebi2vc119yf19qy6pen0n1l/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0Y29kZXIiLCJhIjoiY2s3MzhnZGZyMDlrbDNvbW5mcXpwZnoxMyJ9.ILgPQHEJq6lFRt2fN0j2sQ`,
        }),
      }),
      clipLayer,
      rasterLayer,
    ],
  });
}
