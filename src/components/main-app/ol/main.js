import {
  clipRasterLayer,
  dragMap,
  initMap,
  loadRasterLayer,
  loadMapView,
  loadGeolocation,
} from './';
import { getColorsArray, getRgbColorsArray } from 'utils';

export default function olMain({
  shape,
  tiles,
  colors,
  opacity,
  map,
  rasterSource,
  rasterColorSource,
  rasterLayer,
  shapeSource,
}) {
  const spectrumColor = getColorsArray(colors);
  const rgbColorsArray = getRgbColorsArray(
    spectrumColor.length >= 2 ? spectrumColor : ['#000000', '#ffffff']
  );

  if (rasterColorSource && spectrumColor.length >= 2)
    rasterColorSource.on('beforeoperations', function (event) {
      event.data.rgbColorsArr = rgbColorsArray;
    });

  if (map)
    return { map, rasterLayer, rasterSource, shapeSource, rasterColorSource };

  const loadedRasterLayer = loadRasterLayer({
    rgbColorsArray,
    opacity,
    tiles,
  });

  const _rasterLayer = loadedRasterLayer.rasterLayer;
  const _rasterSource = loadedRasterLayer.rasterSource;
  const _rasterColorSource = loadedRasterLayer.rasterColorSource;

  const clipRaster = clipRasterLayer({
    rasterLayer: _rasterLayer,
    shape: shape,
  });
  const clipLayer = clipRaster.clipLayer;
  const boundaryLayer = clipRaster.boundaryLayer;
  const _shapeSource = clipRaster.shapeSource;

  const view = loadMapView();
  const geolocationLayer = loadGeolocation(view);

  const newMap = initMap({
    rasterLayer: _rasterLayer,
    clipLayer: clipLayer,
    boundaryLayer: boundaryLayer,
    geolocationLayer: geolocationLayer,
    view: view,
  });

  dragMap(newMap);
  return {
    map: newMap,
    rasterSource: _rasterSource,
    rasterLayer: _rasterLayer,
    shapeSource: _shapeSource,
    rasterColorSource: _rasterColorSource,
  };
}
