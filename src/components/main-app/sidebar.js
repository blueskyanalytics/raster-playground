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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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

  //Changes needed for hiding sidebar-input
  const hideDiv=(e)=>{
    document.getElementsByClassName('sidebar-input')[0].style.display='none';
    document.getElementsByClassName('sidebar')[0].style.height='auto';
    document.getElementsByClassName('hide')[0].style.display='none';
    document.getElementsByClassName('show')[0].style.display='block';
  }

  //Changes needed for display sidebar-input
  const showDiv=(e)=>{
    document.getElementsByClassName('sidebar-input')[0].style.display='block';
    document.getElementsByClassName('sidebar')[0].style.height='100vh';
    document.getElementsByClassName('hide')[0].style.display='block';
    document.getElementsByClassName('show')[0].style.display='none';
  }

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

          {/* Icons to hide and show sidebar-input div */}
          <div className='hide-show'>
              <FontAwesomeIcon className='hide' onClick={hideDiv} icon={faMinus}/>
              <FontAwesomeIcon className='show' onClick={showDiv} icon={faPlus}/>
          </div>
          
          <hr />
          {/* Create a new div and add class sidebar-input */}
          <div className="sidebar-input">
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
            <br />
            <JSONPretty
              id="json-pretty"
              data={text}
              theme={JSONPrettyMon}
            ></JSONPretty>
          </div>
          
        </div>
      </div>
    </ThemeProvider>
  );
}
