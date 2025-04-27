import { useState } from "react";
function TaskInput (props){
    const [Productos, setProductos] = props.Productos;
    const [Articulo, setArticulo]=useState('');
    const [Precio, setPrecio]= useState(0);
    const handleSubmit=()=>{
        setProductos([...Productos, {Articulo:Articulo, Precio:Precio}]);
    } 
    return (
        <div>
            <label>Ingrese Articulo</label>
            <input type="text" value={Articulo} placeholder="Articulo" onChange={e => setArticulo(e.target.value)}/>
            <br/>
            <label>Precio del Producto</label>
            <input type="number" step={0.01} value={Precio}  placeholder="Ingrese el precio" onChange={e => setPrecio(parseFloat(e.target.value) || 0)} />
            <button type="submit" onClick={handleSubmit}>Ingresar</button>
        </div>
    )
}
export default TaskInput;

