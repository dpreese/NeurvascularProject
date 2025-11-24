import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import './App.css';

export default function NeuroLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="hero-badge">Advanced Neurovascular Education</div>
              <h1 className="hero-title">
                Your Comprehensive Resource for{' '}
                <span className="gradient-text">Neurovascular Excellence</span>
              </h1>
              <p className="hero-description">
                Explore cutting-edge research, detailed anatomical guides, and clinical expertise 
                from leading neurosurgeons. Stay at the forefront of neurovascular medicine.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary btn-lg me-3 mb-3">
                  Explore Articles
                  <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <button className="btn btn-outline-secondary btn-lg mb-3">Learn More</button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Articles</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <h3>10K+</h3>
                  <p>Surgeons</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Countries</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container">
                <div className="hero-image-card">
                  <div className="brain-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Comprehensive Learning Resources</h2>
            <p className="section-description">
              Access expertly curated content designed for neurosurgeons, by neurosurgeons
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 className="feature-title">In-Depth Articles</h3>
                <p className="feature-description">
                  Peer-reviewed research and case studies covering the latest in neurovascular techniques
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <h3 className="feature-title">Video Library</h3>
                <p className="feature-description">
                  Surgical demonstrations and educational lectures from leading experts
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                  </svg>
                </div>
                <h3 className="feature-title">3D Anatomy</h3>
                <p className="feature-description">
                  Interactive anatomical models and detailed vascular mapping tools
                </p>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="feature-title">Community</h3>
                <p className="feature-description">
                  Connect with colleagues and share insights in our professional network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Enhance Your Practice?</h2>
            <p className="cta-description">
              Join thousands of neurosurgeons who trust our platform for the latest 
              in neurovascular education and research
            </p>
            <div className="cta-buttons">
              <button className="btn btn-light btn-lg me-3 mb-3">Get Started Free</button>
              <button className="btn btn-outline-light btn-lg mb-3">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}