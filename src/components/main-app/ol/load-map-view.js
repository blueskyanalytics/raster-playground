import View from 'ol/View';

/**
 *
 * Gets view for map
 * @returns {ol.View} View for map
 *
 */
export default function loadMapView() {
  const view = new View({ center: [0, 0], zoom: 0 });
  return view;
}
