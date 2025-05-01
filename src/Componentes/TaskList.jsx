function TaskList({ Productos }) {
    return (
      <div>
        <h2>Lista de Productos</h2>
        <ul>
          {Productos.map((producto, index) => (
            <li key={index}>
              Descripcion: {producto.descripcion} - Precio: ${producto.precio}
              <button type="button" >Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
}
  
export default TaskList;
