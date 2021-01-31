import React from 'react'
import Feature from "./feature"

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
            <Feature />
            <Feature />
            <Feature />
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
      </section>
    );
}
 
export default Features;