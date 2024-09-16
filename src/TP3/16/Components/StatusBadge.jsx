export default function StatusBadge({ status }) {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'ativo':
        return { backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px' };
      case 'inativo':
        return { backgroundColor: 'gray', color: 'white', padding: '5px 10px', borderRadius: '5px' };
      case 'pendente':
        return { backgroundColor: 'orange', color: 'white', padding: '5px 10px', borderRadius: '5px' };
      default:
        return { backgroundColor: 'lightgray', color: 'black', padding: '5px 10px', borderRadius: '5px' };
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'ativo':
        return 'Ativo';
      case 'inativo':
        return 'Inativo';
      case 'pendente':
        return 'Pendente';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <span style={getBadgeStyle(status)}>
      {getStatusText(status)}
    </span>
  );
}