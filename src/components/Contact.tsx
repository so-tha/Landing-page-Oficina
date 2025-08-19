import React, { useState } from 'react';
import Button from './Button';
import './Contact.css';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um orçamento:

        Nome: ${formData.name}
        Email: ${formData.email}
        Telefone: ${formData.phone || 'Não informado'}
        Mensagem: ${formData.message}

        Aguardo retorno!`;
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '553299391876';
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contato</h2>
          <p className="contact-description">
            Entre em contato para orçamento, dúvidas e agendamentos. Resposta rápida durante horário comercial.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="info-title">Informações</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Telefone:</span>
                <span className="info-value">(32) 99391876</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">odairpintor76@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Endereço:</span>
                <span className="info-value">Rua Americo Antonucci, 69 - Beira Rio, Visconde do Rio Branco, MG</span>
              </div>
              <div className="info-item">
                <span className="info-label">Horário:</span>
                <span className="info-value">Seg a Sab, 08h às 17h</span>
              </div>
            </div>
            
            <div className="social-buttons">
              <Button 
                variant="secondary" 
                className="social-btn"
                onClick={() => window.open('https://www.instagram.com/ofc_odairpintor/', '_blank')}
              >
                Instagram
              </Button>
              <Button 
                variant="secondary" 
                className="social-btn"
                onClick={() => window.open('https://wa.me/553299391876', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="contact-form">
            <h3 className="form-title">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Seu email"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Telefone (opcional)"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Mensagem"
                  required
                  rows={4}
                  className="form-textarea"
                />
              </div>
              
              <Button type="submit" variant="primary" className="submit-btn">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 