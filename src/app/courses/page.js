"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

function CreerCourses() {

  const [produits, setProduits]=useState([])
  const router = useRouter()
  const [text, setText] = useState("")

  function ajouterProduit(prod){
    setProduits([...produits, prod])
  }

  function rediriger(){
    let url="/courses/"
    produits.forEach(prod=>{
        url =url+prod+"/";
    });
    // produits.join("/");
    router.push(url);
  }

  return (
    <div className="flex flex-col align-middle items-center m-4 p-4">
        <h1 className="text-4xl">Créer une liste de courses</h1>
        <form>
            <input 
                onChange={(e)=>{setText(e.target.value)}} type="text" className="m-2 border border-b-lime-950"
            />
            <button onClick={(e)=>{e.preventDefault(); ajouterProduit(text);}} type="submit" className="border shadow-2xl p-4 m-4 rounded-2 bg-emerald-900"> 
            Ajouter un produit
            </button>
        </form>
        <button type="button" 
         onClick={rediriger}
        className="border shadow-2xl p-4 m-4 rounded-2 bg-orange-600"> 
          Accéder à ma liste
        </button>
    </div>
  );
}


export default CreerCourses