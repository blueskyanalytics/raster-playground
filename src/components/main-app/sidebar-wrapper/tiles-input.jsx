import React from 'react';
import { URL_TILES, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

import GenericContainer, {
  GenericCopyTextContainer,
} from './generic-container';

export default function TilesInput() {
  const [tiles, onChangeTiles] = useQueryParam(URL_TILES, StringParam);

  return (
    <GenericContainer heading="Tiles URL (XYZ Format)" id="tiles-container">
      <GenericCopyTextContainer text={tiles} setText={onChangeTiles}>
        <input
          type="text"
          value={tiles}
          className="input-text"
          placeholder="Tiles URL"
          onChange={e => onChangeTiles(e.target.value, URL_UPDATE_PUSH)}
        />
      </GenericCopyTextContainer>
    </GenericContainer>
  );
}
