import React from 'react';

function ImgToggler(props) {
  const { imgalt, imgsrc, onChangeBaseLayer, url } = props;
  return (
    <>
      <span
        key={imgalt}
        className="toggle"
        onClick={e => onChangeBaseLayer(imgalt, url)}
      >
        <img className="imgstyle" src={imgsrc} alt={imgalt} />
        <p className="title">{imgalt}</p>
      </span>
    </>
  );
}

export default ImgToggler;
