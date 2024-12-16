import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import Footer from '../components/Footer'

function ProjectPage() {
    return (
      <div className="project-page">
        <div className="container">
            <Header />  
            <Education />
            <AboutMe />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default ProjectPage;