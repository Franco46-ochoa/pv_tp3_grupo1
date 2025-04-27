import { useState } from 'react';
import TaskInput from "./Componentes/TaskInput.jsx";
import TaskItem from './Componentes/TaskItem.jsx';
function App() {
  const [Productos, setProductos]=useState([]);

  return (
    <>
      <div>
        <TaskInput Productos={[Productos, setProductos]}></TaskInput>
        <TaskItem Productos={Productos}></TaskItem>
      </div>
    </>
  )
}

export default App

