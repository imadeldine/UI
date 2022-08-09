import React from "react";
import "./Footer.css";
import { SiAnaconda } from "react-icons/si";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Lebanon.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@Codi-x.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.codi-x.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <div className="logo">
            <SiAnaconda color="#fff" size={33} />
            <p className="logo-text">
              Codi<span>X</span>
            </p>
          </div>
          <div className="copy">
            <p className="u-text-small">&copy; Copyright 2022. Codi-X.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
