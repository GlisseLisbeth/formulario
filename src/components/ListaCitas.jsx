import React, { Component } from 'react';
import Cita from './Cita'

import { connect } from 'react-redux';

class ListaCitas extends Component {
  render() {
    const {lista, eliminarCita} = this.props
    const element = lista.length>0? <h3>Listado de citas</h3>:
                    <h3>Sin reservas</h3>
    return (
      <section className="jumbotron">
          {element}
          <div className="card-deck">
            {this.props.lista.map((cita)=>{
              return (
                <Cita 
                  key={cita.id} 
                  cita={cita} 
                  eliminarCita={eliminarCita}/>
              )
            })}
            
          </div>
        </section>
    );
  }
}

const mapStateProps = (state) => {
  return {
    lista: state.list
  }
}
export default connect(mapStateProps)(ListaCitas);