import React from 'react';
import '../styles/Summary.css'
import '../styles/responsive.css'
import perfilImage from '../assets/perfil.jpg'; // Importe a imagem diretamente
import TesteSvg from '../assets/teste.svg'; // Importe o SVG




const Summary = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Olá, meu nome é Patrick</h1>
        <p>Sou Desenvolvedor de Sistemas com experiência sólida em tecnologias modernas e ambientes desafiadores. Domino linguagens como Java, JavaScript, TypeScript e frameworks avançados, sempre focando em criar soluções inovadoras, escaláveis e alinhadas às reais necessidades do mercado. Minha missão é transformar ideias em sistemas eficientes e de alto impacto.</p>
        <button>Download CV</button>

        <header className="header-container header-mobile">
      {/* Seção de navegação centralizada */}
      <div className="header-content">
        {/* Links de navegação */}
        <nav className="navigation-links">
          <a href="#" className="nav-link nav-link-name">
            Patrick
          </a>
          <a href="#" className="nav-link nav-link-purple">
            Projetos
          </a>
          <a href="#" className="nav-link nav-link-purple">
            Contato
          </a>
        </nav>
      </div>
    </header>

      </div>
      <div className="hero-right">
        <div className="profile-image">
        <img src={TesteSvg} alt="SVG teste" />
        </div>
      </div>
    </div>
  );
};

export default Summary;