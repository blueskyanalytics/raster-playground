import {
  BASEMAP_GREEN_STYLE,
  BASEMAP_DARK_STYLE,
  BASEMAP_SATELLITE_STYLE,
  BASEMAP_LIGHT_STYLE,
  BASEMAP_STREETS_STYLE,
} from 'config';

export default function getBaseMapUrl(style) {
  if (style === 'light') {
    return BASEMAP_LIGHT_STYLE;
  } else if (style === 'dark') {
    return BASEMAP_DARK_STYLE;
  } else if (style === 'satelight') {
    return BASEMAP_SATELLITE_STYLE;
  } else if (style === 'street') {
    return BASEMAP_STREETS_STYLE;
  } else if (style === 'green') {
    return BASEMAP_GREEN_STYLE;
  }
}
