import XYZ from 'ol/source/XYZ';
import { Tile as TileLayer } from 'ol/layer';

export function baseMapLayerLoader(url) {
  const baseMapSource = new XYZ({
    url,
  });

  const baseMapLayer = new TileLayer({
    className: true,
    preload: Infinity,
    source: baseMapSource,
  });

  return { baseMapSource, baseMapLayer };
}
