import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState, useCallback } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray } from 'utils';
import {
  TilesInput,
  ShapeInput,
  ColorsInput,
  AlphaInput,
} from './sidebar-wrapper';
import {Collapse} from 'react-collapse';

export default function Sidebar() {
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [text, setText] = useState('');

  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(copyColor(colorArray, opacity));
  }, [colors, opacity]);

  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  );

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
        <br />
        <AlphaInput />
        <br />
        <br />
        <button
            className="fa fa-compress"
            onClick={onClick}
            type="button">
            
        </button>
        <Collapse isOpened={isButtonCollapseOpen}>
          <div>{JSON.stringify(text)}</div>
        </Collapse>
      </div>
    </div>
  );
}
