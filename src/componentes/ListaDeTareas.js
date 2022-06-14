import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from './Tarea';

function ListaDeTareas() {
  let tareasAlmacenadas = localStorage.getItem('tareas');
  if (tareasAlmacenadas) {
    tareasAlmacenadas = JSON.parse(tareasAlmacenadas);
  } else {
    tareasAlmacenadas = [];
  }

  const [tareas, setTareas] = useState(tareasAlmacenadas);

  localStorage.setItem('tareas', JSON.stringify(tareas));
  
  const agregarTarea = tarea => {
    console.log(tarea);
    if(tarea.texto.trim()) {  //trim quita espacios al principio y al final, se prueba que no sea una cadena no vacia
      tarea.texto =  tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas)
    }
  }

  const eliminarTarea = id => {
    const tareasActalizadas = tareas.filter(tarea => tarea.id != id) //filter es como un map va a recorrer el arreglo tareas
    setTareas(tareasActalizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada =  !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }


  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {  
          tareas.map(tarea =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          )
        }
      </div>
    </>    
  );      
}

export default ListaDeTareas;