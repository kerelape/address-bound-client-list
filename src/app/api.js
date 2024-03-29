/**
 * Performs a request by the base api url
 *
 * @param path Relative api path (prefixed with '/')
 * @param options Optional options of the fetch request
 * @return {Promise<Response>}
 */
async function request(path, options) {
    return await fetch("https://dispex.org/api/vtest" + path, options)
}

async function getStreets() {
    const streets = await (await request("/Request/streets", {method: "GET"})).json()
    return streets
        .filter((it) => it.cityId === 1)
        .map((it) => ({id: it.id, name: it.name}))
}

async function getHouses(streetId) {
    const houses = await (await request("/Request/houses/" + streetId, {method: "GET"})).json()
    return houses.map((it) => ({id: it.id, name: it.name}))
}

async function getApartments(houseId) {
    const apartments = await (await request("/Request/house_flats/" + houseId, {method: "GET"})).json()
    return apartments
        .filter((it) => it.typeId === 3)
        .map((it) => ({id: it.id, name: it.name}))
}

async function getClients(addressId) {
    try {
        return await (await request("/HousingStock/clients?addressId=" + addressId)).json()
    } catch (e) {
        return []
    }
}

async function postClient(client) {
    await request("/HousingStock/client", {
        method: "POST",
        body: JSON.stringify(client)
    })
}

async function bindClient(addressId, clientId) {
    await request("/HousingStock/bind_client", {
        method: "PUT",
        body: JSON.stringify({addressId, clientId})
    })
}

async function unbindClient(clientId) {
    await request("/HousingStock/bind_client/" + clientId, {method: "DELETE"})
}

export { getStreets, getHouses, getApartments, getClients, postClient, bindClient, unbindClient }