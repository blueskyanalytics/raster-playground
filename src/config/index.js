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

const GITHUB_REPO = 'blueskyanalytics/raster-playground';

export const FOOTER_ICON = [
  {
    label: 'fork',
    img: `https://img.shields.io/github/forks/${GITHUB_REPO}.svg?style=social&label=Contribute`,
    url: `https://github.com/${GITHUB_REPO}`,
  },
  {
    label: 'stars',
    img: `https://img.shields.io/github/stars/${GITHUB_REPO}.svg?style=for-the-badge`,
    url: `https://github.com/${GITHUB_REPO}/stargazers`,
  },
  {
    label: 'stars',
    img: `https://img.shields.io/github/issues/${GITHUB_REPO}.svg?style=for-the-badge&color=blue`,
    url: `https://github.com/${GITHUB_REPO}/issues`,
  },
  {
    label: 'js',
    img: `https://forthebadge.com/images/badges/made-with-javascript.svg`,
    url: `https://github.com/${GITHUB_REPO}`,
  },
];
