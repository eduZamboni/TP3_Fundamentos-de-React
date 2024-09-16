import ProfileCard from "./Components/ProfileCard";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [submittedAge, setSubmittedAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Por favor, insira seu nome.');
      return;
    }

    setSubmittedName(name);
    setSubmittedAge(age);
    setName('');
    setAge('');
  };

  return (
    <div className="app-container">
      <h1>Formulário de Perfil</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Nome (obrigatório):</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Idade (opcional):</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="0"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {submittedName && (
        <ProfileCard
          name={submittedName}
          age={submittedAge ? submittedAge : undefined}
        />
      )}
    </div>
  );
}