import axios from "axios";
import 'dotenv/config'

// async function Personne() {
//     const res = await axios.get("http://localhost:3000/api/test");

//     console.log(res.data);
//     const text =JSON.stringify(res.data);
//   return (
//     <div>{text}</div>
//   )
// }

// export default Personne

// export default async function Personne({ params }) {
//   const id  = await params;

  export default async function Personne() {
  const id  = 5;

  console.log("******")
  console.log(process.env.BASE_URL)
  console.log(id);
  const url= $(process.env.BASE_URL/api/test)
  const res = await axios.get(url);
console.log(res.data)
  const nom = res.data.userSimple.nom
  const prenom = res.data.userSimple.prenom;
  const email = res.data.userSimple.adressEmail;
  const img = res.data.userSimple.img;

  return ( <div><h1>Nom : {nom}</h1> 
    <h2>Prénom : {prenom}</h2>
    <h3>Email : {email}</h3>
    <img src={img}/>
    </div>
  )
}

