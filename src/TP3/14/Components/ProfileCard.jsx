export default function ProfileCard({ name, age }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>
        Idade: {age ? age : 'Idade não disponível'}
      </p>
    </div>
  );
}