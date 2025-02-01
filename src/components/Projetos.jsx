import React from "react";
import "../styles/Projetos.css";
import { Link, useLocation } from 'react-router-dom';

import LpAlexandre from "../assets/projetos/LpPortfolio.png";
import Ebinex from "../assets/projetos/EbinexRobo.png";
import EbookUnime from "../assets/projetos/LpEbook.png";
import NoteApp from "../assets/projetos/NoteApp.png";
import Starbucks from '../assets/projetos/PgStarbucks.png'
import BWRRastreio from '../assets/projetos/BWR.png'
import PopUp from '../assets/projetos/OticaPerci.png'
import PabloDias from '../assets/projetos/PabloDias.png'
import LandingPageErikaPsicologa from '../assets/projetos/ErikaPsicologa.png'
import AstroQuiz from '../assets/projetos/AstroQuiz.png'
import Larmure from '../assets/projetos/Larmure.png'

// Componente reutilizável para projetos
const ProjetoCard = ({ image, title, description, icons, codeLink, demoLink, buttonText }) => {
return (
    <div className="projeto-card">
    <div className="projeto-image">
        {image ? (
        <img src={image} alt={title} />
        ) : (
        <div className="placeholder">
            <i className="fas fa-image"></i>
        </div>
        )}
    </div>
    <div className="projeto-content">
        <h3 className="projeto-title">{title}</h3>
        <p className="projeto-description">{description}</p>
        <div className="projeto-icons">
        {icons.map((icon, index) => (
            <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="icon"
            />
        ))}
        </div>
        <div className="projeto-buttons">
        {/* <a href={codeLink} className="button view-code" target="_blank" rel="noreferrer">
            View Code
        </a> */}
        <a href={demoLink} className="button live-demo" target="_blank" rel="noreferrer">
            {buttonText}
        </a>
        </div>
    </div>
    </div>
);
};

// Dados de exemplo para reutilização
const Projetos = () => {
const projetos = [
    {
        title: "Sistema de Rastreios de pedido",
        description: "Sistema de rastreamento que gera imagens com o status dos pedidos e o envio via WhatsApp",
        image: [BWRRastreio],
        icons: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
        ],
        codeLink: "#",
        demoLink: "#",
        buttonText: "Indisponível" // Adicionado o texto do botão aqui
    },
    {
    title: "Landing page - portfolio",
    description: "Uma página de portfolio com 3 projetos para repositorio inclusos",
    image: [LpAlexandre],
    icons: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    ],
    codeLink: "#",
    demoLink: "https://alexandre-diogenes-pereira-ygd6.vercel.app/",
    buttonText: "Ver página" // Texto padrão do botão
    },
    {
        title: "Robo - Corretora Ebinex",
        description: "Um robo que analisa a vela anterior e faz uma ação de compra ou venda baseado no algoritmo criado",
        image: [Ebinex],
        icons: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" }
        ],
        codeLink: "https://github.com/gsPatrick/Robo-Ebinex",
        demoLink: "#",
        buttonText: "Indisponivel" // Texto padrão do botão
    },

    {
        title: "Landing Page - E-book",
        description: "Uma página para divulgar um E-book de uma equipe de nutricionistas da Faculdade UNIME",
        image: [EbookUnime],
        icons: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
        ],
        codeLink: "https://github.com/gsPatrick/Site-Aproveitamento-Integral-Alimentos-Unime-Equipe-Aipim",
        demoLink: "https://equipe-aipim.vercel.app/",
        buttonText: "Ver página" // Texto padrão do botão
    },

    {
        title: "Wordpress - Óticas Perci",
        description: "Uma pagina de oculos com Pop-Up para mudanças nos itens dos óculos",
        image: [PopUp],
        icons: [
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", alt: "WordPress" },
          { src: "https://i.imgur.com/gn6H3yi.png", alt: "Elementor" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
        ],
        codeLink: "#",
        demoLink: "https://otica.rodriguezbusiness.com.br/",
        buttonText: "Ver página" // Texto padrão do botão
    },

    {
      title: "Pagina Moderna - SquareSpace",
      description: "Uma página feita no SquareSPace",
      image: [PabloDias],
      icons: [
      { src: "https://cdn-icons-png.flaticon.com/512/5968/5968706.png", alt: "Squarespace" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
      ],
      codeLink: "#",
      demoLink: "#",
      buttonText: "Agurdando publicação" // Texto padrão do botão
  },

    {
        title: "Pagina - Starbucks",
        description: "Criação de um modelo de página do Starbucks. Não está mais sendo utilizada",
        image: [Starbucks],
        icons: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
        ],
        codeLink: "https://github.com/gsPatrick/Starbucks",
        demoLink: "https://gspatrick.github.io/Starbucks/",
        buttonText: "Ver página" // Texto padrão do botão
    },
    {
      title: "Landing Page - L'Armure Confecções",
      description: "Landing page institucional para L'Armure Confecções, empresa com a missão de transformar a forma como você veste sua equipe. Uniformes que são mais do que simples peças de roupa, representando visualmente a essência da sua empresa, escola ou propósito. Qualidade, personalização e compromisso com a satisfação do cliente, desde uniformes escolares até administrativos.",
      image: [Larmure], // Use the imported image here
      icons: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
      ],
      codeLink: "#",
      demoLink: "https://larmure.com.br/", // Add the actual landing page link if available
      buttonText: "Ver página" // Texto padrão do botão
  },
    {
        title: "Landing Page para Psicóloga",
        description: "Desenvolvimento de uma landing page profissional e elegante para psicóloga, utilizando a plataforma Wix para otimizar a presença online e a captação de pacientes.",
        image: [LandingPageErikaPsicologa],
        icons: [
            { src: "https://cdn-icons-png.flaticon.com/512/5968/5968706.png", alt: "Wix" },
        ],
        codeLink: "#",
        demoLink: "https://erikatikita.wixsite.com/psierikacorrea", // Coloque o link da página da Erika aqui
        buttonText: "Ver página" // Texto padrão do botão
    },
    {
      title: "Quiz de Astrologia -  AstroQuiz",
      description: "Página web interativa para um quiz de astrologia personalizado. Descubra previsões astrológicas poderosas respondendo a um teste rápido e intuitivo.",
      image: [AstroQuiz], // Using the imported image here
      icons: [
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
      ],
      codeLink: "#",
      demoLink: "https://www.astroquiz.online/", // Add the quiz page link here if available
      buttonText: "Ver página" // Texto padrão do botão
  },

];
const location = useLocation();

return (
    <div className="projetos-container">
      {/* Adicionando o header aqui */}
      <header className="header-container header-mobile">
        <div className="header-content">
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

      {/* Renderizando os cards */}
      {projetos.map((projeto, index) => (
        <ProjetoCard key={index} {...projeto} />
      ))}
    </div>
  );
};
export default Projetos;