import TodoItem from "./TodoItem";

export default function TodoList() {
    const tarefa = [
        'Estudar React',
        'Estudar Node',
        'Estudar JavaScript'
    ];

    return (
        <div>
            <h1>
                Lista de Tarefas
            </h1>
            <ul>
                {tarefa.map((tarefa, index) => (
                    <TodoItem key={index} task={tarefa} />
                ))}
            </ul>
        </div>
    )
}