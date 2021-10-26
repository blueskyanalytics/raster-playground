import React from 'react';
import Member from './member';

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="heading heading-med section-heading">
          <span className="heading-bold">Great</span>Team
        </h2>
        <p className="para-med section-intro text-bl">
          Meet the team of creative individuals of BlueSkyAnalytics <br />
          that made this product happen for you
        </p>
        <div className="team-members">
          <Member name="Srijit" role="Developer" picName={'person.jpg'} />
          <Member name="Hanumanth" role="Developer" picName={'person.jpg'} />
          <Member name="Kshitij" role="Developer" picName={'person.jpg'} />
          <Member name="Harsha" role="Developer" picName={'person.jpg'} />
        </div>
      </div>
    </section>
  );
};

export default Team;
