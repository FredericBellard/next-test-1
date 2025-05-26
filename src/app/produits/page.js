import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-purple-600 m-4 p-4 rounded-2xl">      
      <h1 className="text-2xl">Produits</h1>
      <p>Voici la liste de mes produits</p>
      <button className="bg-blue-950 m-2 p-2 rounded-2xl">
        <Link href={"/"}>
          Accueil
        </Link>
      </button>
    </div>
  );
}