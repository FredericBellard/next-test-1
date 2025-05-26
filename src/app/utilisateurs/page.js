import Link from "next/link";

export default function Utilisateurs() {
  return (
    <div className="bg-green-500 m-4 p-4 rounded-2xl">      
      <h1 className="text-2xl">Utilisateurs</h1>
      <p>Voici la liste de mes utilisateurs</p>
        <button className="bg-blue-950 m-2 p-2 rounded-2xl">
           <Link href={"/"}>
            Accueil
            </Link>
      </button>
      <button className="bg-blue-950 m-2 p-2 rounded-2xl">
            <a href="/utilisateurs/creer">
            Créer un utilisateur
            </a>
      </button>
            <button className="bg-blue-950 m-2 p-2 rounded-2xl">
            <a href="/utilisateurs/supprimer">
            Supprimer un utilisateur
            </a>
      </button>
    </div>
  );
}
