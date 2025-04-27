function TaskItem({ Productos }) {
    return (
      <div>
        <h2>Lista de Productos</h2>
        <ul>
          {Productos.map((producto, index) => (
            <li key={index}>
              Artículo: {producto.Articulo} - Precio: ${producto.Precio}
            </li>
          ))}
        </ul>
      </div>
    );
}
  
export default TaskItem;
