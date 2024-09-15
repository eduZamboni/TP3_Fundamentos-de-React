import SobreMim from './Components/SobreMim';
import Habilidades from './Components/Habilidades';
import Projetos from './Components/Projetos';
import Contatos from './Components/Contatos';
import Resumo from './Components/Resumo';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Portfólio</h1>
      </header>
      <main>
        <Resumo />
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Contatos />
      </main>
    </div>
  );
}