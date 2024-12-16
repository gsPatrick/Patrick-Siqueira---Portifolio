import React from 'react';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
  return (
    <headeCCr className="header-container">
      {/* Seção de navegação centralizada */}
      <div className="header-content">
        {/* Links de navegação */}
        <nav className="navigation-links">
        <Link to="/" className="nav-link nav-link-name">
          Patrick
        </Link>
          <Link to="/projects" className="nav-link nav-link-purple">
            Projetos
          </Link>
          {/* <a href="#" className="nav-link nav-link-purple">
            Contato
          </a> */}
          <Link to="/AboutMe" className="nav-link nav-link-purple">
            Sobre mim
            </Link>

        </nav>

        {/* Ícones de contato */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/patrick-siqueira-2833a4264/" target="_blank" rel="noopener noreferrer" className="icon-link linkedin">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/gsPatrick" target="_blank" rel="noopener noreferrer" className="icon-link github">
            <Github size={24} />
          </a>
          <a href="https://www.instagram.com/patricksiqueira.developer/" target="_blank" rel="noopener noreferrer" className="icon-link instagram">
            <Instagram size={24} />
          </a>
          <a href="mailto:patricksiqueira.developer@gmail.com" className="icon-link mail">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </headeCCr>
  );
};

export default Header;
