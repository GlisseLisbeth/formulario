import React, { Component } from 'react';

import { connect } from 'react-redux';

class Cita extends Component {
  handleClick = (id)=>{
    this.props.eliminarCita(id)
  }
  render() {
    const {
      id,
      name,
      lastName,
      direction,
      date,
      time,
      description
    } = this.props.cita
    return (
      <div className="card" style={{maxWidth: '18em'}}>
              <div className="card-header">
                Descrpcion de cita
              </div>
              <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item"><strong>Nombre: </strong> {name}</li>
                <li className="list-group-item"><strong>Apellidos: </strong> {lastName}</li>
                <li className="list-group-item"><strong>Direccion: </strong> {direction}</li>
                <li className="list-group-item"><strong>Fecha: </strong> {date}</li>
                <li className="list-group-item"><strong>Hora: </strong> {time}</li>
                <li className="list-group-item"><strong>Sintomas: </strong> {description}</li>
              </ul>
              </div>
              <div className="card-footer">
                <button 
                  onClick={()=> this.props.eliminarCita(id)}
                  className="btn btn-danger float-right">Eliminar</button>
              </div>
            </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    eliminarCita: (citaId) => dispatch({type:'REMOVE_CITA', citaId})
  }
}
export default connect(null, mapDispatchToProps)(Cita);