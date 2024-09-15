import Greeting from './Components/Greeting';

export default function App() {
  return (
    <div>
      <Greeting name="João" age="30" />
      <Greeting name="Maria" age="20"/>
      <Greeting name="Pedro" age="35"/>
    </div>
  );
}