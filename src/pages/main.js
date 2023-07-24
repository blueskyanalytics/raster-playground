import React, { useEffect } from 'react';
import MainApp from 'components/main-app';
import {
  URL_SHAPE,
  URL_TILES,
  URL_COLORS,
  URL_OPACITY,
  COLORS_DEFAULT,
  URL_UPDATE_PUSH,
  OPACITY_DEFAULT,
  TILES_URL_DEFAULT,
  SHAPE_URL_DEFAULT,
} from 'config';
import { StringParam, useQueryParam } from 'use-query-params';
import { useCookie } from 'react-use';

export default function Main() {
  const [shape, onChangeShape] = useQueryParam(URL_SHAPE, StringParam);
  const [tiles, onChangeTiles] = useQueryParam(URL_TILES, StringParam);
  const [colors, onChangeColors] = useQueryParam(URL_COLORS, StringParam);
  const [opacity, onChangeOpacity] = useQueryParam(URL_OPACITY, StringParam);
  const [theme, setTheme] = useCookie('theme-color');

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

  return (
    <>
      <MainApp theme={theme} setTheme={setTheme} />
    </>
  );
}
