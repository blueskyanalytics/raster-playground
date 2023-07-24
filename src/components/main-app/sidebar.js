import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray } from 'utils';
import { TilesInput, ShapeInput, ColorsInput } from './sidebar-wrapper';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/global-styles';
import { lightTheme } from './themes/themes';
import '../../sass/index.sass';
import OutputBox from './sidebar-wrapper/output-box';

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
          <OutputBox
            text={text}
            handleColorFormatChange={handleColorFormatChange}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
