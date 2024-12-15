import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Preference from './components/Preference';
import MySkills from './components/MySkills';
import ProjectPage from './pages/ProjectPage'; // Importe a nova página
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
                <div className="sections">
                  <MySkills />
                </div>
                {/* <div className="container">
                <Cliente />
                </div> */}
              </div>
            }
          />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
