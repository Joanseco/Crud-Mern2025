import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskForm />
      {/* Aquí es donde eventualmente mostrarás la lista de tareas */}
      <hr/>
      <TaskList />
    </div>
  );
}

export default App;