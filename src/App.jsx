import './App.css';
import { useState } from 'react';
import TaskInput from './Componentes/TaskInput.jsx';
import TaskList from './Componentes/TaskList.jsx';
import TaskItem from './Componentes/TaskItem.jsx';
import Header from './Componentes/Header.jsx';
import Footer from './Componentes/Footer.jsx';
import Titulo from './Componentes/Titulo.jsx';
import TareaInput from './Componentes/TareaInput.jsx';
import TareaList from './Componentes/TareaList.jsx';

function App() {
  const [tareas, setTareas] = useState([
    { id: 0, tarea: 'Crear el repositorio en github', realizada: true },
    { id: 1, tarea: 'Agregar a los colaboradores', realizada: false },
    { id: 2, tarea: 'Crear el proyecto inicial', realizada: false },
  ]);

  const [Productos, setProductos] = useState([
    { Articulo: 'Lapiz', descripcion: 'Lapiz', precio: 100 },
    { Articulo: 'Goma', descripcion: 'Goma', precio: 50 },
    { Articulo: 'Cuaderno', descripcion: 'Cuaderno', precio: 300 },
    { Articulo: 'Regla', descripcion: 'Regla', precio: 150 },
    { Articulo: 'Tijera', descripcion: 'Tijera', precio: 200 },
  ]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Header></Header>
        <Titulo titulo={'Lista de Tareas'}></Titulo>
        <TareaInput tareas={[tareas, setTareas]}></TareaInput>
        <TareaList tareas={tareas} setTareas={setTareas}></TareaList>

        <Titulo titulo={'Listado de Productos'}></Titulo>
        <TaskInput Productos={[Productos, setProductos]}></TaskInput>
        <TaskList Productos={Productos} setProductos={setProductos}></TaskList>
        <TaskItem Productos={Productos}></TaskItem>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
