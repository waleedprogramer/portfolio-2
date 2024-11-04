// components/Footer.js
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="social-links">
          <a href="https://github.com/waleedprogramer" aria-label="GitHub">
            <FaGithub size={34} />
          </a>
          <a href="https://linkedin.com/in/awaisprogram" aria-label="LinkedIn">
            <FaLinkedin size={34} />
          </a>
          <a href="https://twitter.com/yourtwitter" aria-label="Twitter">
            <FaTwitter size={34} />
          </a>
        </div>
        <div className="footer-text">
          <h2> Waleed Bin Mehmood | Portfolio</h2>
        </div>
        <p className='rights'>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
