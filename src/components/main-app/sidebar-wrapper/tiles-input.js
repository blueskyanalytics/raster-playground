import React from 'react';
import { URL_TILES, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function TilesInput() {
  const [tiles, onChangeTiles] = useQueryParam(URL_TILES, StringParam);

  return (
    <>
      <p>Tiles URL (Topo JSON)</p>
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
