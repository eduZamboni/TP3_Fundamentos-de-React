import './SobreMim.css';

export default function SobreMim() {
  return (
    <section id="sobre-mim" className="sectionSobreMim">
      <h2>Sobre Mim</h2>
      <div className="sobre-mim-container">
        <div className="foto-container">
          <img src="https://via.placeholder.com/150" alt="Foto de Perfil" className="foto-perfil" />
        </div>
        <div className="descricao-container">
          <p>
            Olá! Sou um desenvolvedor em formação, apaixonado por tecnologia e desenvolvimento web. Tenho experiência em trabalhar com diversas linguagens de programação e frameworks, como React, JavaScript, HTML e CSS. Estou sempre em busca de aprender novas tecnologias e melhorar minhas habilidades.
          </p>
        </div>
      </div>
    </section>
  );
}