import TodoItem from "./TodoItem";
import React, { useState } from "react";

export default function TodoList() {
    const [tarefas, setTarefas] = useState([
        { id: 1, text: 'Estudar React', isCompleted: false },
        { id: 2, text: 'Estudar Node', isCompleted: false },
        { id: 3, text: 'Estudar JavaScript', isCompleted: false }
    ]);

    const completeTask = (tarefasId) => {
        setTarefas(tarefas.map(tarefa =>
            tarefa.id === tarefasId ? { ...tarefa, isCompleted: true } : tarefa
        ));
    };

    const [newTaskText, setNewTaskText] = useState("");

    const addTask = () => {
        if (newTaskText.trim() !== "") {
            const newTask = {
                id: tarefas.length + 1,
                text: newTaskText,
                isCompleted: false
            };
            setTarefas([...tarefas, newTask]);
            setNewTaskText("");
        }
    };

    return (
        <div>
            <h1>
                Lista de Tarefas
            </h1>

            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Digite uma nova tarefa"
            />

            <button onClick={addTask}>Adicionar</button>

            <ul>
                {tarefas.map((tarefa) => (
                    <TodoItem
                        key={tarefa.id}
                        task={tarefa.text}
                        isCompleted={tarefa.isCompleted}
                        onComplete={() => completeTask(tarefa.id)}
                    />
                ))}
            </ul>
        </div>
    )
}