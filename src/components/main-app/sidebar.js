import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState, useRef } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray } from 'utils';
import {
  TilesInput,
  ShapeInput,
  ColorsInput,
  AlphaInput,
} from './sidebar-wrapper';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/global-styles';
import { lightTheme, darkTheme } from './themes/themes';
import { getSource } from '../../api/map-data';
import '../../sass/index.sass';

export default function Sidebar() {
  const darkModeUrl =
    'https://api.mapbox.com/styles/v1/srijitcoder/cke5v5nbb1uov19lj4n25qojl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0Y29kZXIiLCJhIjoiY2s3MzhnZGZyMDlrbDNvbW5mcXpwZnoxMyJ9.ILgPQHEJq6lFRt2fN0j2sQ';
  const lightModeUrl =
    'https://api.mapbox.com/styles/v1/srijitcoder/ckhnsil6g15ud19qqo9leet6e/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0Y29kZXIiLCJhIjoiY2s3MzhnZGZyMDlrbDNvbW5mcXpwZnoxMyJ9.ILgPQHEJq6lFRt2fN0j2sQ';
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    let source = getSource();
    if (theme === 'dark') {
      source.setUrl(lightModeUrl);
      source.refresh();
    } else if (theme === 'light') {
      source.setUrl(darkModeUrl);
      source.refresh();
    }
  };

  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [text, setText] = useState('');
  const [colorFormat, setColorFormat] = useState('rgba');
  const colorText = useRef(null);

  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(copyColor(colorArray, opacity, colorFormat));
  }, [colors, opacity, colorFormat]);

  const handleColorFormatChange = event => {
    setColorFormat(event.target.value);
  };

  const copyColorFormat = () => {
    const colorValues = colorText.current;
    colorValues.select();
    document.execCommand('copy');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <h1 className="logo">
            Raster<span>Playground</span>
          </h1>
          <div class="theme-switch-wrapper">
            <label class="theme-switch" for="checkbox">
              <input type="checkbox" onChange={themeToggler} id="checkbox" />
              <div class="slider round"></div>
            </label>
          </div>
          <hr />
          <ShapeInput />
          <br />
          <br />
          <TilesInput />
          <br />
          <br />
          <ColorsInput />
          <br />
          <AlphaInput />
          <br />
          <br />
          <select
            id="color-format"
            defaultValue="rgba"
            onChange={event => handleColorFormatChange(event)}
          >
            <option value="hex">HEX</option>
            <option value="rgba">RGBA</option>
            <option value="hsla">HSLA</option>
          </select>
          <button className="copy-btn" onClick={copyColorFormat}>
            Copy
          </button>
          <br />
          <textarea
            readOnly
            id="text-box"
            value={JSON.stringify(text)}
            ref={colorText}
          ></textarea>
        </div>
      </div>
    </ThemeProvider>
  );
}
