import { URL_COLORS, URL_OPACITY } from 'config';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { copyColor, getColorsArray } from 'utils';
import { ReactComponent as MenuIconSVG } from 'assets/svg/menu-icon.svg';
import appConstants from 'constants/app-constants';
import {
  TilesInput,
  ShapeInput,
  ColorsInput,
  AlphaInput,
  ColorDetails,
} from './sidebar-wrapper';

export default function Sidebar() {
  const [colors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity] = useQueryParam(URL_OPACITY, StringParam);
  const [text, setText] = useState('');
  const [showSidebarMobile, setShowSidebarMobile] = useState(false);

  const tabs = (
    <div>
      <ShapeInput />
      <br />
      <br />
      <TilesInput />
      <br />
      <br />
      <ColorsInput />
      <br />
      <br />
      <AlphaInput />
      <br />
      <br />
      <ColorDetails text={text} />
    </div>
  );

  useEffect(() => {
    const colorArray = getColorsArray(colors);
    setText(copyColor(colorArray, opacity));
  }, [colors, opacity]);

  return (
    <div>
      {window.innerWidth > appConstants.SCREEN_WIDTH_LIMIT ? (
        <div className="sidebar">
          <div className="sidebar-wrapper">
            <h1 className="logo">
              Raster<span>Playground</span>
            </h1>
            <hr />
            {tabs}
          </div>
        </div>
      ) : (
        <div className="sidebar">
          <div className="sidebar-wrapper">
            <div
              className="expand-sidebar-button"
              onClick={() => {
                setShowSidebarMobile(!showSidebarMobile);
              }}
            >
              <MenuIconSVG />
            </div>
            <h1 className="logo">
              Raster<span>Playground</span>
            </h1>
            <div className="sidebar-mobile">
              {showSidebarMobile ? tabs : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
