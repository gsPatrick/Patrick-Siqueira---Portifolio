import React, { useState, useEffect } from "react";

import "../styles/Skills.css";
import "../styles/responsive.css";

import Node from "../assets/skills/Node.png";
import Javascript from "../assets/skills/Javascript.png";
import Figma from "../assets/skills/Figma.png";
import Reactimg from "../assets/skills/React.png";

const Skills = () => {
  const skills = [Node, Javascript, Figma, Reactimg]; // Lista de imagens
  const maxAdvances = 1; // Quantidade de avanços permitidos antes de resetar (1 avanço = passar 1 vez)

  const [currentIndex, setCurrentIndex] = useState(0); // Índice atual da imagem
  const [advances, setAdvances] = useState(0); // Contador de avanços

  useEffect(() => {
    const interval = setInterval(() => {
      if (advances < maxAdvances) {
        // Avança apenas 1 vez
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setAdvances((prevAdvances) => prevAdvances + 1); // Incrementa o contador de avanços
      } else {
        // Reseta para o começo após o número definido de avanços
        setCurrentIndex(0);
        setAdvances(0); // Reseta o contador de avanços
      }
    }, 4000); // Tempo de transição (4 segundos)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [advances, skills.length, maxAdvances]); // Reage às mudanças de `advances`

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
