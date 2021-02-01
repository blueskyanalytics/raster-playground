import React from 'react';

const socials = [
  {
    url: 'https://github.com',
    iconName: 'github-ico.png',
  },
  {
    url: 'https://linkedin.com',
    iconName: 'linkedin-ico.png',
  },
  {
    url: 'https://twitter.com',
    iconName: 'twitter-ico.png',
  },
  {
    url: 'https://instagram.com',
    iconName: 'insta-ico.png',
  },
  {
    url: 'https://youtube.com',
    iconName: 'yt-ico.png',
  },
];

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="upper">
          <div className="row row-1">
            <h2 className="heading heading-sm text-lt">
              <span className="heading-bold">Find</span>Us
            </h2>
            <div className="social-cont">
              {socials.map((item, idx) => (
                <a key={idx} target="_blank" rel="noreferrer" href={item.url}>
                  <img
                    className="icon"
                    src={require(`../../assets/png/${item.iconName}`).default}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="row row-2">
            <h4 className="heading heading-sm text-lt">
              <span className="heading-bold">Raster</span>Playground
            </h4>
            <p className="para para-sm short-desc">
              Raster Playground is a color playground to visualise the world in
              a better way made by people at BlueSkyAnalytics
            </p>
          </div>
        </div>

        <div className="lower">&copy; Copyright 2021. Made in India</div>
      </div>
    </footer>
  );
};

export default MainFooter;
