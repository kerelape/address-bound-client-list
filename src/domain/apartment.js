/**
 * Creates object containing information about an apartment
 *
 * @param address Required
 * @param clients Required
 * @return {{address: string, clients: array}}
 */
function createApartment(address, clients) {
    if (!address) {
        throw new Error("An address must be provided")
    }

    if (!clients) {
        throw new Error("A list of clients must be provided")
    }

    return { address, clients }
}

export { createApartment }