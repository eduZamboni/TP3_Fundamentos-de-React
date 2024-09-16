import Temperature from "./Components/Temperature";
import { useState } from "react";

export default function App() {
  const [temperature, setTemperature] = useState(0);

  const handleChange = (e) => {
    setTemperature(parseFloat(e.target.value));
  };

  return (
    <div>
      <h1>Verificando a Temperatura</h1>
      <input
        type="number"
        value={temperature}
        onChange={handleChange}
        placeholder="Digite a temperatura em °C"
      />
      <Temperature temp={temperature} />
    </div>
  );
}