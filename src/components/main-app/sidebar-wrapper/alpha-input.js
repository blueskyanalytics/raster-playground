import React, { useState } from 'react';
import { URL_OPACITY, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import { Collapse } from 'utils';

export default function AlphaInput() {
  const [opacity, onChangeOpacity] = useQueryParam(URL_OPACITY, StringParam);
  const [toggleCollapse, setToggleCollapse] = useState(true);

  return (
    <>
      <Collapse
        title="Alpha Value (0-1)"
        toggleCollapse={toggleCollapse}
        setToggleCollapse={setToggleCollapse}
      />
      {toggleCollapse ? (
        true
      ) : (
        <input
          type="number"
          value={opacity}
          className="input-text"
          placeholder="Alpha Input"
          onChange={e => onChangeOpacity(e.target.value, URL_UPDATE_PUSH)}
        />
      )}
    </>
  );
}
