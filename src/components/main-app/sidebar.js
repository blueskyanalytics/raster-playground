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
import '../../sass/index.sass'

export default function Sidebar() {
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [text, setText] = useState('');
  const [colorFormat, setColorFormat] = useState('rgba')
  const colorText = useRef(null)
  
  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(copyColor(colorArray, opacity, colorFormat));
  }, [colors, opacity, colorFormat]);

  const handleColorFormatChange = event => {
    setColorFormat(event.target.value)
  }

  const copyColorFormat = () => {
    const colorValues = colorText.current
    colorValues.select()
    document.execCommand('copy')
  }

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <h1 className="logo">
          Raster<span>Playground</span>
        </h1>
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
        <select id="color-format" defaultValue='rgba' onChange={event => handleColorFormatChange(event)}>
          <option value='hex'>HEX</option>
          <option value='rgba'>RGBA</option>
          <option value='hsla'>HSLA</option>
        </select>
        <button className="copy-btn"onClick={copyColorFormat}>Copy</button>
        <br />
        <textarea id="text-box" value={JSON.stringify(text)} ref={colorText}></textarea>
      </div>
    </div>
  );
}
