import Map from 'ol/Map';
import View from 'ol/View';

export default function initMap({
  rasterLayer,
  clipLayer,
  boundaryLayer,
  baseMapLayer,
}) {
  return new Map({
    target: 'map',
    view: new View({ center: [0, 0], zoom: 0 }),
    layers: [baseMapLayer, clipLayer, rasterLayer, boundaryLayer],
  });
}
