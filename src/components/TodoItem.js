import React from 'react';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <div className="todo-item">
      <span style={{ flexGrow: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button className="mark-btn" onClick={() => onToggleComplete(todo.id)}>
        {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
