import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './styles/App.css';


const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a Todo App', completed: true },
    { id: 3, text: 'Master State Management', completed: true },
    { id: 4, text: 'Get a job', completed: false }
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const id = Math.max(...todos.map(todo => todo.id), 0) + 1;
      setTodos([...todos, { id, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="container">
      <div className="todo-list-container">
        <h1>Todo List</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>Add</button>
        <TodoList todos={todos} onDelete={handleDelete} onToggleComplete={handleToggleComplete} />
      </div>
    </div>
  );
};

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
