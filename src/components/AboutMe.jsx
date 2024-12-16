import React from 'react';
import '../styles/AboutMe.css';
import Nobres from '../assets/Empresas/Nobres.png'; // Caminho da logo
import PatrickDeveloper from '../assets/Empresas/placeholder.png'

// Definindo os dados dos cards como constantes
const aboutMeData = [
  {
    title: "Gestor de automação",
    contractType: "Nobres Empreendedores",
    logo: Nobres, // Logo da empresa
    companyName: "Nobres Empreendedores",
    description: `
    Atuo como prestador de serviços na Nobres Empreendedores, desempenhando a função de Gestor de Automação. 
    Minha expertise abrange Marketing Digital, incluindo campanhas de disparos em massa, criação de conteúdos criativos como e-mails, mensagens para WhatsApp e áudios.
    
    Tenho experiência no uso de Inteligência Artificial, tanto para geração de imagens quanto para soluções inovadoras.
    
    Além disso, desenvolvo sistemas, páginas interativas e quizzes personalizados, focando na experiência do usuário e no impacto visual. 
    Atualmente, também estou me especializando em tecnologias emergentes como Blockchain, Web 3.0 e criptoativos, ampliando meu leque de habilidades para estar na vanguarda da inovação tecnológica.
    `,
    
  },
  {
    title: "CEO - Desenvolvedor de Sistemas",
    contractType: "Patrick.developer",
    logo: PatrickDeveloper, // Logo da empresa
    companyName: "Patrick.developer",
    description: `
   
    Patrick Gomes Siqueira é um experiente Desenvolvedor de Sistemas e CEO da sua própria empresa, especializada em soluções tecnológicas sob medida. Com vasta experiência em uma variedade de tecnologias e ferramentas, como HTML5, CSS3, Java, Spring Boot, C, C#, JavaScript, TypeScript, Node.js, React.js, e bancos de dados como MySQL, PostgreSQL e MariaDB, ele oferece desenvolvimento de aplicativos e websites robustos e eficientes. Além disso, possui expertise em AWS e Azure, garantindo soluções escaláveis e seguras para seus clientes. Patrick é apaixonado por transformar ideias em soluções inovadoras, sempre focado em entregar projetos de alta qualidade e excelência.
    `,
    
  },
];

const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      
      <div className="aboutme-cv-section">
        <p className="aboutme-cv-text">
          &lt; Aqui você pode me conhecer mais profissionalmente <br /> <strong>veja todas as minhas experiencias</strong>. /&gt;
        </p>
        {/* <a className="aboutme-cv-button">
          Download CV
        </a> */}
      </div>
    
      
      {aboutMeData.map((item, index) => (
        <div key={index} className="aboutme-container">
          <div className="aboutme-left">
            <h2 className="aboutme-title">{item.title}</h2>
            <h3 className="aboutme-contract">{item.contractType}</h3>
            <img src={item.logo} alt="Company Logo" className="aboutme-logo" />
          </div>

          <div className="aboutme-right">
            <h3 className="aboutme-company-name">{item.companyName}</h3>
            <p className="aboutme-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
