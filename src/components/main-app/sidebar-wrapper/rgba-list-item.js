import React from 'react';
import PropTypes from 'prop-types';
import { colorValidator } from 'utils';

function RgbaListItem({ color }) {
  const renderColor = () => {
    const colorJsx = Object.keys(color).map(colorKey => (
      <li className="sidebar-rgba-colorlist-item">
        <p>
          <strong>{colorKey.toUpperCase()}:</strong> {color[colorKey]}
        </p>
      </li>
    ));
    return colorJsx;
  };

  return <ul class="sidebar-rgba-colorlist">{renderColor()}</ul>;
}

RgbaListItem.propTypes = {
  color: PropTypes.shape({
    r: colorValidator.validateRgb,
    g: colorValidator.validateRgb,
    b: colorValidator.validateRgb,
    a: colorValidator.validateAlpha,
  }).isRequired,
};

RgbaListItem.defaultProps = {
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 0,
  },
};

export default RgbaListItem;
