import './Habilidades.css';
import { FcBullish } from "react-icons/fc";

export default function Habilidades() {
  return (
    <section id="habilidades" className="sectionHabilidades">
      <h2><FcBullish /> Habilidades</h2>
      <div className="habilidades-container">
        <div className="habilidade-categoria">
          <h3>Linguagens de Programação</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="habilidade-categoria">
          <h3>Frameworks e Bibliotecas</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>Flexbox</li>
            <li>CSS Grid</li>
          </ul>
        </div>
        <div className="habilidade-categoria">
          <h3>Ferramentas</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>NPM</li>
          </ul>
        </div>
        <div className="habilidade-categoria">
          <h3>Outras Habilidades</h3>
          <ul>
            <li>Responsividade de Layout</li>
            <li>Navegação por Scroll Suave</li>
            <li>Componentização em React</li>
          </ul>
        </div>
      </div>
    </section>
  );
}