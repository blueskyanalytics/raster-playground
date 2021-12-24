import React from 'react';

import Particles from 'react-particles-js';

export default function Main() {
  return (
    <>
      <section id="home" className="title-wrapper">
        <Particles
          params={{
            particles: {
              line_linked: {
                enable_auto: true,
                distance: 100,
                color: '#EC297B',
                opacity: 1,
                width: 2,
                condensed_mode: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
          }}
          style={{
            width: '100%',
            maxHeight: '80%',
            position: 'absolute',
            zIndex: '2',
          }}
        />
        <div className="title">
          <h1>Blue Sky's</h1>
          <h2>Raster Playground.</h2>
        </div>
      </section>
    </>
  );
}
