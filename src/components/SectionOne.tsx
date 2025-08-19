import React from 'react';
import IconCircle from './IconCircle';
import IconCheckmark from './IconCheckmark';
import ContentBox from './ContentBox';
import './SectionOne.css';

const SectionOne: React.FC = () => {
  return (
    <section className="section-one" id="about">
      <div className="section-container">
        <div className="section-intro">
          <h2 className="section-title">Sobre a oficina</h2>
          <p className="section-description">
            Na Odair Pintor, unimos técnica, cuidado e paixão por carros para entregar resultados superiores há mais de 14 anos. Seguimos padrões de preparação, aplicação e cura de tinta que garantem acabamento uniforme, 
            proteção e brilho duradouro.
          </p>
        </div>
        
        <div className="content-boxes">
          <ContentBox title="Nossos valores">
            <ul className="values-list">
              <li className="list-item">
                <IconCircle />
                <span>Qualidade sem atalho</span>
              </li>
              <li className="list-item">
                <IconCircle />
                <span>Pontualidade e transparência</span>
              </li>
              <li className="list-item">
                <IconCircle />
                <span>Detalhe que faz diferença</span>
              </li>
              <li className="list-item">
                <IconCircle />
                <span>Atendimento próximo e honesto</span>
              </li>
            </ul>
          </ContentBox>
          
          <ContentBox title="Serviços que oferecemos">
            <ul className="services-list">
              <li className="list-item">
                <IconCheckmark />
                <span>Pintura completa e parcial</span>
              </li>
              <li className="list-item">
                <IconCheckmark />
                <span>Polimento técnico e vitrificação</span>
              </li>
              <li className="list-item">
                <IconCheckmark />
                <span>Funilaria e reparos</span>
              </li>
              <li className="list-item">
                <IconCheckmark />
                <span>Correção e igualação de cor</span>
              </li>
            </ul>
          </ContentBox>
        </div>
      </div>
    </section>
  );
};

export default SectionOne; 