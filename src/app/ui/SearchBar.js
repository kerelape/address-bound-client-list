import {Autocomplete, Paper, TextField} from "@mui/material"
import React from "react"

import "./SearchBar.css"

function SearchBar(params) {
    const {onChoseApartment, streets} = params

    const [houses, setHouses] = React.useState(null)
    const [apartments, setApartments] = React.useState(null)

    const [chosenStreet, chooseStreet] = React.useState(null)
    const [chosenHouse, chooseHouse] = React.useState(null)
    const [chosenApartment, chooseApartment] = React.useState(null)

    // Update houses
    React.useEffect(() => {
        if (chosenStreet) {
            setHouses(["a", "a.2", "b"])
        } else {
            setHouses(null)
            chooseHouse(null)
        }
    }, [chosenStreet])

    // Update apartments
    React.useEffect(() => {
        if (chosenHouse) {
            setApartments(["1", "2", "3", "4"])
        } else {
            setApartments(null)
            chooseApartment(null)
        }
    }, [chosenHouse])

    React.useEffect(() => {
        onChoseApartment(0)
    }, [chosenApartment])

    return (
        <Paper className="search-bar">
            <Autocomplete
                className="field"
                disablePortal
                value={chosenStreet}
                onChange={(_, value) => chooseStreet(value)}
                loading={!streets}
                renderInput={(params) => <TextField {...params} label="Street" />}
                options={streets || []} />
            <Autocomplete
                disablePortal
                className="field"
                value={chosenHouse}
                onChange={(_, value) => chooseHouse(value)}
                loading={!houses}
                loadingText="Choose street..."
                renderInput={(params) => <TextField {...params} label="House" />}
                options={houses || []} />
            <Autocomplete
                disablePortal
                className="field"
                value={chosenApartment}
                onChange={(_, value) => chooseApartment(value)}
                loading={!apartments}
                loadingText="Choose house..."
                renderInput={(params) => <TextField {...params} label="Apartment" />}
                options={apartments || []} />
        </Paper>
    )
}

export default SearchBar