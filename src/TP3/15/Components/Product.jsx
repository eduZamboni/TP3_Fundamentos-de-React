export default function Product({ name, price, description }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Preço: R$ {price}</p>
      <p>{description ? description : 'Descrição não disponível'}</p>
    </div>
  );
}