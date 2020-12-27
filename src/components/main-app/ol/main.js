import { clipRasterLayer, dragMap, initMap, loadRasterLayer } from './';
import { getColorsArray, getRgbColorsArray } from 'utils';
import { fromLonLat } from 'ol/proj';

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

  const position = async () => {
    try {
      if (map) {
        await navigator.geolocation.getCurrentPosition(position => {
          map
            .getView()
            .setCenter(
              fromLonLat([position.coords.longitude, position.coords.latitude])
            );
          map.getView().setZoom(11);
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  rasterLayer = loadRaster.rasterLayer;
  rasterSource = loadRaster.rasterSource;
  rasterColorSource = loadRaster.rasterColorSource;

  const clipRaster = clipRasterLayer({ rasterLayer, shape });
  const clipLayer = clipRaster.clipLayer;
  const boundaryLayer = clipRaster.boundaryLayer;
  shapeSource = clipRaster.shapeSource;

  map = initMap({ rasterLayer, clipLayer, boundaryLayer, position });
  dragMap(map);
  return { map, rasterSource, rasterLayer, shapeSource, rasterColorSource };
}
