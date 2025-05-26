export async function GET() {

    const data = {
        "prenom":"Fred",
        "ville":"Paris",
        "panier":[
            "farine", "lait", "oeufs"
        ]
    }

      return Response.json({ data })
}