import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="_container">
        <div className="footer_body">
          <div className="footer_content">
            <ul>
              <li><p>About</p></li>
              <li><Link to="/">How Triphouse works</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Privacy</Link></li>
              <li><Link to="/">Terms</Link></li>
            </ul>
          </div>
          <div className="footer_content">
            <ul>
              <li><p>Property types</p></li>
              <li><Link to="/">Guest houses</Link></li>
              <li><Link to="/">Hotels</Link></li>
              <li><Link to="/">Apartments</Link></li>
              <li><Link to="/">Villas</Link></li>
              <li><Link to="/">Holiday homes</Link></li>
              <li><Link to="/">Hostels</Link></li>
            </ul>
          </div>
          <div className="footer_content">
            <ul>
              <li><p>Support</p></li>
              <li><Link to="/">Contact Customer Service</Link></li>
              <li><Link to="/">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright"><p>&copy; 2020 Triphouse, Inc. All rights reserved</p></div>
      </div>
    </footer>
  );
}

export default Footer;
