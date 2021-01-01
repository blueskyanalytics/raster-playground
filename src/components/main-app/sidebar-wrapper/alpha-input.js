import React, {useState, useCallback} from 'react';
import { URL_OPACITY, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import {Collapse} from 'react-collapse';

export default function AlphaInput() {
  const [opacity, onChangeOpacity] = useQueryParam(URL_OPACITY, StringParam);

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
        Alpha Value (0-1)
      </p>
      <Collapse isOpened={isButtonCollapseOpen}>
        <input
          type="number"
          value={opacity}
          className="input-text"
          placeholder="Alpha Input"
          onChange={e => onChangeOpacity(e.target.value, URL_UPDATE_PUSH)}
        />
      </Collapse>
    </>
  );
}
