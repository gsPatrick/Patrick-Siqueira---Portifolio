import React from 'react';
import { Link } from 'react-router-dom';
import Projetos from '../components/Projetos'
import Header from '../components/Header';
import Footer from '../components/Footer'

function ProjectPage() {
    return (
      <div className="project-page">
        <div className="container">
        <Header />
          <Projetos /> {/* Renderize o componente Projetos */}
        </div>
        <Footer />
      </div>
      
      
    );
  }
  
  export default ProjectPage;