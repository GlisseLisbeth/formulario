import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';

const stateInicial = {
  cita:{
    name:'',
    lastName: '',
    direction:'',
    date: '',
    time: '',
    description: ''
  },
  error: false
}

class Formulario extends Component {
  constructor(){
    super();
    this.state = {...stateInicial}
  }
  handleChange = (e)=>{
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    }
    )
  }
  handleClick = (e)=>{
    e.preventDefault();

    const {cita} = this.state;
    //Validar que todos los campos esten llenos
    if(cita.name === '' || 
    cita.lastName === '' || 
    cita.direction === '' || 
    cita.date === '' || 
    cita.time === '' || 
    cita.description === ''){
      this.setState({error: true});
      return
    }

    // Agregar un id A la cita

    const nuevaCita = {...this.state.cita};
    nuevaCita.id = uuidv4();
    // Enviar la cita al padre para que me agregen en listado
    //this.props.agregarCita(nuevaCita);
    this.props.guardarCita(nuevaCita);
    //Limpiar formulario
    this.setState({...stateInicial});

    
  }
  render() {
    //console.log(this.props.listado);
    return (
      <section className="jumbotron">
        <h2>Formulario de citas</h2>
        {
          this.state.error &&
          <div className="alert alert-danger" role="alert">
            Todos los campos son requeridos
          </div>
        }
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Nombre</label>
                <input 
                  type="text" 
                  className="form-control"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.cita.name}
                  placeholder="Ingresar nombre"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Apellido</label>
                <input 
                  type="text" 
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.cita.lastName}
                  name="lastName"
                  placeholder="Ingresar apellido"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="direction">Dirección</label>
              <input 
                type="text" 
                className="form-control"
                name="direction"
                onChange={this.handleChange}
                value={this.state.cita.direction}
                placeholder="Ingresar direccion"/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="date">Fecha</label>
                <input 
                  type="date" 
                  name= "date"
                  onChange={this.handleChange}
                  value={this.state.cita.date}
                  className="form-control"/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="time">hora</label>
                <input 
                  type="time" 
                  name= "time"
                  onChange={this.handleChange}
                  value={this.state.cita.time}
                  className="form-control"/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputZip">Sintomas</label>
                <textarea 
                  type="text" 
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.cita.description}
                  className="form-control"/>
              </div>
            </div>
            <button 
            type="submit" 
            onClick={this.handleClick}
            className="btn btn-primary">Reservar cita</button>
          </form>
        </section>
    );
  }
}

//Para fines visuales

/* const mapStateProps = state => {
  return {
    listado: state.list
  }
} */

const mapDispatchToProps = (dispatch) => {
  //cita: cita
  //El componente va a disparar a la accion
  //La accion va a pasar al reducer

  return {
    guardarCita: (cita) => dispatch({type: 'ADD_CITA', cita})
  }
}
//Connect recibe 2 instancias: En mi formulario envia datos de mi store
//export default connect(mapStateProps, mapDispatchToProps)(Formulario);
export default connect(null, mapDispatchToProps)(Formulario);