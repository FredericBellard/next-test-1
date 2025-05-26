export default function Creer() {
  return (
    <div className="bg-green-500 m-4 p-4 rounded-2xl">      
      <h1 className="text-2xl">Nouvel utilisateur</h1>
      <p>Créé un utilisateur</p>
        <button className="bg-blue-950 m-2 p-2 rounded-2xl">
            <a href="/utilisateurs">
            Utilisateurs
            </a>
      </button>
    </div>
  );
}