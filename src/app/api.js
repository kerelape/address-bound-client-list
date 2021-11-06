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