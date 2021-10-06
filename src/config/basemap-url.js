//You need to refer to ".env.example" to generate envs for your development

export const MAPBOX_STYLE_ACCESS_TOKEN =
  process.env.REACT_APP_MAPBOX_STYLE_ACCESS_TOKEN;
export const BASEMAP_LIGHT_STYLE = `${process.env.REACT_APP_MAPBOX_LIGHT_STYLE}?access_token=${MAPBOX_STYLE_ACCESS_TOKEN}`;
export const BASEMAP_DARK_STYLE = `${process.env.REACT_APP_MAPBOX_DARK_STYLE}?access_token=${MAPBOX_STYLE_ACCESS_TOKEN}`;
export const BASEMAP_SATELLITE_STYLE = `${process.env.REACT_APP_MAPBOX_SATELLITE_STYLE}?access_token=${MAPBOX_STYLE_ACCESS_TOKEN}`; //NOT YET USED - Use it when you resolve issue no. -
export const BASEMAP_STREETS_STYLE = `${process.env.REACT_APP_MAPBOX_STREETS_STYLE}?access_token=${MAPBOX_STYLE_ACCESS_TOKEN}`; //NOT YET USED - Use it when you resolve issue no. -
export const BASEMAP_GREEN_STYLE = `${process.env.REACT_APP_MAPBOX_GREEN_STYLE}?access_token=${MAPBOX_STYLE_ACCESS_TOKEN}`; //NOT YET USED - Use it when you resolve issue no. -
