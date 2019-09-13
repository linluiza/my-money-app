module.exports = (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*")
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS, FETCH, DELETE")
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, Authorization")
    next()
}