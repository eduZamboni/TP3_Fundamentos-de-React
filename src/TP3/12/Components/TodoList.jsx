import React, { useState } from 'react';
import List from './List';

export default function TodoList({ tarefas, addTask, completeTask, deleteTask, updateTask }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>

      <List
        tarefas={tarefas}
        completeTask={completeTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}