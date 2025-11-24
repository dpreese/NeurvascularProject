import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="brand-icon-footer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                </svg>
              </div>
              <span className="footer-brand">NeuroVascularAtlas</span>
            </div>
            <p className="footer-text">
              Advancing neurovascular education through excellence and innovation
            </p>
          </div>
          
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-links">
              <li><Link to="/articles">Articles</Link></li>
              <li><a href="#cases">Case Studies</a></li>
              <li><a href="#videos">Video Library</a></li>
              <li><a href="#models">3D Models</a></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Community</h5>
            <ul className="footer-links">
              <li><a href="#forums">Forums</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contributors">Contributors</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">About</h5>
            <ul className="footer-links">
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 NeuroVascularAtlas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}