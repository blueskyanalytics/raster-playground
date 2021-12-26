import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { TopoJSON, GeoJSON } from 'ol/format';
import { getVectorContext } from 'ol/render';
import { Fill, Style, Stroke } from 'ol/style';

/**
 * @param {*} rasterLayer = Raster layer map instance generated from OL map init
 */

function get_url_extension(url) {
  if (url) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
  }
}

export default function clipRasterLayer({ rasterLayer, shape }) {
  const urlExtension = get_url_extension(shape);
  const shapeSource = new VectorSource({
    url: shape,
    format: urlExtension === 'geojson' ? new GeoJSON() : new TopoJSON(),
    overlaps: false,
  });

  const clipLayer = new VectorLayer({
    source: shapeSource,
    style: null,
  });

  const boundaryLayer = new VectorLayer({
    source: shapeSource,
    style: () =>
      new Style({
        fill: new Fill({
          color: 'rgba(255, 255, 255, 0.01)',
        }),
        stroke: new Stroke({
          color: '#000000',
          width: 1,
        }),
      }),
  });

  //clip raster layer on add feature event
  clipLayer.getSource().on('addfeature', function () {
    rasterLayer.setExtent(clipLayer.getSource().getExtent());
  });

  const style = new Style({
    fill: new Fill({
      color: 'black',
    }),
  });

  //postrender cliped raster layer with vector on postrender
  rasterLayer.on('postrender', function (e) {
    const vectorContext = getVectorContext(e);
    e.context.globalCompositeOperation = 'destination-in';
    clipLayer.getSource().forEachFeature(function (feature) {
      vectorContext.drawFeature(feature, style);
    });
    e.context.globalCompositeOperation = 'source-over';
  });
  return { clipLayer, boundaryLayer, shapeSource };
}
