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
import JSONPretty from 'react-json-pretty';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as JSONPrettyMon from 'react-json-pretty/dist/acai';

export default function Sidebar({ setTheme, theme }) {
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

  const handleColorFormatChange = event => {
    setColorFormat(event.target.value);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <h1 className="logo">
            Raster<span>Playground</span>
          </h1>
          <div className="theme-switch-wrapper theme-toggle">
            <label
              className="switch"
              htmlFor="checkbox"
              title="Change color scheme"
            >
              <input
                type="checkbox"
                id="checkbox"
                onChange={() =>
                  themeToggler(theme === 'light' ? 'dark' : 'light', setTheme)
                }
                checked={theme === 'light' ? '' : 'checked'}
              />
              <div className="slider round"></div>
              <div className="toggle-sun">☀️</div>
              <div className="toggle-moon">🌙</div>
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
          <CopyToClipboard text={text}>
            <button className="copy-btn">Copy</button>
          </CopyToClipboard>
          <a
            href={`data:text/json;charset=utf-8,${encodeURIComponent(text)}`}
            download={`${colorFormat}.json`}
            className="copy-btn"
            style={{
              textAlign: 'center',
              height: '1.15rem',
              fontSize: '0.85rem',
              marginRight: '0.5rem',
            }}
          >
            Export
          </a>
          <br />
          <JSONPretty
            id="json-pretty"
            data={text}
            theme={JSONPrettyMon}
          ></JSONPretty>
        </div>
      </div>
    </ThemeProvider>
  );
}
