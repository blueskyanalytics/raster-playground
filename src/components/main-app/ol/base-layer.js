import XYZ from 'ol/source/XYZ';
import { Tile as TileLayer } from 'ol/layer';

export function baseMapLayerLoader({ url }) {
  // base map source
  const baseMapSource = new XYZ({
    url,
  });

  // base map tile layer
  const baseMapLayer = new TileLayer({
    className: true,
    preload: Infinity,
    source: baseMapSource,
  });

  return { baseMapSource, baseMapLayer };
}
