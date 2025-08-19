import React from 'react';
import { useCarousel } from '../hooks/useCarousel';
import './Portfolio.css';

interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

const Portfolio: React.FC = () => {
  
  const portfolioImages: PortfolioImage[] = [
    {
      id: '1',
      src: '/src/assets/primeira.png',
      alt: 'Detalhe de pintura automotiva',
      caption: 'Nossas informações'
    },
    {
      id: '3',
      src: '/src/assets/segunda.png',
      alt: 'Vista externa de oficina',
      caption: 'Galeria de Projetos'
    },
  ];

  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel({
    totalSlides: portfolioImages.length,
    autoPlay: true,
    autoPlayInterval: 6000,
    loop: true
  });

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Portfólio</h2>
          <p className="portfolio-description">
            Confira alguns trabalhos de pintura e restauração realizados recentemente em diferentes modelos.
          </p>
        </div>
        
        <div className="portfolio-gallery">
          <div className="gallery-container">
            <div 
              className="gallery-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioImages.map((image) => (
                <div key={image.id} className="gallery-item">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="portfolio-image"
                  />
                  {image.caption && (
                    <div className="image-caption">
                      {image.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="portfolio-controls">
          <div className="navigation-buttons">
            <button 
              className="nav-button prev-button"
              onClick={prevSlide}
              aria-label="Imagem anterior"
            >
              ‹
            </button>
            <button 
              className="nav-button next-button"
              onClick={nextSlide}
              aria-label="Próxima imagem"
            >
              ›
            </button>
          </div>
          
          <div className="pagination-dots">
            {portfolioImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 