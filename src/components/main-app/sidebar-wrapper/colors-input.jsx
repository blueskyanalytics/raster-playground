import React, { useState, useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { ChromePicker } from 'react-color';

import { URL_COLORS, URL_UPDATE_PUSH } from 'config';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { getColorsArray, getColorsString } from 'utils';
import { GenericContainer } from './';
import { COLORS_DEFAULT } from 'config';

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
        <CloseIcon />
      </div>
    </section>
  );
};

const ColorControl = ({ color, control, remove, ...args }) => {
  return (
    <div className="color-control-unit grid-item">
      <div
        className="color-input-item"
        dragagble="true"
        style={{ background: color }}
        onClick={control}
        {...args}
      >
        {color}
      </div>
      <div className="color-control-remove" onClick={remove}>
        <CloseIcon />
      </div>
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
    if (!colorsArray.length) {
      const colors = getColorsArray(COLORS_DEFAULT);
      setColorsArray(colors);
    }

    const colorsString = getColorsString(colorsArray);
    onChangeColor(colorsString, URL_UPDATE_PUSH);
  }, [colorsArray, onChangeColor]);

  const addColor = color => setColorsArray([...colorsArray, color]);

  const deleteColor = index =>
    setColorsArray([
      ...colorsArray.slice(0, index),
      ...colorsArray.slice(index + 1),
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

  const rearrangeColors = (dragIndex, dropIndex) => {
    // Creates a mutable copy
    let colors = colorsArray.slice(0);
    const dragged = colors[dragIndex];
    const removeFrom = index => {
      return [...colors.slice(0, index), ...colors.slice(index + 1)];
    };

    if (Math.abs(dragIndex - dropIndex) === 1) {
      const temp = colorsArray[dragIndex];
      colors[dragIndex] = colors[dropIndex];
      colors[dropIndex] = temp;
    } else if (dropIndex === 0) {
      colors = removeFrom(dragIndex);
      colors.unshift(dragged);
    } else if (dropIndex === colors.length - 1) {
      colors = removeFrom(dragIndex);
      colors.push(dragged);
    } else {
      const arrayWithoutDraggedElement = removeFrom(dragIndex);

      colors = [
        ...arrayWithoutDraggedElement.slice(0, dropIndex),
        dragged,
        ...arrayWithoutDraggedElement.slice(dropIndex),
      ];
    }

    return colors;
  };

  const dragStart = e => {
    e.dataTransfer.setData('text/plain', e.currentTarget.id);
  };

  const dragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const drop = e => {
    e.preventDefault();

    const dragId = e.dataTransfer.getData('text/plain');

    const draggedEle = document.getElementById(dragId);
    const dropEle = e.currentTarget;

    const dragIndex = parseInt(draggedEle.dataset.index);
    const dropIndex = parseInt(dropEle.dataset.index);

    const rearranged = rearrangeColors(dragIndex, dropIndex);
    setColorsArray(rearranged);
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
                remove={() => deleteColor(index)}
                id={'cc-' + index}
                draggable={true}
                data-index={index}
                onDragStart={dragStart}
                onDragOver={dragOver}
                onDrop={drop}
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
            <PlusIcon />
          </div>
        </div>
      </section>

      {showColorPicker && (
        <ColorPicker
          color={colorsArray[activeIndex]}
          changeColor={changeColor}
          close={() => setShowColorPicker(false)}
        />
      )}
    </GenericContainer>
  );
};

export default ColorsInput;
