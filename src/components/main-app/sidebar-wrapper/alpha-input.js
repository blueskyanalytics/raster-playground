import React, { useState } from 'react';
import { URL_OPACITY, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import { ToggleSidebarData } from '../reusable';

export default function AlphaInput() {
  const [opacity, onChangeOpacity] = useQueryParam(URL_OPACITY, StringParam);
  const [showData, onShowData] = useState(false);

  const toggleData = () => {
    onShowData(!showData);
  };

  return (
    <>
      <ToggleSidebarData
        heading="Alpha Value (0-1)"
        showData={showData}
        toggleData={toggleData}
      />
      {showData ? (
        <input
          type="number"
          value={opacity}
          className="input-text"
          placeholder="Alpha Input"
          onChange={e => onChangeOpacity(e.target.value, URL_UPDATE_PUSH)}
        />
      ) : null}
    </>
  );
}
