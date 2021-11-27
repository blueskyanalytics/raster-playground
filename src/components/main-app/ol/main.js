import { clipRasterLayer, dragMap, initMap, loadRasterLayer } from './';
import {
  getColorsArray,
  getRgbColorsArray,
  addSearchControl,
  setMap,
  getBaseMapUrl,
} from 'utils';

import { baseMapLayerLoader } from './base-layer';

let map = null;
let rasterSource = null;
let rasterColorSource = null;
let rasterLayer = null;
let shapeSource = null;
let baseMapSource = null;
let baseMapLayer = null;

export default function olMain({ shape, tiles, colors, opacity, baseLayer }) {
  const spectrumColor = getColorsArray(colors);

  const url = getBaseMapUrl(baseLayer);

  const rgbColorsArray = getRgbColorsArray(
    spectrumColor.length >= 2 ? spectrumColor : ['#000000', '#ffffff']
  );

  if (rasterColorSource && spectrumColor.length >= 2)
    rasterColorSource.on('beforeoperations', function (event) {
      event.data.rgbColorsArr = rgbColorsArray;
    });

  if (map)
    return {
      map,
      rasterLayer,
      rasterSource,
      shapeSource,
      rasterColorSource,
      baseMapSource,
    };

  const loadRaster = loadRasterLayer({
    rasterSource,
    rasterColorSource,
    rgbColorsArray,
    rasterLayer,
    opacity,
    tiles,
  });

  rasterLayer = loadRaster.rasterLayer;
  rasterSource = loadRaster.rasterSource;
  rasterColorSource = loadRaster.rasterColorSource;

  const clipRaster = clipRasterLayer({ rasterLayer, shape });
  const clipLayer = clipRaster.clipLayer;
  const boundaryLayer = clipRaster.boundaryLayer;
  shapeSource = clipRaster.shapeSource;

  const baseMapLayerLoaded = baseMapLayerLoader({ url });
  baseMapLayer = baseMapLayerLoaded.baseMapLayer;
  baseMapSource = baseMapLayerLoaded.baseMapSource;


  map = initMap({ rasterLayer, clipLayer, boundaryLayer, baseMapLayer });
  setMap(map);
  addSearchControl(map);
  dragMap(map);
  return {
    map,
    rasterSource,
    rasterLayer,
    shapeSource,
    rasterColorSource,
    baseMapSource,
  };
}
