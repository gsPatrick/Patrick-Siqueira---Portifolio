import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe'

function ProjectPage() {
    return (
      <div className="project-page">
        <div className="container">
            <Header />  
            <AboutMe />
        </div>
      </div>
    );
  }
  
  export default ProjectPage;