import { clipRasterLayer, dragMap, initMap, loadRasterLayer } from './';
import { getColorsArray, getRgbColorsArray } from 'utils';

let map = null;
let rasterSource = null;
let rasterColorSource = null;
let rasterLayer = null;
let shapeSource = null;

export default function olMain({ shape, tiles, colors, opacity }) {
  const spectrumColor = getColorsArray(colors);
  const rgbColorsArray = getRgbColorsArray(
    spectrumColor.length ? spectrumColor : ['#000000', '#ffffff']
  );

  if (rasterColorSource)
    rasterColorSource.on('beforeoperations', function (event) {
      event.data.rgbColorsArr = rgbColorsArray;
    });

  if (map) return { map, rasterSource, shapeSource };

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

  map = initMap({ rasterLayer, clipLayer, boundaryLayer });
  dragMap(map);
  return { map, rasterSource, rasterLayer, shapeSource };
}
