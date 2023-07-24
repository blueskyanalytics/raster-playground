export {
  URL_UPDATE_REPLACE,
  URL_UPDATE_PUSH,
  URL_SHAPE,
  URL_TILES,
  URL_COLORS,
  URL_OPACITY,
} from './url';

export {
  SHAPE_URL_DEFAULT,
  TILES_URL_DEFAULT,
  COLORS_DEFAULT,
  OPACITY_DEFAULT,
  THEME_DEFAULT,
} from './default';

export {
  MAPBOX_STYLE_ACCESS_TOKEN,
  BASEMAP_LIGHT_STYLE,
  BASEMAP_DARK_STYLE,
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
