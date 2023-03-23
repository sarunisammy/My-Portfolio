import Logo from "../photos/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer >
        <div className="container footer__container" >
        <article >
        <Link to="/" className="logo">
          <img src={Logo} alt="footer logo" />
        </Link>
        <p>
          Lorem ipsum Culpa dolor eusit enim velit nostrud veniamex eautid
          deserunt deserunt deserunt deserunt .
        </p>
        <div className="footer__socials">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
        </div>
      </article>
      <article>
        <h4>Permerlinks</h4>
        <Link to="/about">About</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        
      </article>
      <article>
        <h4>Insights</h4>
        <Link to="/s">Blog</Link>
        <Link to="/s">Case</Link>
        <Link to="/s">Events</Link>
        <Link to="/s">Communication</Link>
        <Link to="/s">FAQs</Link>
        
      </article>
      <article>
        <h4>Get In Touch</h4>
        <Link to="/conduct">Conduct Us</Link>
        <Link to="/s">Support</Link>

      </article>

        </div>
     <div className="footer__copyright">
        <small>2022 Saruni Tutorials &copyright;</small>
     </div>
    </footer>
  );
};

export default Footer;
