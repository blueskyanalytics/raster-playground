import React from 'react';
import { URL_BASE_LAYER, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function BaseMapLayer() {
  const [baseLayer, onChangeBaseLayer] = useQueryParam(
    URL_BASE_LAYER,
    StringParam
  );

  return (
    <>
      <div className="group-button">
        <div
          onClick={e => onChangeBaseLayer('basic', URL_UPDATE_PUSH)}
          className={`pointer iconButton border-radius-top-right-0 border-radius-bottom-right-0 ${
            baseLayer === 'basic' ? 'selected-iconButton' : ''
          }`}
        >
          Basic
        </div>
        <div
          onClick={e => onChangeBaseLayer('satellite', URL_UPDATE_PUSH)}
          className={`pointer iconButton border-radius-0 ${
            baseLayer === 'satellite' ? 'selected-iconButton' : ''
          }`}
        >
          Satellite
        </div>
        <div
          onClick={e => onChangeBaseLayer('mapbox', URL_UPDATE_PUSH)}
          className={`pointer iconButton border-radius-top-left-0 border-radius-bottom-left-0 ${
            baseLayer === 'mapbox' ? 'selected-iconButton' : ''
          }`}
        >
          Mapbox
        </div>
      </div>
    </>
  );
}
