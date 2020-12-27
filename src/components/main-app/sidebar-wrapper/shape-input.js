import React, { useState } from 'react';
import { URL_SHAPE, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import { ToggleSidebarData } from '../reusable';

export default function ShapeInput() {
  const [shape, onChangeShape] = useQueryParam(URL_SHAPE, StringParam);
  const [showData, onShowData] = useState(false);

  const toggleData = () => {
    onShowData(!showData);
  };

  return (
    <>
      <ToggleSidebarData
        heading="Shape URL (Only Topo JSON)"
        showData={showData}
        toggleData={toggleData}
      />
      {showData ? (
        <input
          type="text"
          value={shape}
          className="input-text"
          placeholder="Shape URL"
          onChange={e => onChangeShape(e.target.value, URL_UPDATE_PUSH)}
        />
      ) : null}
    </>
  );
}
