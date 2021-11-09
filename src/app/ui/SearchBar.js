import {Autocomplete, Paper, TextField} from "@mui/material"
import React from "react"

import "./SearchBar.css"
import {getApartments, getHouses} from "../api"

function SearchBar({onChoseApartment, streets}) {

    const [houses, setHouses] = React.useState(null)
    const [apartments, setApartments] = React.useState(null)

    const [chosenStreet, chooseStreet] = React.useState(null)
    const [chosenHouse, chooseHouse] = React.useState(null)
    const [chosenApartment, chooseApartment] = React.useState(null)

    // Update houses
    React.useEffect(() => {
        if (chosenStreet) {
            getHouses(chosenStreet.id).then(setHouses)
        } else {
            setHouses(null)
            chooseHouse(null)
        }
    }, [chosenStreet])

    // Update apartments
    React.useEffect(() => {
        if (chosenHouse) {
            getApartments(chosenHouse.id).then(setApartments)
        } else {
            setApartments(null)
            chooseApartment(null)
        }
    }, [chosenHouse])

    React.useEffect(() => {
        onChoseApartment(chosenApartment || null)
    }, [chosenApartment])

    React.useEffect(() => {
        setApartments(null)
    }, [chosenHouse])

    React.useEffect(() => {
        setHouses(null)
    }, [chosenStreet])

    return (
        <Paper className="search-bar">
            <Autocomplete
                className="field"
                disablePortal
                value={chosenStreet}
                getOptionLabel={(option) => option.name}
                onChange={(_, value) => chooseStreet(value)}
                loading={!streets}
                renderInput={(params) => <TextField {...params} label="Street" />}
                options={streets || []} />
            <Autocomplete
                disablePortal
                className="field"
                value={chosenHouse}
                getOptionLabel={(option) => option.name}
                onChange={(_, value) => chooseHouse(value)}
                loading={!houses}
                loadingText="Choose street..."
                renderInput={(params) => <TextField {...params} label="House" />}
                options={houses || []} />
            <Autocomplete
                disablePortal
                className="field"
                value={chosenApartment}
                getOptionLabel={(option) => option.name}
                onChange={(_, value) => chooseApartment(value)}
                loading={!apartments}
                loadingText="Choose house..."
                renderInput={(params) => <TextField {...params} label="Apartment" />}
                options={apartments || []} />
        </Paper>
    )
}

export default SearchBar