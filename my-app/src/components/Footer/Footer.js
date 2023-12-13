import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import InstagramIcon from "../../images/Footer-Images/instagram.png";
import FacebookIcon from "../../images/Footer-Images/facebook.png";
import TwitterIcon from "../../images/Footer-Images/twitter.png";
import YoutubeIcon from "../../images/Footer-Images/youtube.png";
import LinkedinIcon from "../../images/Footer-Images/linkedin.png";

function Footer() {
  return (
    <div className="footer-grid-container">
      <Container>
        <Row>
          <Col md className="footer-col footer-main-col">
            <h2 className="footer-h2">The Chad Foundation</h2>
            <p className="footer-p">
              XXX Adress AvenueCity, <br />
              State XXXXX
            </p>
            <p className="footer-p">P: 551.998.6110</p>
            <p className="footer-p">E: info@chadfoundation.com</p>
            <div className="footer-social-media-icons">
              {/* Instagram */}
              <a href="google.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="alt" width={45} />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100063710691467"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FacebookIcon} alt="alt" width={45} />
              </a>
              {/* Twitter */}
              <a
                href="https://x.com/ChadFoundation?t=Le-sXZoK3bOqdYAxlnQq8A&s=35"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitterIcon} alt="alt" width={45} />
              </a>
              {/* Youtube */}
              <a
                href="https://www.youtube.com/@aristaarista03"
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
          <Col md className="footer-col">
            <h3 className="footer-h3">About Us</h3>
            <p className="footer-p">Who We Are</p>
            <p className="footer-p">What We’ve Done</p>
            <p className="footer-p">Testimonials</p>
            <p className="footer-p">Board</p>
          </Col>
          <Col md className="footer-col">
            <h3 className="footer-h3">Education of the Heart</h3>
            <p className="footer-p">Heart Facts</p>
            <p className="footer-p">Screenings</p>
            <p className="footer-p">Emergencies</p>
            <p className="footer-p">Expert Health Tips</p>
          </Col>
          <Col md className="footer-col">
            <h3 className="footer-h3">Gift of Art</h3>
            <p className="footer-p">Scholarship</p>
            <p className="footer-p">Plays</p>
            <p className="footer-p">Films</p>
            <p className="footer-p">Books</p>
            <p className="footer-p">Upcoming Events</p>
          </Col>
          <Col md className="footer-col">
            <h3 className="footer-h3">People We Love</h3>
            <p className="footer-p">Tributes</p>
            <p className="footer-p">Survivors</p>
            <h3 className="footer-h3">Donate</h3>
          </Col>
        </Row>
        <h3 className="footer-copyright">
          2023 Copyright. All Rights Reserved Privacy Policy Terms of Use
        </h3>
      </Container>
    </div>
  );
}

export default Footer;
