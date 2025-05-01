import { useState } from "react";
function TaskInput (props){
    const [Productos, setProductos] = props.Productos;
    const [descripcion, setdescripcion]=useState('');
    const [precio, setprecio]= useState(0);
    const handleSubmit=()=>{
        const existe = Productos.some(producto => producto.descripcion.toLowerCase() === descripcion.toLowerCase()); // verificamos si exciste el articulo y  sin importar si están en mayúsculas o minúsculas)
        if (existe) {
            alert('Este artículo ya fue ingresado.');
            return; // corto acá, no sigue agregando
          }
        setProductos([...Productos, {descripcion:descripcion, precio:precio}]);
    } 
    return (
        <div>
            <label>Ingrese la descripcion del producto</label>
            <input type="text" value={descripcion} placeholder="descripcion" onChange={e => setdescripcion(e.target.value)}/>
            <br/>
            <label>Precio del Producto</label>
            <input type="number" step={0.01} value={precio}  placeholder="Ingrese el precio" onChange={e => setprecio(parseFloat(e.target.value) || 0)} />
            <button type="submit" onClick={handleSubmit}>Ingresar</button>
        </div>
    )
}
export default TaskInput;

