import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="website-rights">SIMSISTERS © 2021</div>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/lenairasimsisters"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/simsisters/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </section>
      <section className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/about">About Us</Link>
            <Link to="/about">Contact Us</Link>
            <Link to="/about">Shop</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
