export default function Temperature({ temp }) {
  return (
    <div>
      {temp > 25 ? 'Está quente!' : 'Está frio!'}
    </div>
  );
}