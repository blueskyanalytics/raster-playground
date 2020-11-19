import { Raster as RasterSource } from 'ol/source';
import { Image as ImageLayer } from 'ol/layer';
import XYZ from 'ol/source/XYZ';

/**
 * @param {*} rasterSource = Raster source map instance generated from OL map init
 * @param {*} rasterColorSource = Raster Coloured source value before colorization
 * @param {*} rgbColorsArray = RGB colour scheme for a data attribute
 */
export default function loadRasterLayer({
  rasterSource,
  rasterColorSource,
  rgbColorsArray,
  rasterLayer,
  opacity,
  tiles,
}) {
  //Raster source initilization using XYZ tile type
  rasterSource = new XYZ({
    url: tiles,
    crossOrigin: 'anonymous',
  });

  //Running colourization on raster source
  rasterColorSource = new RasterSource({
    sources: [rasterSource],
    operation: function (pixels, data) {
      const pixel = pixels[0];
      let r = 255 - pixel[0];
      let g = 255 - pixel[1];
      let b = 255 - pixel[2];
      const value = (r + g + b) / (3 * 255);
      const rgb = data.rgbColorsArr[Math.round(value * 100)];
      pixel[0] = rgb.r;
      pixel[1] = rgb.g;
      pixel[2] = rgb.b;
      return pixel;
    },
  });

  //Triggering colourization event before raster source render opetration
  rasterColorSource.on('beforeoperations', function (event) {
    event.data.rgbColorsArr = rgbColorsArray;
  });

  //Generating image out of coloured raster source
  rasterLayer = new ImageLayer({
    source: rasterColorSource,
    opacity: opacity ? parseFloat(opacity) : 1,
  });

  return { rasterSource, rasterColorSource, rasterLayer };
}
