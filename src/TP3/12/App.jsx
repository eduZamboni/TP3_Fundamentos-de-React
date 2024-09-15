import SobreMim from './Components/SobreMim';
import Habilidades from './Components/Habilidades';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Portfólio</h1>
      </header>
      <main>
        <SobreMim />
        <Habilidades />
      </main>
    </div>
  );
}