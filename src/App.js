import React from 'react';
import './App.css';

import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import ListaCitas from './components/ListaCitas'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Titulo title="Reserva de citas medicas"/>
        <Formulario/>
        <ListaCitas/>
      </div>
    );
  }
  
}

export default App;
