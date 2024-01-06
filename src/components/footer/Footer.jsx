import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer container ">
      <div className="footer-container">
        <div className="footer-content contact-info ">
          <h3>Contact Us</h3>
          <p>Email: contact@jobportal.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Job Street, City</p>
        </div>
        <div className="footer-content useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {currentYear} Job-Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
