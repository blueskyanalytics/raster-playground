import React from 'react';
import { URL_SHAPE, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import Tooltips from 'components/tool-tip/toolTip';
export default function ShapeInput() {
  const [shape, onChangeShape] = useQueryParam(URL_SHAPE, StringParam);

  return (
    <>
      <div className="color-row">
        <p>Shape URL (Only Topo JSON)</p>
        <Tooltips tipinfo={'shape-url-info'} />
      </div>
      <input
        type="text"
        value={shape}
        className="input-text"
        placeholder="Shape URL"
        onChange={e => onChangeShape(e.target.value, URL_UPDATE_PUSH)}
      />
    </>
  );
}
