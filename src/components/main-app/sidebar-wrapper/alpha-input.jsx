import React from 'react';
import { URL_OPACITY, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function AlphaInput() {
  const [opacity, onChangeOpacity] = useQueryParam(URL_OPACITY, StringParam);

  return (
    <div id="alpha-input" className="sidebar-section-container">
      <header>Alpha Value (0-1)</header>
      <input
        type="number"
        value={opacity}
        className="input-text"
        placeholder="Alpha Input"
        step="0.01"
        min="0"
        max="1"
        onChange={e => onChangeOpacity(e.target.value, URL_UPDATE_PUSH)}
      />
    </div>
  );
}
