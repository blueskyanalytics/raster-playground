import React from 'react';
import { URL_OPACITY, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function AlphaInput() {
  const [opacity, onChangeOpacity] = useQueryParam(URL_OPACITY, StringParam);

  return (
    <>
      <p>Alpha Value (0-1)</p>
      <input
        type="number"
        value={opacity}
        className="input-text"
        placeholder="Alpha Input"
        min="0" max="1" step="0.01"
        onChange={e => onChangeOpacity(e.target.value, URL_UPDATE_PUSH)}
      />
    </>
  );
}
