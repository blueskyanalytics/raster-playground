import React from 'react';
import { URL_TILES, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function TilesInput() {
  const [tiles, onChangeTiles] = useQueryParam(URL_TILES, StringParam);

  return (
    <>
      <div className="color-row">
        <p>Tiles URL (XYZ Format)</p>
        <a
          href="#add"
          // onClick={() => addColor()}
          className="iconButton fa fa-lg fa-info-circle"
        >
          {' '}
        </a>
      </div>
      <input
        type="text"
        value={tiles}
        className="input-text"
        placeholder="Tiles URL"
        onChange={e => onChangeTiles(e.target.value, URL_UPDATE_PUSH)}
      />
    </>
  );
}
