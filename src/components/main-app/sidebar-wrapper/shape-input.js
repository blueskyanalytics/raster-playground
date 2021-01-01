import React, {useState, useCallback} from 'react';
import { URL_SHAPE, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import {Collapse} from 'react-collapse';

export default function ShapeInput() {
  const [shape, onChangeShape] = useQueryParam(URL_SHAPE, StringParam);

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
        Shape URL (Only Topo JSON)
      </p>
      
      <Collapse isOpened={isButtonCollapseOpen}>
        <input
          type="text"
          value={shape}
          className="input-text"
          placeholder="Shape URL"
          onChange={e => onChangeShape(e.target.value, URL_UPDATE_PUSH)}
        />
      </Collapse>
    </>
  );
}
