import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand-section">
          <div className="logo">
            <div className="logo-icon">
              <img src="/images/logo.png" alt="logo" sizes='48px' />
            </div>
          </div>
          <div className="brand-text">
            <h1 className="company-name">Odair Pintor</h1>
            <p className="tagline">Pintura e Revitalização</p>
          </div>
        </div>
        
        <nav className="navigation">
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#portfolio" className="nav-link" onClick={closeMenu}>Portifólio</a></li>
            <li><a href="#contact" className="nav-link contact-btn" onClick={closeMenu}>Contato</a></li>
          </ul>
          
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 