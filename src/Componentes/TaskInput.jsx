function TaskInput (props){
    const [Articulos, setArticulo]= props.art;
    const [Precio, setPrecio]=props.pre;
    return (
        <div>
            <label>Ingrese Articulo</label>
            <input type="text" value={Articulos} placeholder="Articulo" onChange={e => setArticulo(e.target.value)}/>
            <br/>
            <label>Precio del Producto</label>
            <input type="number" step={0.00} value={Precio}  placeholder="Ingrese el precio" onChange={e => setPrecio(e.target.value)|| 0}/>
            <button type="submit">Ingresar</button>
        </div>
    )
}
export default TaskInput;