import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Texto de "Follow me" */}
      <div className="footer-follow">
        <span>Follow me</span>
      </div>

      {/* Ícones Sociais */}
      <div className="footer-icons">
        <a
          href="https://github.com/gsPatrick"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link github"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-siqueira-2833a4264/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link linkedin"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:patricksiqueira.developer@gmail.com"
          className="icon-link mail"
        >
          <Mail size={24} />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
