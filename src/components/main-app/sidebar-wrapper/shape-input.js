import React from 'react';
import { URL_SHAPE, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function ShapeInput() {
  const [shape, onChangeShape] = useQueryParam(URL_SHAPE, StringParam);

  return (
    <div className="input-group">
      <div className="logo-background">
        <img
          className=""
          src={`${window.location.origin}/assets/svg/globe-asia.svg`}
          alt="globe-asia"
        />
      </div>
      <div className="sub-input-group">
        <p className="label">Shape Url - JSON</p>
        <input
          type="text"
          value={shape}
          className="input-text"
          placeholder="Shape URL"
          onChange={e => onChangeShape(e.target.value, URL_UPDATE_PUSH)}
        />
      </div>
    </div>
  );
}
