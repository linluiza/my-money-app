const _ = require('lodash')

module.exports = (request, response, next) => {
    const bundle = response.locals.bundle
    
    if(bundle){
        response.status(500).json(parseErrorMessages(bundle.errors))
    } else {
        next()
    }
}

parseErrorMessages = (errorsList) => {
    const errors = []

    _.forIn(errorsList,error => errors.push(error.message))

    return errors
}