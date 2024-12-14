import React from 'react';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header-container">
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

        {/* Ícones de contato */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/patrick" target="_blank" rel="noopener noreferrer" className="icon-link linkedin">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/patrick" target="_blank" rel="noopener noreferrer" className="icon-link github">
            <Github size={24} />
          </a>
          <a href="https://www.instagram.com/patrick" target="_blank" rel="noopener noreferrer" className="icon-link instagram">
            <Instagram size={24} />
          </a>
          <a href="mailto:patrick@email.com" className="icon-link mail">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
