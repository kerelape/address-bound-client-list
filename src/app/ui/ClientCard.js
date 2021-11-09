import {MenuRounded, MoreVertOutlined} from "@material-ui/icons"
import React from "react"
import {Card, IconButton, Menu, MenuItem} from "@material-ui/core"

import "./ClientCard.css"

function ClientCard({client, onEdit, onDelete}) {
    const {phone, name, email} = client

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    function closeMenu() {
        setAnchorEl(null)
    }

    function performEdit() {
        onEdit(client)
        closeMenu()
    }

    function performDelete() {
        onDelete(client)
        closeMenu()
    }

    return (
        <Card className="client-card" component="section">
            <header>
                <h1 className="number">{phone}</h1>
                <IconButton className="options-button" onClick={(it) => setAnchorEl(it.currentTarget)}>
                    <MoreVertOutlined />
                </IconButton>
                <Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
                    <MenuItem onClick={performEdit}>Edit</MenuItem>
                    <MenuItem onClick={performDelete}>Delete</MenuItem>
                </Menu>
            </header>
            <div className="content">
                <span className="detail">
                    <h2 className="prefix">Name</h2>
                    <p className="info">{name || "Unspecified"}</p>
                </span>
                <span className="detail">
                    <h2 className="prefix">Email</h2>
                    <p className="info">{email || "Unspecified"}</p>
                </span>
            </div>
        </Card>
    )
}

export default ClientCard