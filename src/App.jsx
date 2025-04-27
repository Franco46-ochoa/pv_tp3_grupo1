import { useState } from 'react';
import TaskInput from "./Componentes/TaskInput.jsx";
import TaskList from './Componentes/TaskList.jsx';
function App() {
  const [Productos, setProductos]=useState([]);

  return (
    <>
      <div>
        <TaskInput Productos={[Productos, setProductos]}></TaskInput>
        <TaskList Productos={Productos}></TaskList>
      </div>
    </>
  )
}

export default App

