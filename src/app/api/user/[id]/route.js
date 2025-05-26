import axios from "axios";

export async function GET() {

    const res = await axios.get("http://randomuser.me/api");
    const userAll = res.data;

    const userSimple = {
         "nom" : userAll.results[0].name.first,
         "prenom" : userAll.results[0].name.last,
         "adressEmail" : userAll.results[0].email,
         "img" : userAll.results[0].picture.large
    }


    return Response.json({ userSimple })
    
}