import React from 'react';
import '../styles/AboutMe.css';
import Nobres from '../assets/Empresas/Nobres.png';
import PatrickDeveloper from '../assets/Empresas/placeholder.png';
import Systec from '../assets/Empresas/SystecLogo.jpg';
import Senac from  '../assets/Empresas/SenacLogo.jpg';

const aboutMeData = [
  {
    title: "CEO - Desenvolvedor de Sistemas",
    contractType: "Patrick.developer",
    logo: PatrickDeveloper,
    companyName: "Patrick.developer",
    description: `
    Patrick Gomes Siqueira é um experiente Desenvolvedor de Sistemas e CEO da sua própria empresa, especializada em soluções tecnológicas sob medida. Com vasta experiência em uma variedade de tecnologias e ferramentas, como HTML5, CSS3, Java, Spring Boot, C, C#, JavaScript, TypeScript, Node.js, React.js, e bancos de dados como MySQL, PostgreSQL e MariaDB, ele oferece desenvolvimento de aplicativos e websites robustos e eficientes. Além disso, possui expertise em AWS e Azure, garantindo soluções escaláveis e seguras para seus clientes. Patrick é apaixonado por transformar ideias em soluções inovadoras, sempre focado em entregar projetos de alta qualidade e excelência.
    `,
  },
  {
    title: "Gestor de automação",
    contractType: "Nobres Empreendedores",
    logo: Nobres,
    companyName: "Nobres Empreendedores",
    startDate: "Dezembro. 2024",
    endDate: "Janeiro. 2025",
    description: `
    Atuei como prestador de serviços na Nobres Empreendedores, desempenhando a função de Gestor de Automação no período de Janeiro de 2021 a Dezembro de 2023.
    Minha expertise abrange Marketing Digital, incluindo campanhas de disparos em massa, criação de conteúdos criativos como e-mails, mensagens para WhatsApp e áudios.
  
    Tenho experiência no uso de Inteligência Artificial, tanto para geração de imagens quanto para soluções inovadoras.
  
    Além disso, desenvolvo sistemas, páginas interativas e quizzes personalizados, focando na experiência do usuário e no impacto visual.
    Durante este período, especializei-me também em tecnologias emergentes como Blockchain, Web 3.0 e criptoativos, ampliando meu leque de habilidades para estar na vanguarda da inovação tecnológica.
    `,
  },
  {
    title: "Desenvolvedor Fullstack",
    contractType: "Senac BAHIA",
    logo: Senac, // Placeholder - Replace with Senac BAHIA logo if available
    companyName: "Senac BAHIA",
    startDate: "Jan. 2025", //  Preencha com o ANO de início correto (Ex: Jan. 2023)
    endDate: "Presente", // Ou a data de saída se já tiver saído
    description: `
    Ingressei no Senac BAHIA em Janeiro de 2025 como Desenvolvedor Fullstack, contribuindo para uma instituição líder em educação profissional.

    No Senac BAHIA, dedico-me ao desenvolvimento e manutenção de aplicações web robustas e eficientes, utilizando um leque de tecnologias .NET. Minha atuação abrange desde a criação do backend, utilizando a versatilidade do .NET framework, até o desenvolvimento de interfaces dinâmicas e ricas em conteúdo com 2sxc, um poderoso framework de gerenciamento de conteúdo, e a plataforma CMS DNN (DotNetNuke).

    Com experiência em DotNetNuke Luke, também auxilio na administração e otimização da plataforma DNN, garantindo a performance e a estabilidade das soluções web do Senac BAHIA. Meu objetivo é entregar aplicações que atendam às necessidades da instituição, impulsionando a qualidade e a inovação em seus serviços educacionais.
    `,
  },
  {
    title: "Desenvolvedor Full-stack",
    contractType: "Sistec Soluções Digitais",
    logo: Systec, // Use um logo placeholder ou adicione o logo da Sistec se tiver
    companyName: "Sistec Soluções Digitais",
    startDate: "Jan. 2024", // Assumindo que começou em Janeiro de 2024, ajuste se necessário
    endDate: "Presente", // Ou deixe em branco se preferir
    description: `
    Atuo como prestador de serviços na Sistec Soluções Digitais, empresa especializada no desenvolvimento de soluções tecnológicas inovadoras para potencializar negócios no digital.
    
    Desempenho o papel de Desenvolvedor Full-stack, com foco principal no Front-end, contribuindo para a criação de interfaces de usuário atraentes e funcionais.

    Desde Janeiro de 2024, tenho aplicado meus conhecimentos em desenvolvimento web para entregar soluções que impulsionam a presença digital dos clientes da Sistec.
    `,
  },
];

const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      <div className="aboutme-cv-section">
        <p className="aboutme-cv-text">
          &lt;Aqui você pode me conhecer mais profissionalmente<br />{" "}
          <strong>veja todas as minhas experiencias</strong>. /&gt;
        </p>
      </div>

      {aboutMeData.map((item, index) => (
        <div key={index} className="aboutme-container">
          <div className="aboutme-left">
            <h2 className="aboutme-title">{item.title}</h2>
            {item.startDate && item.endDate && (
              <h3 className="aboutme-duration"> {/* Added class name here */}
                {item.startDate} - {item.endDate}
              </h3>
            )}
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