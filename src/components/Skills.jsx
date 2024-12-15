import React, { useState, useEffect, useRef } from "react";

import "../styles/Skills.css";
import "../styles/responsive.css";

import Node from "../assets/skills/Node.png";
import Javascript from "../assets/skills/JavaScript.png";
import Figma from "../assets/skills/Figma.png";
import Reactimg from "../assets/skills/React.png";

const Skills = () => {
  const skills = [Node, Javascript, Figma, Reactimg,]; // Lista de imagens
  const [currentIndex, setCurrentIndex] = useState(0); // Índice atual da imagem
  const [slideWidths, setSlideWidths] = useState([]); // Armazena a largura de cada slide
  const slideshowRef = useRef(null); // Referência para o contêiner do slideshow
  const slideRefs = useRef([]); // Referência para cada slide

  // Função para calcular a largura de cada slide
  const calculateWidths = () => {
    if (slideRefs.current.length) {
      const widths = slideRefs.current.map((slide) =>
        slide ? slide.offsetWidth : 0
      );
      setSlideWidths(widths);
    }
  };

  useEffect(() => {
    // Calcula larguras após renderização completa
    const timeout = setTimeout(() => calculateWidths(), 50);

    // Escuta redimensionamento
    window.addEventListener("resize", calculateWidths);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", calculateWidths);
    };
  }, [skills.length]);

  useEffect(() => {
    // Avança slides a cada 4 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Check screen width to determine reset point
        if (window.innerWidth > 1467) {
          // For screens larger than 1467px, reset at skills.length - 3
          if (prevIndex === skills.length - 3) {
            return 0; // Reseta para o início após o penúltimo slide
          }
        } else if (window.innerWidth > 980) {
          // For screens between 980px and 1467px, reset at skills.length - 2
          if (prevIndex === skills.length - 2) {
            return 0; // Reseta para o início após o último slide
          }
        } else {
          // For screens 980px or smaller, reset at skills.length - 1
          if (prevIndex === skills.length - 1) {
            return 0; // Reseta para o início após o último slide
          }
        }
        return prevIndex + 1; // Avança para o próximo
      });
  
      // Recalcula as larguras ao trocar o slide (para dispositivos móveis)
      calculateWidths();
    }, 4000);
  
    return () => clearInterval(interval);
  }, [skills.length]);

  // Calcula a posição de translação com base nas larguras dos slides
  const calculateTranslateX = () => {
    if (!slideWidths.length || currentIndex === 0) return 0;
    return slideWidths.slice(0, currentIndex).reduce((sum, width) => sum + width, 0);
  };

  return (
    <div className="slideshow-container" ref={slideshowRef}>
      <div
        className="slideshow-track"
        style={{
          transform: `translateX(-${calculateTranslateX()}px)`, // Calcula a posição com base no tamanho dos slides
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {skills.map((skill, index) => (
          <div
            className="slide"
            key={index}
            ref={(el) => (slideRefs.current[index] = el)} // Define a referência para cada slide
          >
            <img src={skill} alt={`Skill ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
