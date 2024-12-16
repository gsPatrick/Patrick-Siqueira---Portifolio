import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Preference from './components/Preference';
import MySkills from './components/MySkills';
import ProjectPage from './pages/ProjectPage'; 
import AboutMePage from './pages/AboutMePage'
import Footer from './components/Footer'

// Importe a nova página
// import Cliente from './components/Cliente';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className="app">
                <div className="container">
                  <Header />
                  <Summary />
                  <Skills />
                  <Preference />
                </div>
                <div className="sections container">
                <MySkills />
                </div>
                <div className="app">
                <Footer />
                </div>
                {/* <div className="container">
                <Cliente />
                </div> */}
              </div>
              
            }
            
          />
          
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/AboutMe" element={<AboutMePage />} />

          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
