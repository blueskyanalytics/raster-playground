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
   let i=1;
  useEffect(() => {
    const colorArray = getColorsArray(colors);
    const sidebar=document.querySelector(".sidebar");
    const open=document.getElementById("open");
    const close=document.getElementById("close");
    open.addEventListener("click",()=>{
      if(sidebar.classList.contains("hide"))
      sidebar.classList.remove("hide");
    })
    close.addEventListener("click",()=>{
      sidebar.classList.add("hide");
    })
    sidebar.onmouseover=()=>{
      i=0;
    }
    const timer=setInterval(()=>{
      i++;
      if(i>10&&!sidebar.classList.contains("hide"))
      { 
        sidebar.classList.add("hide");
        i=0;
      }
    },1000);

    setText(
      JSON.stringify(copyColor(colorArray, opacity, colorFormat), undefined, 4)
    );
  }, [colors, opacity, colorFormat,i]);

  const handleColorFormatChange = event => {
    setColorFormat(event.target.value);
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div id="open"><i className="fa fa-cog"></i></div>
      <div className="sidebar">
      <div id="close"><i className="fa fa-times"></i></div>
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
