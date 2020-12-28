import React from 'react';
import { URL_SHAPE, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

import { GenericContainer, GenericCopyTextContainer} from "./";

export default function ShapeInput() {
  const [shape, onChangeShape] = useQueryParam(URL_SHAPE, StringParam);

  return (
    <GenericContainer id="shape-url-container" heading="Shape URL (Only TOPO JSON)">
      <GenericCopyTextContainer text={shape} setText={onChangeShape}>
      <input
        type="text"
        value={shape}
        className="input-text"
        placeholder="Shape URL"
        onChange={e => onChangeShape(e.target.value, URL_UPDATE_PUSH)}
      />
      </GenericCopyTextContainer>
    </GenericContainer>
  );
}
