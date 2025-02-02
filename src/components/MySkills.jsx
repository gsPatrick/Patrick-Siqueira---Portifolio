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
import NestImg from '../assets/technologies/NestIcone.png';
import NextImg from '../assets/technologies/NextIcone.png'
import PrimaImg from '../assets/technologies/PrismaIcone.png'
import doissxc from '../assets/technologies/2sxc.png'
import Github from '../assets/technologies/Github.png'
import Nginx from '../assets/technologies/Nginx.png'
import Docker from '../assets/technologies/Docker.png'
import CSharp from '../assets/technologies/CSharp.png'
import Dnn from '../assets/technologies/Dnn.png'
import DotNet from '../assets/technologies/DotNet.png'
import AspNet from '../assets/technologies/AspNet.png'


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
    category: "Front-end, Design e WEB",
    skills: [
      { name: "React.js", image: reactImg },
      { name: "Next.js", image: NextImg },
      { name: "2sxc", image: doissxc },
      { name: "Vite", image: viteImg },
      { name: "Figma", image: figmaImg },
      { name: "ASP.NET", image: AspNet },
    ],
  },
  {
    category: "Linguagens",
    skills: [
      { name: "JavaScript", image: javascriptImg },
      { name: "TypeScript", image: typescriptImg },
      { name: "Java", image: javaImg},
      { name: "C#", image: CSharp},
    ],
  },
  {
    category: "Back-end",
    skills: [
      { name: "Node.js", image: nodeImg },
      { name: "Nest.js", image: NestImg },
      { name: "Java", image: javaImg},
      { name: "Spring Boot", image: springBootImg },
      { name: "C#", image: CSharp},
      { name: ".NET Core", image: DotNet },
    ],
  },
  {
    category: "FrameWorks",
    skills: [
      { name: "Spring Boot", image: springBootImg },
      { name: "Nest.js", image: NestImg },
      { name: "Next.js", image: NextImg },
      { name: ".NET Core", image: DotNet },
      { name: "ASP.NET", image: AspNet },
      
    ],
  },
  {
    category: "DevOPS",
    skills: [
      { name: "Docker", image: Docker },
      { name: "Github", image: Github },
      { name: "Nginx", image: Nginx },
      
    ],
  },

  // {
  //   category: "Banco de Dadoas",
  //   skills: [
  //     { name: "MySQL", image: springBootImg },
  //     { name: "PostgreSQL", image: NestImg },
  //     { name: "MariaDB", image: NextImg },
  //     { name: "MongoDB", image: NextImg },
  //   ],
  // },

  {
    category: "CMS",
    skills: [
      { name: "DotNetLuke", image: Dnn },
      { name: "2SXC", image: doissxc },
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
