import React from 'react';

const Member = ({ name, role }) => {
  return (
    <div className="member">
      <div className="img-cont">
        <img src="https://i.redd.it/6onq25y0sh311.jpg" alt="" />
      </div>
      <h4 className="member-name">{name}</h4>
      <h6 className="member-prof">{role}</h6>
    </div>
  );
};

export default Member;
