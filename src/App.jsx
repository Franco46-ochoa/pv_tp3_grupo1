import { useState } from 'react';
import TaskInput from "./Componentes/TaskInput.jsx";
import TaskList from './Componentes/TaskList.jsx';
import TaskItem from './Componentes/TaskItem.jsx';
function App() {
  const [Productos, setProductos] = useState([
    { Articulo: "Lapiz", descripcion: "Lapiz", precio: 100 },
    { Articulo: "Goma", descripcion: "Goma", precio: 50 },
    { Articulo: "Cuaderno", descripcion: "Cuaderno", precio: 300 },
    { Articulo: "Regla", descripcion: "Regla", precio: 150 },
    { Articulo: "Tijera", descripcion: "Tijera", precio: 200 }
  ]);
  
  return (
    <>
      <div>
        <TaskInput Productos={[Productos, setProductos]}></TaskInput>
        <TaskList Productos={Productos}></TaskList>
        <TaskItem Productos={Productos}></TaskItem>
      </div>
    </>
  )
}

export default App

