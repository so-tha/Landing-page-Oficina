import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tagline">
            <span className="highlight">Pintura automotiva premium.</span>
            <span> Revitalização que valoriza.</span>
          </div>
          
          <h1 className="hero-title">
            Acabamento impecável em pintura e restauração veicular
          </h1>
          
          <p className="hero-description">
            Especialistas em pintura, polimento técnico, funilaria fina e revitalização completa. 
            Utilizamos materiais de alta qualidade e processos precisos para entregar brilho profundo, 
            cor consistente e durabilidade.
          </p>
          
          <div className="hero-buttons">
            <Button
              variant="primary"
              onClick={() => window.open('https://wa.me/553299391876', '_blank')}
            >
              Solicitar orçamento
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open('https://www.instagram.com/ofc_odairpintor/', '_blank')}
            >
              Ver portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 