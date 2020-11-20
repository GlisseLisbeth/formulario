import React from 'react';
import './App.css';

import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import ListaCitas from './components/ListaCitas'

class App extends React.Component {

  /* 
  Eliminar
  state = {
    listaCitas: []
  }
  agregarCita = (cita)=> {
    this.setState({
      listaCitas : [...this.state.listaCitas, cita]
    })
  } */
  /* 
  eliminarCita = (id)=> {
    const listaCitas = this.state.listaCitas.filter((cita)=>{
      return cita.id !== id;
    })
    this.setState({listaCitas});
  }

  componentDidMount() {
    const listaCitasString = localStorage.getItem('listadoCitas');
    if(listaCitasString){
      this.setState({
        listaCitas: JSON.parse(listaCitasString)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('listadoCitas', JSON.stringify(this.state.listaCitas))
  } */

  render() {
    return (
      <div className="container">
        <Titulo title="Reserva de citas medicas"/>
        <Formulario/>
        <ListaCitas/>
        {/* Eliminar */}
        {/* <Formulario agregarCita={this.agregarCita}/> */}
        {/* <ListaCitas 
          listaCitas={this.state.listaCitas} 
          eliminarCita={this.eliminarCita}/> */}
      </div>
    );
  }
  
}

export default App;
