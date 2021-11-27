export {
  URL_UPDATE_REPLACE,
  URL_UPDATE_PUSH,
  URL_SHAPE,
  URL_TILES,
  URL_COLORS,
  URL_OPACITY,
  URL_BASE_LAYER,
} from './url';

export {
  SHAPE_URL_DEFAULT,
  TILES_URL_DEFAULT,
  COLORS_DEFAULT,
  OPACITY_DEFAULT,
  THEME_DEFAULT,
  BASE_LAYER_DEFAULT,
} from './default';

export {
  MAPBOX_STYLE_ACCESS_TOKEN,
  BASEMAP_LIGHT_STYLE,
  BASEMAP_DARK_STYLE,
  BASEMAP_SATELLITE_STYLE,
  BASEMAP_STREETS_STYLE,
  BASEMAP_GREEN_STYLE,
} from './basemap-url';

const GITHUB_REPO = 'blueskyanalytics/raster-playground';

export const FOOTER_ICON = [
  {
    label: 'fork',
    img: `https://img.shields.io/github/forks/${GITHUB_REPO}.svg?style=social&label=Contribute`,
    url: `https://github.com/${GITHUB_REPO}`,
  },
  {
    label: 'issues',
    img: `https://img.shields.io/github/hacktoberfest/2021/blueskyanalytics/raster-playground?label=hacktoberfest%2021&color=blue`,
    url: `https://github.com/${GITHUB_REPO}/issues`,
  },
  {
    label: 'stars',
    img: `https://img.shields.io/github/stars/${GITHUB_REPO}.svg?style=for-the-badge`,
    url: `https://github.com/${GITHUB_REPO}/stargazers`,
  },
  {
    label: 'js',
    img: `https://forthebadge.com/images/badges/made-with-javascript.svg`,
    url: `https://github.com/${GITHUB_REPO}`,
  },
];


export const TOGGLE_ITEM = [
  {
    imgsrc:
      'https://snazzy-maps-cdn.azureedge.net/assets/8097-wy.png?v=20170626083314',
    imgclassName: 'imgstyle',
    imgalt: 'light',
    titleclassName: 'title',
    spanclassName: 'toggle',
  },
  {
    imgsrc:
      'https://image.shutterstock.com/image-vector/earths-city-lights-political-map-260nw-434522143.jpg',
    imgclassName: 'imgstyle',
    imgalt: 'dark',
    titleclassName: 'title',
    spanclassName: 'toggle',
  },
  {
    imgsrc:
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/google-earth-satellite-image_1.jpg',
    imgclassName: 'imgstyle',
    imgalt: 'satelight',
    titleclassName: 'title',
    spanclassName: 'toggle',
  },
  {
    imgsrc:
      'https://image.shutterstock.com/image-vector/berlin-colored-vector-map-260nw-501568915.jpg',
    imgclassName: 'imgstyle',
    imgalt: 'street',
    titleclassName: 'title',
    spanclassName: 'toggle',
  },
  {
    imgsrc:
      'https://static4.depositphotos.com/1011006/278/v/950/depositphotos_2785850-stock-illustration-dark-green-detailed-world-map.jpg',
    imgclassName: 'imgstyle',
    imgalt: 'green',
    titleclassName: 'title',
    spanclassName: 'toggle',
  },
];

