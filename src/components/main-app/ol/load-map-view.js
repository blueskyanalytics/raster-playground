import View from 'ol/View';

export default function loadMapView() {
  const view = new View({ center: [0, 0], zoom: 0 });
  return view;
}
