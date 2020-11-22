import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray } from 'utils';
import {
  TilesInput,
  ShapeInput,
  ColorsInput,
  AlphaInput,
} from './sidebar-wrapper';

export default function Sidebar() {
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [text, setText] = useState('');

  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(copyColor(colorArray, opacity));
  }, [colors, opacity]);

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
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
        <div>{JSON.stringify(text)}</div>
      </div>
    </div>
  );
}
