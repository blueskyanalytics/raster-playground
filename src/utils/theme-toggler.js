import { getSource } from 'api/map-data';

const darkModeUrl =
  'https://api.mapbox.com/styles/v1/srijitcoder/cke5v5nbb1uov19lj4n25qojl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0Y29kZXIiLCJhIjoiY2s3MzhnZGZyMDlrbDNvbW5mcXpwZnoxMyJ9.ILgPQHEJq6lFRt2fN0j2sQ';
const lightModeUrl =
  'https://api.mapbox.com/styles/v1/srijitcoder/ckhnsil6g15ud19qqo9leet6e/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0Y29kZXIiLCJhIjoiY2s3MzhnZGZyMDlrbDNvbW5mcXpwZnoxMyJ9.ILgPQHEJq6lFRt2fN0j2sQ';

export default function themeToggler(theme, setTheme) {
  theme === 'light' ? setTheme('light') : setTheme('dark');
  let source = getSource();

  if (theme === 'dark') source.setUrl(darkModeUrl);
  else if (theme === 'light') source.setUrl(lightModeUrl);

  source.refresh();
}
