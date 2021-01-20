import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { circular } from 'ol/geom/Polygon';
import { fromLonLat } from 'ol/proj';
import View from 'ol/View';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';

let map = {};

export function setMap(mapVar) {
  map = mapVar;
}

export function handleLocationButton() {
  navigator.geolocation.getCurrentPosition(position => {
    let currentLocation = [position.coords.longitude, position.coords.latitude];
    let view = new View({ center: fromLonLat(currentLocation), zoom: 12 });

    const accuracy = circular(currentLocation, position.coords.accuracy);
    let accuracyFeature = new Feature(accuracy);
    let positionFeature = new Feature(new Point(fromLonLat(currentLocation)));

    positionFeature.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: '#3399CC',
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 2,
          }),
        }),
      })
    );

    new VectorLayer({
      map: map,
      source: new VectorSource({
        features: [accuracyFeature, positionFeature],
      }),
    });

    map.setView(view);
  });
}
