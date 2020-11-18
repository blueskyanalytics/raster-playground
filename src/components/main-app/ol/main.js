import { clipRaster, dragMap, initMap, loadRasterLayer } from './';
import { getRgbColorsArray } from 'utils';

const spectrumColor = [
  '#4b0c00',
  '#dd7f3d',
  '#d1a45b',
  '#b7be9e',
  '#abb8be',
  '#7db6d2',
  '#3e8eb4',
  '#006698',
];

let map = null;
let rasterSource = null;
let rasterColorSource = null;

export default function olMain() {
  const rgbColorsArray = getRgbColorsArray(spectrumColor);

  if (rasterColorSource)
    rasterColorSource.on('beforeoperations', function (event) {
      event.data.rgbColorsArr = rgbColorsArray;
    });

  if (map) return map;

  const loadRaster = loadRasterLayer({
    rasterSource,
    rasterColorSource,
    rgbColorsArray,
  });

  const rasterLayer = loadRaster.rasterLayer;
  rasterSource = loadRaster.rasterSource;
  rasterColorSource = loadRaster.rasterColorSource;

  const { clipLayer } = clipRaster({ rasterLayer });

  map = initMap({ rasterLayer, clipLayer });
  dragMap(map);
  return map;
}
