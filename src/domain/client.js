/**
 * Creates object containing information about the client
 *
 * @param number Required
 * @param name Optional
 * @param email Optional
 * @return {{number: string, name: string|null, email: string|null}}
 */
function createClient(number, name, email) {
    if (!number) {
        throw new Error("A number must be provided")
    }

    return {
        number: number,
        name: name || null,
        email: email || null
    }
}

export { createClient }