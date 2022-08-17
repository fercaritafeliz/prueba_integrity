import './App.css';
import 'styled-components';
import React from "react";
import Filtros from './componentes/Filtros';
import Formulario from './Formulario';

function App() {
  
  return (
    <div className="App">
      <h1>Prueba Integrity</h1>
      <Filtros/>
      <Formulario/>

    </div>
  );
}

export default App;
