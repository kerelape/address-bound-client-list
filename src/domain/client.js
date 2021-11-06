
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