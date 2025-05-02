function TareaList({ tareas, setTareas }) {

  const tareaRealizada = (id) => {
    setTareas((tareas) =>
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, realizada: !tarea.realizada } : tarea,
      ),
    );
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas([...tareasActualizadas]);
  };

  return (
    <div>
      <ul>
        {tareas.map((tarea) => (
          <li
            key={`${Date.now()}-${Math.random()}`}
            style={{
              textDecoration: tarea.realizada ? 'line-through' : 'none',
            }}
          >
            {tarea.tarea}
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
            <button onClick={() => tareaRealizada(tarea.id)}>Realizada</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TareaList;
