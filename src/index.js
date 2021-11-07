import React from "react"
import ReactDOM from "react-dom"
import ClientList from "./app/ui/ClientList"
import {getClients, getStreets} from "./app/api"
import SearchBar from "./app/ui/SearchBar"

function App() {
    const [streets, setStreets] = React.useState(null)
    const [chosenApartment, chooseApartment] = React.useState(null)
    const [clients, setClients] = React.useState([])

    React.useEffect(() => {
        getStreets().then(setStreets)
    }, [])

    React.useEffect(() => {
        if (chosenApartment) {
            getClients(chosenApartment.id).then(setClients)
        }
    }, [chosenApartment])

    return (
        <div>
            <header>
                <SearchBar streets={streets} onChoseApartment={chooseApartment} />
            </header>
            <ClientList clients={clients} onEdit={console.log} onDelete={console.log} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)