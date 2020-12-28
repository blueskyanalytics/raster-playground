import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray } from 'utils';
import JSONPretty from 'react-json-pretty';
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

  const data = JSON.stringify(text);

  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(copyColor(colorArray, opacity));
  }, [colors, opacity]);

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
        <div>
          <JSONPretty themeClassName="custom-json-pretty"  id="json-pretty" data={data}></JSONPretty>
          <div style={{marginTop: '10px' }}>
            <button
              onClick={() => {
                navigator.clipboard.writeText(data);
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
