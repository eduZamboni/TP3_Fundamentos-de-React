import './Contatos.css';
import { FcAddressBook } from "react-icons/fc";

export default function Contatos() {
  return (
    <section id="contatos" className="sectionContatos">
      <h2><FcAddressBook /> Contato</h2>
      <div className="contato-info">
        <p>Email: <a href="mailto:zamboni.pauloeduardo@gmail.com">zamboni.pauloeduardo@gmail.com</a></p>
        <p>Telefone: <a href="tel:+5541999771918">(41) 99977-1918</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/paulo-eduardo-z-0b3b9784/" target="_blank" rel="noopener noreferrer">Meu Perfil no LinkedIn</a></p>
      </div>
      <div className="contato-form">
        <h3>Envie uma mensagem</h3>
        <form>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}