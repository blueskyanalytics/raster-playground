import Feature from 'ol/Feature';
import Geolocation from 'ol/Geolocation';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Point from 'ol/geom/Point';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';

/**
 *
 * Get's geolocation for current location
 * @param {ol.View} Map view object
 * @returns {ol.Geolocation}
 *
 */
const getGeolocation = view => {
  var geolocation = new Geolocation({
    trackingOptions: {
      enableHighAccuracy: true,
    },
    projection: view.getProjection(),
  });

  geolocation.setTracking(true);

  geolocation.on('error', function (error) {
    alert(error.message);
  });

  return geolocation;
};

/**
 *
 * Gets position feature and sets style for marker
 * @returns ol.Feature
 *
 */
const getPositionFeature = () => {
  let positionFeature = new Feature();
  positionFeature.setStyle(
    new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({
          color: 'cyan',
        }),
        stroke: new Stroke({
          color: 'white',
          width: 2,
        }),
      }),
    })
  );
  return positionFeature;
};

/**
 *
 * Gets geolocation layer and sets zIndex to stack on top of other layers
 * @param {ol.View} Map view
 * @returns {ol.VectorLayer}
 *
 */
export default function loadGeolocationLayer(view) {
  const positionFeature = getPositionFeature();
  const geolocation = getGeolocation(view);

  // enable tracking and location
  geolocation.on('change:position', function () {
    var coordinates = geolocation.getPosition();
    positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
  });

  const geolocationLayer = new VectorLayer({
    source: new VectorSource({
      features: [positionFeature],
    }),
    zIndex: 10001, // stack on top
  });

  return geolocationLayer;
}
