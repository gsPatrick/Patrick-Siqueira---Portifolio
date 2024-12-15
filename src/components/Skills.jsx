import React, { useState, useEffect, useRef } from "react";

import "../styles/Skills.css";
import "../styles/responsive.css";

import Node from "../assets/skills/Node.png";
import Javascript from "../assets/skills/JavaScript.png";
import Figma from "../assets/skills/Figma.png";
import Reactimg from "../assets/skills/React.png";

const Skills = () => {
  const skills = [Node, Javascript, Figma, Reactimg]; // Lista de imagens
  const [currentIndex, setCurrentIndex] = useState(0); // Índice atual da imagem
  const [slideWidths, setSlideWidths] = useState([]); // Armazena a largura de cada slide
  const slideshowRef = useRef(null); // Referência para o contêiner do slideshow
  const slideRefs = useRef([]); // Referência para cada slide

  useEffect(() => {
    // Calcula a largura de cada slide
    const calculateWidths = () => {
      if (slideRefs.current.length) {
        const widths = slideRefs.current.map((slide) =>
          slide ? slide.offsetWidth : 0
        );
        setSlideWidths(widths);
      }
    };

    calculateWidths();
    window.addEventListener("resize", calculateWidths); // Recalcula as larguras ao redimensionar a janela

    return () => {
      window.removeEventListener("resize", calculateWidths);
    };
  }, [skills.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Reseta o índice ao chegar na última imagem
        if (prevIndex === skills.length - 1) {
          return 0; // Volta para a primeira imagem
        }
        return prevIndex + 1; // Avança para o próximo índice
      });
    }, 4000); // Tempo de transição (4 segundos)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [skills.length]);

  // Calcula a posição de translação com base na largura dos slides
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
