import StatusBadge from "./Components/StatusBadge";

export default function App() {
  return (
    <div>
      <h1>Status dos Usuários</h1>
      <p>
        Usuário 1: <StatusBadge status="ativo" />
      </p>
      <p>
        Usuário 2: <StatusBadge status="inativo" />
      </p>
      <p>
        Usuário 3: <StatusBadge status="pendente" />
      </p>
    </div>
  );
}