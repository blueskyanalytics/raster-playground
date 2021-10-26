import React from 'react';

const Member = ({ name, role, picName }) => {
  return (
    <div className="member">
      <div className="img-cont">
        <img src={require(`../../assets/jpg/${picName}`).default} alt={picName} />
      </div>
      <h4 className="member-name">{name}</h4>
      <h6 className="member-prof">{role}</h6>
    </div>
  );
};

export default Member;
