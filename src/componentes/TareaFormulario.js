import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = evento => {
    setInput(evento.target.value);
  }

  const manejarEnvio = evento => {
    evento.preventDefault();
    const nuevaTarea = {
      id:uuidv4(),
      texto:input,
      completada: false,
    }
    setInput('');
    props.onSubmit(nuevaTarea)

  };
  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio} >
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea' 
        onChange={manejarCambio} 
        value={input} />
      <button 
        className='tarea-boton' >
          Agregar Tarea
      </button>
    </form>
  );   
}

export default TareaFormulario;