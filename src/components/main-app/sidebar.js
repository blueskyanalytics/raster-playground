import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray } from 'utils';
import { TilesInput, ShapeInput, ColorsInput } from './sidebar-wrapper';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/global-styles';
import { lightTheme } from './themes/themes';
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
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar-urls">
            <ShapeInput />
            <TilesInput />
          </div>
          <ColorsInput />
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
