import React, { useState, Fragment } from 'react';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';
// TODO: remove array-move library
import { StringParam, useQueryParam } from 'use-query-params';
import { URL_COLORS, URL_UPDATE_PUSH } from 'config';
import { ReactComponent as CloseSVG } from 'assets/svg/close.svg';
import { getColorsArray, getColorsString } from 'utils';
import { ChromePicker } from 'react-color';

const popover = {
  position: 'absolute',
  zIndex: '3',
};

const cover = {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
};

const deleteColor = (key, colorsArray, onChangeColor) => {
  let tempColorsArray = colorsArray;
  if (key > -1) {
    tempColorsArray.splice(key, 1);
    onChangeColor(getColorsString(tempColorsArray), URL_UPDATE_PUSH);
  }
};

const SortableItem = SortableElement(({ children }) => children);
const SortableList = SortableContainer(({ children }) => children);

export default function ColorsInput() {
  const [colors, onChangeColor] = useQueryParam(URL_COLORS, StringParam);
  const [itemColorStatus, setItemColorStatus] = useState(null);
  const colorsArray = getColorsArray(colors);

  const changeItemColor = color => {
    setItemColorStatus({ color: color.hex, key: itemColorStatus.key });
    let tempColorsArray = colorsArray;
    tempColorsArray[itemColorStatus.key] = color.hex;
    onChangeColor(getColorsString(tempColorsArray), URL_UPDATE_PUSH);
  };

  const addColor = () => {
    setItemColorStatus({ color: '#006698', key: colorsArray.length });
    let tempColorsArray = colorsArray;
    tempColorsArray.push('#006698');
    onChangeColor(getColorsString(tempColorsArray), URL_UPDATE_PUSH);
  };

  const sortColor = ({ oldIndex, newIndex }) => {
    let tempColorsArray = arrayMove(colorsArray, oldIndex, newIndex);
    onChangeColor(getColorsString(tempColorsArray), URL_UPDATE_PUSH);
  };

  return (
    <>
      <div className="color-row">
        <p>Colors Palette</p>{' '}
        <a
          href="#add"
          onClick={() => addColor()}
          className="iconButton fa fa-lg fa-plus"
        >
          {' '}
        </a>
      </div>

      <SortableList axis="xy" distance={1} onSortEnd={sortColor}>
        <div className="color-input">
          {colorsArray.map((color, key) => (
            <SortableItem key={`color-${key}`} index={key}>
              <Fragment>
                <div
                  className="color-input-item draggable"
                  style={{
                    background: color,
                    borderColor:
                      itemColorStatus && itemColorStatus.key === key
                        ? 'black'
                        : 'white',
                  }}
                >
                  <div
                    className="color-input-item-close"
                    onClick={e => deleteColor(key, colorsArray, onChangeColor)}
                  >
                    <CloseSVG />
                  </div>
                  <div
                    className="color-input-item-overlay"
                    onClick={e => setItemColorStatus({ color, key })}
                  ></div>
                </div>
              </Fragment>
            </SortableItem>
          ))}
        </div>
      </SortableList>

      {itemColorStatus ? (
        <div style={popover}>
          <div
            style={cover}
            onClick={() => {
              setItemColorStatus(false);
            }}
          />
          <ChromePicker
            color={itemColorStatus.color}
            onChange={changeItemColor}
          />
        </div>
      ) : null}
    </>
  );
}
