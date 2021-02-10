import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="brand-container">
          <img
            src="https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5ef9c794e576e5c90061f622_Group%2042%20(1).png"
            alt=""
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 35vw, (max-width: 1439px) 180px, 240px"
            srcset="https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5ef9c794e576e5c90061f622_Group%252042%2520(1)-p-500.png 500w, https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5ef9c794e576e5c90061f622_Group%252042%2520(1)-p-800.png 800w, https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5ef9c794e576e5c90061f622_Group%252042%2520(1)-p-1080.png 1080w, https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5ef9c794e576e5c90061f622_Group%252042%2520(1)-p-1600.png 1600w, https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5ef9c794e576e5c90061f622_Group%252042%2520(1)-p-2000.png 2000w, https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5ef9c794e576e5c90061f622_Group%2042%20(1).png 2995w"
          ></img>
        </div>
        <div className="container">
          <div className="footer-column">
            <p>
              Blue Sky Analytics is a geospatial data intelligence startup
              building environmental monitoring and climate risk assessment
              products.<br></br>
              <br></br> Made with <strong>❤️</strong>&nbsp;in India<br></br>©
              All rights reserved. Xacmaz Technology Pvt. Ltd. 2020
            </p>
          </div>
          <div className="footer-column">
            <h5>Company</h5>
            <a href="/about-us">About</a>
            <a href="/geo-spatial-data-refinery">Technology</a>
            <a href="/products">Products</a>
            <a href="https://apply.workable.com/blueskyhq/">Careers</a>
            <a
              href="https://www.notion.so/breezo/Privacy-Policy-06cbe7181411491f9eed74a2fbbdaad8"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <a href="https://www.notion.so/breezo/Terms-of-Use-2b5ee69f931c42029829852176235775">
              Terms of Use
            </a>
          </div>
          <div className="footer-column">
            <h5>Products</h5>
            <a href="/breezo/air-quality-datasets">
              BreeZo - Air Quality Dataset
            </a>
            <a href="/products">Zuri - Farm &amp; Forest Fires</a>
          </div>
          <div className="footer-column">
            <h5>Resources</h5>
            <a href="/bluesky-thinking">Blog</a>
            <a href="/media-centre">Media Centre</a>
            <a href="/contact">Contact</a>
            <h5>Follow Us:</h5>
            <div className="social-icon-links">
              <a
                href="https://www.linkedin.com/company/blueskyhq/?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
                className="link-block-2 w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5f00c710549ac25d5bf0ebc0_linkedin.svg"
                  alt="Blue Sky LInkedIN"
                  className="social-links"
                ></img>
              </a>
              <a
                href="https://twitter.com/blueskylab"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5f00c706adc66dcdf085ee0e_twitter%20(1).svg"
                  alt="Blue Sky Twitter"
                  className="social-links"
                ></img>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://uploads-ssl.webflow.com/5ef9c794e576e5418161f611/5f00c6bfcfab3cdc5fbca54e_facebook.svg"
                  alt="Bluesky Facebook"
                  className="social-links"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
