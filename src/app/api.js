/**
 * Performs a request by the base api url
 * @param path Relative api path (prefixed with '/')
 * @return {Promise<Response>}
 */
async function request(path) {
    return await fetch("https://dispex.org/api/vtest" + path)
}