import React from 'react';
import PropTypes from 'prop-types';

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
  color: PropTypes.object.isRequired,
};

export default RgbaListItem;
