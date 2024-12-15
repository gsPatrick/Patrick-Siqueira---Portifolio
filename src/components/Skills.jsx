import React, { useState, useEffect } from "react";

import "../styles/Skills.css";
import "../styles/responsive.css";

import Node from "../assets/skills/Node.png";
import Javascript from "../assets/skills/JavaScript.png";
import Figma from "../assets/skills/Figma.png";
import Reactimg from "../assets/skills/React.png";

const Skills = () => {
  const skills = [Node, Javascript, Figma, Reactimg]; // Lista de imagens

  const [currentIndex, setCurrentIndex] = useState(0); // Índice atual da imagem
  const [advances, setAdvances] = useState(0); // Contador de avanços

  useEffect(() => {
    const interval = setInterval(() => {
      if (advances < skills.length - 1) {
        // Avança até a última imagem (não reseta até atingir a última)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setAdvances((prevAdvances) => prevAdvances + 1); // Incrementa o contador de avanços
      } else {
        // Reseta para o começo após atingir a última imagem
        setCurrentIndex(0);
        setAdvances(0); // Reseta o contador de avanços
      }
    }, 4000); // Tempo de transição (4 segundos)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [advances, skills.length]); // Reage às mudanças de `advances`

  return (
    <div className="slideshow-container">
      <div
        className="slideshow-track"
        style={{
          transform: `translateX(-${currentIndex * (100 / skills.length)}%)`,
          width: `${skills.length * 100}%`,
        }}
      >
        {skills.map((skill, index) => (
          <div className="slide" key={index}>
            <img src={skill} alt={`Skill ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
