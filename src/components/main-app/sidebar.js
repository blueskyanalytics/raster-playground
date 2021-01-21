import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray, themeToggler } from 'utils';
import {
  TilesInput,
  ShapeInput,
  ColorsInput,
  ColorsOutput,
  AlphaInput,
} from './sidebar-wrapper';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/global-styles';
import { lightTheme, darkTheme } from './themes/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({ setShowSidebar, setTheme, theme }) {
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [text, setText] = useState('');
  const [colorFormat, setColorFormat] = useState('rgba');

  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(
      JSON.stringify(copyColor(colorArray, opacity, colorFormat), undefined, 4)
    );
  }, [colors, opacity, colorFormat]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <button
            className="minimize-btn"
            onClick={() => setShowSidebar(false)}
          >
            <FontAwesomeIcon size="xs" icon={faWindowMinimize} />
          </button>
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
          <br />
          <AlphaInput />
          <br />
          <br />
          <ColorsOutput text={text} setColorFormat={setColorFormat} />
        </div>
      </div>
    </ThemeProvider>
  );
}
