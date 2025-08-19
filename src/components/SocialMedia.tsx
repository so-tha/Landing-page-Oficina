import React from 'react';
import Button from './Button';
import './SocialMedia.css';

const SocialMedia: React.FC = () => {
  const handleSocialClick = (platform: string) => {
    let url = '';
    
    switch (platform) {
      case 'instagram':
        url = 'https://www.instagram.com/ofc_odairpintor/';
        break;
      case 'whatsapp':
        url = 'https://wa.me/553299391876';
        break;
      default:
        return;
    }
    
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="social-media">
      <div className="social-container">
        <div className="social-header">
          <h2 className="social-title">Redes Sociais</h2>
        </div>
        
        <div className="social-buttons">
          <Button 
            variant="secondary" 
            className="social-btn"
            onClick={() => handleSocialClick('instagram')}
          >
            Instagram
          </Button>
          <Button 
            variant="secondary" 
            className="social-btn"
            onClick={() => handleSocialClick('whatsapp')}
          >
            WhatsApp
          </Button>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-copyright">
            © 2025 Odair Pintor. Todos os direitos reservados.
          </div>
          <nav className="footer-navigation">
            <a href="#about" className="footer-link">Sobre</a>
            <a href="#services" className="footer-link">Serviços</a>
            <a href="#portfolio" className="footer-link">Portfolio</a>
            <a href="#contact" className="footer-link">Contato</a>
          </nav>
        </div>
      </footer>
    </section>
  );
};

export default SocialMedia; 