import React, { useState } from 'react';
import { URL_TILES, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import { Collapse } from 'utils';

export default function TilesInput() {
  const [tiles, onChangeTiles] = useQueryParam(URL_TILES, StringParam);
  const [toggleCollapse, setToggleCollapse] = useState(true);

  return (
    <>
      <Collapse
        title="Tiles URL (XYZ Format)"
        toggleCollapse={toggleCollapse}
        setToggleCollapse={setToggleCollapse}
      />
      {toggleCollapse ? (
        true
      ) : (
        <input
          type="text"
          value={tiles}
          className="input-text"
          placeholder="Tiles URL"
          onChange={e => onChangeTiles(e.target.value, URL_UPDATE_PUSH)}
        />
      )}
    </>
  );
}
