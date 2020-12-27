import React, { useState } from 'react';
import { URL_TILES, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import { ToggleSidebarData } from '../reusable';

export default function TilesInput() {
  const [tiles, onChangeTiles] = useQueryParam(URL_TILES, StringParam);
  const [showData, onShowData] = useState(false);

  const toggleData = () => {
    onShowData(!showData);
  };

  return (
    <>
      <ToggleSidebarData
        heading="Tiles URL (XYZ Format)"
        showData={showData}
        toggleData={toggleData}
      />
      {showData ? (
        <input
          type="text"
          value={tiles}
          className="input-text"
          placeholder="Tiles URL"
          onChange={e => onChangeTiles(e.target.value, URL_UPDATE_PUSH)}
        />
      ) : null}
    </>
  );
}
