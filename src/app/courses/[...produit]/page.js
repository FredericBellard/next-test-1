export default async function ListeCourses({ params }) {
    const {produit} = await params
    console.log(produit)

    return (
        <div className="flex flex-col align-middle items-center m-4 p-4">
            <h1 className="text-4xl">Ma liste de courses</h1>
            <ul>
             {produit.map((element, key)=>{ return <li key={key} className="m-2 p-2 rounded-2xl bg-gray-900">{element}</li>})}           
            </ul>
        </div>
    )
}
