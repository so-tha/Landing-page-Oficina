import './SocialMedia.css';

const SocialMedia: React.FC = () => {
  return (
    <section className="social-media">    
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-copyright">
            © 2025 Odair Pintor. Todos os direitos reservados.
          </div>
          <nav className="footer-navigation">
            <a href="#about" className="footer-link">Sobre</a>
            <a href="#portfolio" className="footer-link">Portfólio</a>
            <a href="#contact" className="footer-link">Contato</a>
          </nav>
        </div>
      </footer>
    </section>
  );
};

export default SocialMedia;