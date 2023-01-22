import React from 'react';
import './App.css';
import Greeter from './components/Greeter';

function App() {
  return (
    <div className="App">
     <Greeter person="Colt" />
     <Greeter person="Daniel" />
     <Greeter person="Miggy" />
    </div>
  );
}

export default App;
