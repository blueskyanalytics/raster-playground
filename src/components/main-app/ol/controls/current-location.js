/***
 * TODO: Move to ES6 Class based Syntax
 * TODO: Splitting
 * Issue: React Components conflict with Open Layers
 */

import { Control } from 'ol/control';

import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { circular } from 'ol/geom/Polygon';
import { fromLonLat } from 'ol/proj';

import CurrentLocationIcon from "./../../../../assets/icons/current-location.svg";

const CurrentLocationControl = (function (Control) {
  function CurrentLocationControl(currentLocationOptions) {
    const options = currentLocationOptions || {};

    const LocationIcon = document.createElement('img');
    LocationIcon.setAttribute('src', CurrentLocationIcon);

    const LocationButton = document.createElement('button');

    const LocationButtonContainer = document.createElement('div');
    LocationButtonContainer.setAttribute(
      'class',
      'location-button ol-unselectable ol-control'
    );

    LocationButton.appendChild(LocationIcon);
    LocationButtonContainer.appendChild(LocationButton);

    Control.call(this, {
      element: LocationButtonContainer,
      target: options.target,
    });

    LocationButton.addEventListener(
      'click',
      this.gotoCurrentLocation.bind(this),
      false
    );
  }

  if (Control) CurrentLocationControl.__proto__ = Control;
  CurrentLocationControl.prototype = Object.create(
    Control && Control.prototype
  );

  CurrentLocationControl.prototype.constructor = CurrentLocationControl;
  CurrentLocationControl.prototype.gotoCurrentLocation = function gotoCurrentLocation() {
    const map = this.getMap();

    const source = new VectorSource();
    const layer = new VectorLayer({
      source: source,
    });

    map.addLayer(layer);

    navigator.geolocation.watchPosition(
      position => {
        const { coords } = position;
        const coordinates = [coords.longitude, coords.latitude];
        const accuracy = circular(coordinates, coords.accuracy);

        const projection = map.getView().getProjection();

        source.clear(true);
        source.addFeatures([
          new Feature(accuracy.transform('EPSG:4326', projection)),
          new Feature(new Point(fromLonLat(coordinates))),
        ]);

        map.getView().fit(source.getExtent(), {
          maxZoom: 10,
          duration: 500,
        });
      },
      err => {
        console.error('Error', err);
      },
      { enableHighAccuracy: true }
    );
  };

  return CurrentLocationControl;
})(Control);

export default CurrentLocationControl;
