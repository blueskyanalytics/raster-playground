import { URL_COLORS, URL_OPACITY, URL_COLOR_TYPE } from 'config';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray } from 'utils';
import {
  TilesInput,
  ShapeInput,
  ColorsInput,
  AlphaInput,
  ColorDetails,
} from './sidebar-wrapper';

export default function Sidebar() {
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [colorType] = useQueryParam(URL_COLOR_TYPE, StringParam);
  const [text, setText] = useState('');

  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(copyColor(colorArray, opacity, colorType));
  }, [colors, opacity, colorType]);

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
        <ColorDetails text={text} />
      </div>
    </div>
  );
}
