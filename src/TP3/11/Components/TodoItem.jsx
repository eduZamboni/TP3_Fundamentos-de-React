import React, { useState } from 'react';

export default function TodoItem({ id, task, isCompleted, onComplete, onTaskDelete, onTaskUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setEditedTaskText(newText);
    onTaskUpdate(id, newText);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTaskText}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Salvar</button>
        </>
      ) : (
        <>
          {task}
          <button onClick={onComplete} disabled={isCompleted}>
            Concluir
          </button>
          <button onClick={handleEditClick}>
            Editar
          </button>
          <button onClick={onTaskDelete}>
            Excluir
          </button>
        </>
      )}
    </li>
  );
}