import { useState } from 'react';

function TareaInput(props) {
  const [tareas, setTareas] = props.tareas;
  const [tarea, setTarea] = useState('');

  const handleSubmit = () => {
    /* Realizar validaciones (claves) */

    setTareas([...tareas, { id: Date.now(), tarea: tarea, realizada: false }]);
    setTarea('');
  };

  return (
    <div>
      <label>Tarea: </label>
      <input
        type='text'
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Guardar</button>
    </div>
  );
}

export default TareaInput;
