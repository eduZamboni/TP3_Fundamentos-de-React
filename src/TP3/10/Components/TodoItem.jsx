import React from 'react';

export default function TodoItem({ id, task, isCompleted, onComplete, onTaskDelete }) {
  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {task}
      <button onClick={onComplete} disabled={isCompleted}>
        Concluir
      </button>
      <button onClick={() => onTaskDelete(id)}>
        Excluir
      </button>
    </li>
  );
}