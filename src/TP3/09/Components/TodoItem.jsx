export default function TodoItem(props) {
  const handleComplete = () => {
    if (props.onComplete) {
      props.onComplete();
    }
  };

  return (
    <li style={{ textDecoration: props.isCompleted ? 'line-through' : 'none' }}>
      {props.task}
      <button onClick={handleComplete} disabled={props.isCompleted}>
        Concluir
      </button>
    </li>
  );
}