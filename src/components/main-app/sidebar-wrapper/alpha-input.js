import React from 'react';
import { URL_OPACITY, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function AlphaInput() {
  const [opacity, onChangeOpacity] = useQueryParam(URL_OPACITY, StringParam);

  return (
    <>
      <div className="color-row">
        <p>Alpha Value (0-1)</p>
        <a
          href="#add"
          // onClick={() => addColor()}
          className="iconButton fa fa-lg fa-info-circle"
        >
          {' '}
        </a>
      </div>
      <div className="input-container">
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="1"
            value={opacity}
            step="0.01"
            className="range-slider"
            onChange={e => onChangeOpacity(e.target.value, URL_UPDATE_PUSH)}
          />
        </div>
        <div>
          <input
            type="number"
            value={opacity}
            className="input-text-slider"
            placeholder="Alpha Input"
            min="0"
            max="1"
            step="0.01"
            onChange={e => onChangeOpacity(e.target.value, URL_UPDATE_PUSH)}
          />
        </div>
      </div>
    </>
  );
}
