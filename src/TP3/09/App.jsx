import TodoList from "./Components/TodoList"
import React, {useState} from "react"

export default function App() {
    const [tarefas, setTarefas] = useState([
      { id: 1, text: 'Estudar React', isCompleted: false },
      { id: 2, text: 'Estudar Node', isCompleted: false },
      { id: 3, text: 'Estudar JavaScript', isCompleted: false }
    ]);
  
    const addTask = (newTaskText) => {
      if (newTaskText.trim() !== '') {
        const newTask = {
          id: Date.now(),
          text: newTaskText,
          isCompleted: false
        };
        setTarefas([...tarefas, newTask]);
      }
    };
  
    const completeTask = (taskId) => {
      setTarefas(tarefas.map(tarefa =>
        tarefa.id === taskId ? { ...tarefa, isCompleted: true } : tarefa
      ));
    };
  
    return (
      <div>
        <TodoList
          tarefas={tarefas}
          addTask={addTask}
          completeTask={completeTask}
        />
      </div>
    );
  }