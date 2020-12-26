import React, { useEffect } from 'react';
import MainApp from 'components/main-app';
import {
  URL_SHAPE,
  URL_TILES,
  URL_COLORS,
  URL_OPACITY,
  URL_COLOR_TYPE,
  COLORS_DEFAULT,
  URL_UPDATE_PUSH,
  OPACITY_DEFAULT,
  TILES_URL_DEFAULT,
  SHAPE_URL_DEFAULT,
  COLOR_TYPE_DEFAULT,
} from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function Main() {
  const [shape, onChangeShape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles, onChangeTiles] = useQueryParam(URL_TILES, StringParam);
  const [colors, onChangeColors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity, onChangeOpacity] = useQueryParam(URL_OPACITY, StringParam);
  const [colorType, setColorType] = useQueryParam(URL_COLOR_TYPE, StringParam);

  useEffect(() => {
    if (!shape) {
      onChangeShape(SHAPE_URL_DEFAULT, URL_UPDATE_PUSH);
    }
  }, [shape, onChangeShape]);

  useEffect(() => {
    if (!tiles) {
      onChangeTiles(TILES_URL_DEFAULT, URL_UPDATE_PUSH);
    }
  }, [tiles, onChangeTiles]);

  useEffect(() => {
    if (!colors) {
      onChangeColors(COLORS_DEFAULT, URL_UPDATE_PUSH);
    }
  }, [colors, onChangeColors]);

  useEffect(() => {
    if (!opacity) {
      onChangeOpacity(OPACITY_DEFAULT, URL_UPDATE_PUSH);
    }
  }, [opacity, onChangeOpacity]);

  useEffect(() => {
    if (!colorType) {
      setColorType(COLOR_TYPE_DEFAULT, URL_UPDATE_PUSH);
    }
  }, [colorType, setColorType]);

  return (
    <>
      <MainApp />
    </>
  );
}
