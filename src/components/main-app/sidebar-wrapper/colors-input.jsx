import React, { useState, useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { ChromePicker } from 'react-color';

import { URL_COLORS, URL_UPDATE_PUSH } from 'config';
import { ReactComponent as CloseSVG } from 'assets/icons/close.svg';
import { ReactComponent as PlusSVG } from 'assets/icons/plus.svg';
import { getColorsArray, getColorsString } from 'utils';
import { GenericContainer } from "./";

const ColorPicker = ({ color, changeColor, close }) => {
  const [colorPicked, setColorPicked] = useState(color);

  useEffect(() => {
    setColorPicked(color);
  }, [color]);

  return (
    <section className="color-picker-overlay">
      <ChromePicker
        className="picker"
        color={colorPicked}
        onChange={color => setColorPicked(color.hex)}
        onChangeComplete={color => changeColor(color.hex)}
      />
      <div className="picker-close" onClick={close}>
        <CloseSVG />
      </div>
    </section>
  );
};

const ColorControl = ({ color, control, remove }) => {
  return (
    <div className="color-control-unit grid-item">
      <div
        className="color-input-item"
        style={{ background: color }}
        onClick={control}
      >
        {color}
      </div>
      <div className="color-control-remove" onClick={remove}> <CloseSVG /> </div>
    </div>
  );
};

const ColorsInput = () => {
  const [colors, onChangeColor] = useQueryParam(URL_COLORS, StringParam);
  const [colorsArray, setColorsArray] = useState(getColorsArray(colors));
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [changeColor, setChangeColor] = useState(() => {});

  useEffect(() => {
    const colorsString = getColorsString(colorsArray);
    onChangeColor(colorsString, URL_UPDATE_PUSH);
  }, [colorsArray, onChangeColor]);

  const addColor = color => setColorsArray([...colorsArray, color]);

  const deleteColor = index =>
    setColorsArray([
      ...colorsArray.slice(0, index),
      ...colorsArray.slice(index+1),
    ]);

  const changeItemColor = index => {
    return color => {
      setColorsArray([
        ...colorsArray.slice(0, index),
        color,
        ...colorsArray.slice(index + 1),
      ]);
    };
  };

  return (
    <GenericContainer id="colors-container" heading="Colors Input">
        <section className="colors-container-grid">
          {colorsArray && colorsArray.length
            ? colorsArray.map((color, index) => (
                <ColorControl
                  key={'cc-' + index}
                  color={color}
                  control={() => {
                    setChangeColor(() => changeItemColor(index));
                    setActiveIndex(index);
                    setShowColorPicker(true);
                  }}
                  remove={ () => deleteColor(index)}
                />
              ))
            : null}

          <div className="grid-item">
            <div
              className="add-new-color-button"
              onClick={() => {
                addColor('#ffff00');
                setChangeColor(() => changeItemColor(colorsArray.length));
                setShowColorPicker(true);
              }}
            >
              <PlusSVG />
            </div>
          </div>
        </section>

        {showColorPicker && (
          <ColorPicker
            color={colorsArray[activeIndex]}
            changeColor={changeColor}
            close = {() => setShowColorPicker(false)}
          />
        )}
    </GenericContainer>
  );
};

export default ColorsInput;
