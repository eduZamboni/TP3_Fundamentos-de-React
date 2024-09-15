import './Projetos.css';

export default function Projetos() {
  return (
    <section id="projetos" className="sectionProjetos">
      <h2>Projetos Realizados</h2>
      <div className="projetos-container">
        <div className="projeto-item">
          <h3>Calculadora Simples</h3>
          <p>Uma calculadora básica que realiza operações matemáticas simples. Desenvolvida para praticar lógica de programação e manipulação do DOM.</p>
        </div>
        <div className="projeto-item">
          <h3>Jogo da Memória</h3>
          <p>Um jogo da memória simples, onde o usuário deve encontrar pares de cartas iguais. Feito para praticar JavaScript e manipulação de eventos.</p>
        </div>
        <div className="projeto-item">
          <h3>To-Do List</h3>
          <p>Uma lista de tarefas onde o usuário pode adicionar, editar e remover itens. Desenvolvido para praticar React e gerenciamento de estado.</p>
        </div>
        <div className="projeto-item">
          <h3>Landing Page</h3>
          <p>Uma página de apresentação de um produto ou serviço, criada para aprender sobre HTML, CSS e princípios de design responsivo.</p>
        </div>
        <div className="projeto-item">
          <h3>API de Clima</h3>
          <p>Uma aplicação que consome uma API de clima e exibe a previsão do tempo para diferentes cidades. Desenvolvido para aprender sobre consumo de APIs e manipulação de dados em JavaScript.</p>
        </div>
      </div>
    </section>
  );
}