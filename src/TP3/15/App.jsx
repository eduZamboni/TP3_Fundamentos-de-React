import Product from "./Components/Product";

export default function App() {
  return (
    <div>
      <h1>Informações dos Produtos</h1>
      <Product name="Notebook" price="3500.00" description="Notebook com 16GB de RAM e 512GB SSD." />
      <Product name="Smartphone" price="1200.00" />
    </div>
  );
}