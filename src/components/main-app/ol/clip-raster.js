import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import indiaTopoJson from 'assets/map/india-boundary.topojson';
import { TopoJSON } from 'ol/format';
import { getVectorContext } from 'ol/render';
import { Fill, Style, Stroke } from 'ol/style';

/**
 * @param {*} rasterLayer = Raster layer map instance generated from OL map init
 */
export default function clipRasterLayer({ rasterLayer }) {
  //Create cliping layer from topojson
  const clipLayer = new VectorLayer({
    source: new VectorSource({
      url: indiaTopoJson,
      format: new TopoJSON(),
      overlaps: false,
    }),
    style: null,
  });

  const boundaryLayer = new VectorLayer({
    source: new VectorSource({
      url: indiaTopoJson,
      format: new TopoJSON(),
      overlaps: false,
    }),
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

  return { clipLayer, boundaryLayer };
}
