import React from "react"
import ClientCard from "./ClientCard"

import "./ClientList.css"

function ClientList(params) {
    const {clients, onDelete, onEdit} = params

    return (
        <div className="client-list">{
            clients.map((it) => <ClientCard client={it} onDelete={onDelete} onEdit={onEdit} />)
        }</div>
    )
}

export default ClientList