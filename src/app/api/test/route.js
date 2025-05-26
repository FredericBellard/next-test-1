export async function GET() {

    const data = {
        "nom":"Dupond",
        "prenom":"Fred",
        "ville":"Paris",
        "panier":[
            "farine", "lait", "oeufs"
        ]
    }

      return Response.json({ data })
}