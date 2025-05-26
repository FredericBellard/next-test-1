export default function Home() {
  return (
    <div className="bg-blue-700 m-4 p-4 rounded-2xl">      
      <h1 className="text-2xl">C&apos;est un projet Next.JS</h1>
      <p>Super ça marche</p>
      <button className="bg-blue-950 m-2 p-2 rounded-2xl">
        <a href="/utilisateurs">
          Liste des utilisateurs
        </a>
      </button>
      <button className="bg-emerald-900 m-2 p-2 rounded-2xl">
        <a href="/produits">
          Liste des produits
        </a>
      </button>
    </div>
  );
}
