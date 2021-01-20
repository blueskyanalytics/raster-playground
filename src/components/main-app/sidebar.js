import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray, themeToggler } from 'utils';
import {
  TilesInput,
  ShapeInput,
  ColorsInput,
  AlphaInput,
} from './sidebar-wrapper';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/global-styles';
import { lightTheme, darkTheme } from './themes/themes';
import '../../sass/index.sass';

export default function Sidebar({ setTheme, theme }) {
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [text, setText] = useState('');

  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(copyColor(colorArray, opacity));
  }, [colors, opacity]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <h1 className="logo">
            Raster<span>Playground</span>
          </h1>
          <div class="theme-switch-wrapper theme-toggle">
            <label class="switch" for="checkbox" title="Change color scheme">
              <input
                type="checkbox"
                id="checkbox"
                onChange={() =>
                  themeToggler(theme === 'light' ? 'dark' : 'light', setTheme)
                }
                checked={theme === 'light' ? '' : 'checked'}
              />
              <div class="slider round"></div>
              <div class="toggle-sun">☀️</div>
              <div class="toggle-moon">🌙</div>
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
          <div>{JSON.stringify(text)}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
