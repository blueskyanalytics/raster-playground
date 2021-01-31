import React from 'react';
import { Link } from 'react-router-dom';

const Call = () => {
  return (
    <section className="call">
      <div className="container">
        <h2 className="heading heading-med section-heading">
          <span className="heading-bold">Get</span>Started
        </h2>
        <p className="para-med section-intro">
          Excited about using RasterPlayground and visualise the world
          efficiently? <br /> Get started today by pressing the button below
        </p>
        <div className="content">
          <Link to="/main" className="btn btn-filled m-auto">
            See in action
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Call;
