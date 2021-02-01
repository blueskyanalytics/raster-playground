import React from 'react';
import Feature from './feature';

const features = [
  {
    iconName: 'cpu.svg',
    name: 'Feature 1',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
    reprehenderit numquam`,
  },
  {
    iconName: 'cpu.svg',
    name: 'Feature 2',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
    reprehenderit numquam`,
  },
  {
    iconName: 'cpu.svg',
    name: 'Feature 3',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
    reprehenderit numquam`,
  },
  {
    iconName: 'cpu.svg',
    name: 'Feature 4',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
    reprehenderit numquam`,
  },
  {
    iconName: 'cpu.svg',
    name: 'Feature 5',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
    reprehenderit numquam`,
  },
  {
    iconName: 'cpu.svg',
    name: 'Feature 6',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
    reprehenderit numquam`,
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="heading heading-med section-heading">
          <span className="heading-bold">Awesome</span>Features
        </h2>
        <p className="para-med section-intro">
          RasterPlayground is packed with bunch of amazing features <br /> to
          help you visualise the world in a better way
        </p>
        <div className="features-cont">
          {features.map((feature, idx) => (
            <Feature
              key={idx}
              name={feature.name}
              description={feature.description}
              iconName={feature.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
