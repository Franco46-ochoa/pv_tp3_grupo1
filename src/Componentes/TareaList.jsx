function TareaList({ tareas, setTareas }) {

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
            <button >Eliminar</button>
            <button >Realizada</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TareaList;
