import React from "react"
import ReactDOM from "react-dom"
import {getStreets} from "./app/api"
import SearchBar from "./app/ui/SearchBar"

function App() {
    const [streets, setStreets] = React.useState(null)
    React.useEffect(() => {
        getStreets().then(setStreets)
    }, [])
    return <SearchBar streets={streets} onChoseApartment={console.log} />
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)