export default async function Direbonjour({ params }) {
    const {prenom} = await params
    return <div>Bonjour {prenom}</div>
}
