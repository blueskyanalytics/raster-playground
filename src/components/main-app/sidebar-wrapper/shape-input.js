import React, { useState } from 'react';
import { URL_SHAPE, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import { Collapse } from 'utils';

export default function ShapeInput() {
  const [shape, onChangeShape] = useQueryParam(URL_SHAPE, StringParam);
  const [toggleCollapse, setToggleCollapse] = useState(true);

  return (
    <>
      <Collapse
        title="Shape URL (Only Topo JSON)"
        toggleCollapse={toggleCollapse}
        setToggleCollapse={setToggleCollapse}
      />
      {toggleCollapse ? (
        true
      ) : (
        <input
          type="text"
          value={shape}
          className="input-text"
          placeholder="Shape URL"
          onChange={e => onChangeShape(e.target.value, URL_UPDATE_PUSH)}
        />
      )}
    </>
  );
}
