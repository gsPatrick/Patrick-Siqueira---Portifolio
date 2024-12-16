    import React from "react";
    import "../styles/Projetos.css";
    import { Link } from 'react-router-dom';
    
    import LpAlexandre from "../assets/projetos/LpAlexandre.png";
    import Ebinex from "../assets/projetos/Ebinex.png";
    import EbookUnime from "../assets/projetos/EbookUnime.png";
    import NoteApp from "../assets/projetos/NoteApp.png";
    import Starbucks from '../assets/projetos/Starbucks.png'
    import BWRRastreio from '../assets/projetos/BWRRastreio.png'

    //ICones para quando precisar:

    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot" },
    // { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" }


    // Componente reutilizável para projetos
    const ProjetoCard = ({ image, title, description, icons, codeLink, demoLink }) => {
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
                Ver página
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
        },

        {
            title: "Landing Page - E-book",
            description: "Uma página para divulgar um E-book de uma equipe de nutricionistas da Faculdade UNIME",
            image: [EbookUnime],
            icons: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
            ],
            codeLink: "https://github.com/gsPatrick/Site-Aproveitamento-Integral-Alimentos-Unime-Equipe-Aipim",
            demoLink: "https://equipe-aipim.vercel.app/",
        },

        {
            title: "NoteApp",
            description: "Uma simples página para anotações diárias",
            image: [NoteApp],
            icons: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
            ],
            codeLink: "https://github.com/gsPatrick/Note-app",
            demoLink: "https://note-app-chi-weld.vercel.app/",
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
        },
        
    ];

    return (
        <div className="projetos-container">
          {/* Adicionando o header aqui */}
          <header className="header-container header-mobile">
            <div className="header-content">
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
              <a href="#" className="nav-link nav-link-purple">
                Sobre mim
              </a>
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
