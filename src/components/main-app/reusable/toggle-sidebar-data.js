import React from 'react';

export default function ToggleSidebarData({
  heading,
  showData,
  toggleData,
  extraData,
}) {
  return (
    <div className="color-row">
      <p>{heading}</p>
      {showData ? extraData : null}
      {showData ? (
        <a
          href="#hideData"
          className="fa fa-lg fa-arrow-up iconButton"
          onClick={toggleData}
        >
          {' '}
        </a>
      ) : (
        <a
          href="#showData"
          className="fa fa-lg fa-arrow-down iconButton"
          onClick={toggleData}
        >
          {' '}
        </a>
      )}
    </div>
  );
}
