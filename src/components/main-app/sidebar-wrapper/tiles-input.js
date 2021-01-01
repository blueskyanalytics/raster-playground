import React, {useState, useCallback} from 'react';
import { URL_TILES, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import {Collapse} from 'react-collapse';

export default function TilesInput() {
  const [tiles, onChangeTiles] = useQueryParam(URL_TILES, StringParam);

  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  );

  return (
    <>
      <p>
        <span>
          <button
            className="fa fa-compress"
            onClick={onClick}
            type="button">
          </button>
        </span>
        Tiles URL (XYZ Format)
      </p>
      <Collapse isOpened={isButtonCollapseOpen}>
        <input
          type="text"
          value={tiles}
          className="input-text"
          placeholder="Tiles URL"
          onChange={e => onChangeTiles(e.target.value, URL_UPDATE_PUSH)}
        />
      </Collapse>
    </>
  );
}
