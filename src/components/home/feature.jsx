import React from 'react';

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-icon-cont">
        <img src={require('../../assets/svg/cpu.svg').default} alt="" />
      </div>
      <h4 className="heading heading-sm heading-bold mb-sm">Feature Name</h4>
      <p className="para para-med">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
        reprehenderit numquam
      </p>
    </div>
  );
};

export default Feature;
