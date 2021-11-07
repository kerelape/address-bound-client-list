import {AddRounded} from "@material-ui/icons"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField} from "@mui/material"
import React from "react"

import {getClients, getStreets, postClient, unbindClient} from "../api"

import SearchBar from "./SearchBar"
import ClientList from "./ClientList"

import "./App.css"

function App() {
    const [streets, setStreets] = React.useState(null)
    const [clients, setClients] = React.useState([])

    const [editing, setEditing] = React.useState(null)

    const [phone, setPhone] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [email, setEmail] = React.useState(null)

    // Load streets when mounted
    React.useEffect(() => {
        getStreets().then(setStreets)
    }, [])

    React.useEffect(() => {
        if (!editing || editing === {}) {
            setPhone(null)
            setName(null)
            setEmail(null)
        } else {
            setPhone(editing.phone)
            setName(editing.name)
            setEmail(editing.email)
        }
    }, [editing])

    function loadClients(apartment) {
        if (apartment) {
            getClients(apartment.id).then(setClients)
        } else {
            setClients([])
        }
    }

    function save(client) {
        postClient(client).then(() => setEditing(null))
    }

    return (
        <div className="app">
            <header>
                <SearchBar streets={streets} onChoseApartment={loadClients} />
            </header>
            <ClientList clients={clients} onEdit={setEditing} onDelete={(it) => unbindClient(it.id)} />
            <Fab color="primary" aria-label="add" onClick={() => setEditing({})}>
                <AddRounded />
            </Fab>
            <Dialog open={Boolean(editing)} onClose={() => setEditing(null)}>
                <DialogTitle>Edit</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        autoFocus
                        margin="dense"
                        label="Phone"
                        type="phone"
                        value={phone}
                        onChange={(it) => setPhone(it.target.value)}
                        variant="outlined" />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Name (Optional)"
                        type="name"
                        value={name}
                        onChange={(it) => setName(it.target.value)}
                        variant="outlined" />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Email (Optional)"
                        type="email"
                        value={email}
                        onChange={(it) => setEmail(it.target.value)}
                        variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditing(null)}>Dismiss</Button>
                    <Button onClick={() => save(editing)}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default App