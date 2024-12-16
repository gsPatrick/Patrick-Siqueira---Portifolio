import React from "react";
import "../styles/Education.css";
import SENAI from '../assets/Education/Senai.png'; // Caminho da logo


// Dados dos cards sem 'id'
const educationData = [
  {
    title: "SENAI",
    subtitle: "Análise e Desenvolvimento de Sistemas",
    date: "Jan 2020 • Present",
    logo: SENAI,
    link: "#",
    linkText: "CURSANDO",
  },
];

const Education = () => {
  return (
    <div>
      <div className="aboutme-cv-section">
        <p className="aboutme-cv-text">
          &lt; Veja o que estou cursando e <br />{" "}
          <strong>veja os meus certificados</strong>. /&gt;
        </p>
      </div>

      {educationData.map((item, index) => (
        <div key={index} className="education-card">
          <div className="education-left">
            <h3 className="education-title">{item.title}</h3>
            <p className="education-subtitle">{item.subtitle}</p>
            <span className="education-date">{item.date}</span>
            {/* Adicionando a logo abaixo da data */}
            {item.logo && (
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="education-logo"
              />
            )}
          </div>
          <div className="education-right">
            <a href={item.link} className="education-link">
              {item.linkText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
