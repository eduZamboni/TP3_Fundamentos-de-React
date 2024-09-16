import React, { useState } from 'react';
import TodoItem from './TodoItem';

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

      <ul>
        {tarefas.map((tarefa) => (
          <TodoItem
            key={tarefa.id}
            id={tarefa.id}
            task={tarefa.text}
            isCompleted={tarefa.isCompleted}
            onComplete={() => completeTask(tarefa.id)}
            onTaskDelete={() => deleteTask(tarefa.id)}
            onTaskUpdate={updateTask}
          />
        ))}
      </ul>
    </div>
  );
}