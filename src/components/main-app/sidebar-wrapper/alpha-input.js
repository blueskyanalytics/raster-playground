import React, { useEffect } from 'react';
import { URL_OPACITY, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function AlphaInput() {
  const [opacity, onChangeOpacity] = useQueryParam(URL_OPACITY, StringParam);

  useEffect(() => {
    const bubbleElement = document.querySelector('.bubble-container');
    const sliderElement = document.querySelector('.slider-container');
    const sliderLengthPixel = sliderElement.offsetWidth;
    bubbleElement.style.left = `${Number(
      opacity / (1 / (sliderLengthPixel - 20))
    )}px`;
  });

  return (
    <>
      <p>Alpha Value (0-1)</p>
      <div className="input-container">
        <div className="slider-container">
          <div className="bubble-container">{opacity}</div>
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
        <div className="number-container">
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
