import { MAPBOX_ACCESS_TOKEN, BASE_MAP_STYLE } from 'config/default';

export default function getBaseMapUrl(style) {
  return `https://api.mapbox.com/styles/v1/${BASE_MAP_STYLE[style]}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`;
}
