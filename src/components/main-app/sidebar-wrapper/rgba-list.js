import React from 'react';
import PropTypes from 'prop-types';
import RgbaListItem from './rgba-list-item';

function RgbaList({ colors }) {
  const renderColors = colorsList => {
    const colorsJsx = colorsList.map(color => <RgbaListItem color={color} />);
    return colorsJsx;
  };

  return (
    <React.Fragment>
      <p className="sidebar-rgba-title">RGBA Colors</p>
      {renderColors(colors)}
    </React.Fragment>
  );
}

RgbaList.propTypes = {
  colors: PropTypes.array.isRequired,
};

RgbaList.defaultProps = {
  colors: [],
};

export default RgbaList;
