import { getSource } from 'api/map-data';
import { BASEMAP_LIGHT_STYLE } from 'config';
import { BASEMAP_DARK_STYLE } from 'config';

export default function themeToggler(theme, setTheme) {
  theme === 'light' ? setTheme('light') : setTheme('dark');
  let source = getSource();

  if (theme === 'dark') source.setUrl(BASEMAP_DARK_STYLE);
  else if (theme === 'light') source.setUrl(BASEMAP_LIGHT_STYLE);

  source.refresh();
}
