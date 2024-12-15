import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Projetos from '../components/Projetos'

function ProjectPage() {
    return (
      <div className="project-page">
        <div className="container">
            <Header />
          <Projetos /> {/* Renderize o componente Projetos */}
        </div>
      </div>
    );
  }
  
  export default ProjectPage;