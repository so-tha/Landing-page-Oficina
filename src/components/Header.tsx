import React from 'react';
import './Header.css';

const Header: React.FC = () => {
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
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">Sobre</a></li>
            <li><a href="#portfolio" className="nav-link">Portifólio</a></li>
            <li><a href="#contact" className="nav-link contact-btn">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 