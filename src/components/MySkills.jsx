import React from "react";
import "../styles/MySkills.css";
import "../styles/responsive.css";

// Importando as imagens
// import appStoreImg from "../assets/technologies/";
// import playStoreImg from "../assets/technologies/play-store.png";
import reactImg from "../assets/technologies/ReactIcon.png";
// import reactNativeImg from "../assets/technologies/react-native.png";
// import nextjsImg from "../assets/technologies/nextjs.png";
import viteImg from "../assets/technologies/ViteIcon.png";
import figmaImg from "../assets/technologies/FigmaIcon.png";
import javascriptImg from "../assets/technologies/JavaScriptIcon.png";
import typescriptImg from "../assets/technologies/TypeScriptIcon.png";
import javaImg from "../assets/technologies/JavaIcon.png";
import nodeImg from "../assets/technologies/NodeIcon.png";
import springBootImg from "../assets/technologies/SpringBootIcon.png";

// Definindo as skills em constantes
const skillsData = [
//   {
//     category: "Publications in both stores",
//     skills: [
//       { name: "App Store", image: appStoreImg },
//       { name: "Play Store", image: playStoreImg },
//     ],
//   },
  {
    category: "Front-end e Design",
    skills: [
      { name: "React JS", image: reactImg },
      { name: "Vite", image: viteImg },
      { name: "Figma", image: figmaImg },
    ],
  },
  {
    category: "Linguagens",
    skills: [
      { name: "JavaScript", image: javascriptImg },
      { name: "TypeScript", image: typescriptImg },
      { name: "Java", image: javaImg},
    ],
  },
  {
    category: "Back-end",
    skills: [
      { name: "Node.js", image: nodeImg },
      { name: "Java", image: javaImg},
      { name: "Spring Boot", image: springBootImg },
    ],
  },
  {
    category: "FrameWorks",
    skills: [
      { name: "Spring Boot", image: springBootImg },
    ],
  },
];

const MySkills = () => {
  return (
    <div className="skills-page">
      {/* Primeira seção: título */}
      <section className="skills-header">
        <h2 className="section-title">
          Essas são as <br /> tecnologias que estou utilizando:
        </h2>
      </section>

      {/* Segunda seção: MySkills */}
      <section className="my-skills">
        {skillsData.map((category, index) => (
          <div className="skills-container" key={index}>
            <h3>{category.category}</h3>
            {category.skills.map((skill, idx) => (
              <div className="skill-item" key={idx}>
                <img src={skill.image} alt={skill.name} className="skill-icon" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MySkills;
