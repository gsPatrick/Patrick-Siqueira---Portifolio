import React from 'react';
import '../styles/Summary.css'
import '../styles/responsive.css'
import perfilImage from '../assets/perfil.jpg'; // Importe a imagem diretamente
import TesteSvg from '../assets/teste.svg'; // Importe o SVG
import { Link } from 'react-router-dom';




const Summary = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Olá, meu nome é Patrick</h1>
        <p>Sou Empresario e Desenvolvedor de Sistemas com experiência sólida em tecnologias modernas e ambientes desafiadores. Domino linguagens como Java, JavaScript, TypeScript e frameworks avançados, sempre focando em criar soluções inovadoras, escaláveis e alinhadas às reais necessidades do mercado. Minha missão é transformar ideias em sistemas eficientes e de alto impacto.</p>
        <Link to="/projects">
        <button>Ver Projetos!</button>
        </Link>

        

        <header className="header-container header-mobile">
      {/* Seção de navegação centralizada */}
      <div className="header-content">
        {/* Links de navegação */}
        <nav className="navigation-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'nav-link-purple' : 'nav-link-name'}`}
          >
            Patrick
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${location.pathname === '/projects' ? 'nav-link-purple' : 'nav-link-name'}`}
          >
            Projetos
          </Link>
          <Link
            to="/AboutMe"
            className={`nav-link ${location.pathname === '/AboutMe' ? 'nav-link-purple' : 'nav-link-name'}`}
          >
            Sobre mim
          </Link>
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