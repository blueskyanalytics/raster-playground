import React from 'react';

const Feature = ({ iconName, name, description }) => {
  return (
    <div className="feature">
      <div className="feature-icon-cont">
        <img src={require(`../../assets/svg/${iconName}`).default} alt={iconName} />
      </div>
      <h4 className="heading heading-sm heading-bold mb-sm">{name}</h4>
      <p className="para para-med">{description}</p>
    </div>
  );
};

export default Feature;
