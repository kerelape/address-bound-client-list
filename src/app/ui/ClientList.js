import React from "react"
import ClientCard from "./ClientCard"
import PropTypes from "prop-types"

import "./ClientList.css"

function ClientList({clients, onDelete, onEdit}) {
    return (
        <div className="client-list">{
            clients.map((it) => <ClientCard client={it} onDelete={onDelete} onEdit={onEdit} />)
        }</div>
    )
}

ClientList.propTypes = {
    clients: PropTypes.array,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}

export default ClientList