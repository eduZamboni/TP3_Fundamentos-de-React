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

    return (
        <div>
            <h1>
                Lista de Tarefas
            </h1>
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