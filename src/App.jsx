import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills'
import Preference from './components/Preference';
import MySkills from './components/MySkills';
import './styles/App.css'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header /> {/* Renderize o componente Header */}
        {/* Resto do seu código JSX aqui */}
        <Summary />
        <Skills />
        <Preference />
      </div>
        <div className="sections">
        <MySkills />
        </div>
    </div>
  );
}

export default App;