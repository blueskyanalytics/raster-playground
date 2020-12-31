import { clipRasterLayer, dragMap, initMap, loadRasterLayer } from './';
import { getColorsArray, getRgbColorsArray } from 'utils';
import {setMapData} from 'api/update-map'
import View from 'ol/View'

let map = null;
let rasterSource = null;
let rasterColorSource = null;
let rasterLayer = null;
let shapeSource = null;

export default function olMain({ shape, tiles, colors, opacity }) {
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

  let view = new View({ center: [0, 0], zoom: 0 });
  map = initMap({ view, rasterLayer, clipLayer, boundaryLayer }); 
  setMapData(map);
  dragMap(map);
  return { map, rasterSource, rasterLayer, shapeSource, rasterColorSource };
}
