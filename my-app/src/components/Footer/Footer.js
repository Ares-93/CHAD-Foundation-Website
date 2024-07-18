import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import ScrollToTopNavLink from "./ScrollToTopNavLink";

import FacebookIcon from "../../images/Footer-Images/facebook.png";
import YoutubeIcon from "../../images/Footer-Images/youtube.png";
import LinkedinIcon from "../../images/Footer-Images/linkedin.png";

// import InstagramIcon from "../../images/Footer-Images/instagram.png";
// import TwitterIcon from "../../images/Footer-Images/twitter.png";

function Footer() {
  return (
    <div className="footer-grid-container">
      <Container>
        <Row>
          {/* Main */}
          <Col md className="footer-col footer-main-col">
            <h2 className="footer-h2">
              The Chad Foundation <br />
              <span className="footer-h2-span">for Athletes and Artists</span>
            </h2>
            <p className="footer-p">
              PO Box 145, Radio City Station <br />
              New York, New York 10101
            </p>
            <p className="footer-p">P: 917-334-1194</p>
            <p className="footer-p">E: info@chad-foundation.org</p>
            <p className="footer-p">W: www.chad-foundation.org</p>
            <div className="footer-social-media-icons">
              {/* Instagram */}
              {/* <a href="google.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="alt" width={45} />
              </a> */}
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100063710691467"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FacebookIcon} alt="alt" width={45} />
              </a>
              {/* Twitter */}
              {/* <a
                href="https://x.com/ChadFoundation?t=Le-sXZoK3bOqdYAxlnQq8A&s=35"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitterIcon} alt="alt" width={45} />
              </a> */}
              {/* Youtube */}
              <a
                href="https://www.youtube.com/watch?v=zt6H5ZlXRd8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={YoutubeIcon} alt="alt" width={45} />
              </a>
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/company/thechadfoundationforathletesandartists/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinIcon} alt="alt" width={45} />
              </a>
            </div>
          </Col>
          {/* About Us */}
          <Col md className="footer-col">
            <h3 className="footer-h3">About Us</h3>
            <ScrollToTopNavLink
              to="/about/who-we-are"
              className="footer-p nav-link"
            >
              Who We Are
            </ScrollToTopNavLink>
            <ScrollToTopNavLink
              to="/about/what-weve-done"
              className="footer-p nav-link"
            >
              What We’ve Done
            </ScrollToTopNavLink>
            <ScrollToTopNavLink
              to="/about/testimonials"
              className="footer-p nav-link"
            >
              Testimonials
            </ScrollToTopNavLink>
            <ScrollToTopNavLink to="/about/board" className="footer-p nav-link">
              Board
            </ScrollToTopNavLink>
          </Col>
          {/* Education of the Heart */}
          <Col md className="footer-col">
            <h3 className="footer-h3">Education of the Heart</h3>
            <p className="footer-p">Heart Facts</p>
            <p className="footer-p">Screenings</p>
            <p className="footer-p">Emergencies</p>
            <p className="footer-p">Expert Health Tips</p>
          </Col>
          {/* Gift of Art */}
          <Col md className="footer-col">
            <h3 className="footer-h3">Gift of Art</h3>
            <ScrollToTopNavLink
              to="/gift-of-art/scholarship"
              className="footer-p nav-link"
            >
              Scholarship
            </ScrollToTopNavLink>
            <ScrollToTopNavLink
              to="/gift-of-art/plays"
              className="footer-p nav-link"
            >
              Plays
            </ScrollToTopNavLink>
            <ScrollToTopNavLink
              to="/gift-of-art/films"
              className="footer-p nav-link"
            >
              Films
            </ScrollToTopNavLink>
            <ScrollToTopNavLink
              to="/gift-of-art/books"
              className="footer-p nav-link"
            >
              Books
            </ScrollToTopNavLink>
            <ScrollToTopNavLink
              to="/gift-of-art/upcoming-events"
              className="footer-p nav-link"
            >
              Events
            </ScrollToTopNavLink>
          </Col>
          {/* People We Love */}
          <Col md className="footer-col">
            <h3 className="footer-h3">People We Love</h3>
            <p className="footer-p">Tributes</p>
            <p className="footer-p">Survivors</p>
            <h3 className="footer-h3">Donate</h3>
          </Col>
        </Row>
        <h3 className="footer-copyright">
          2024 Copyright. All Rights Reserved Privacy Policy Terms of Use
        </h3>
      </Container>
    </div>
  );
}

export default Footer;
