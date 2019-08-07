const _ = require('lodash')

module.exports = (request, response, next) => {
    const bundle = response.locals.bundle
    
    if(bundle.errors){
        const errors = parseErrorMessages(bundle.errors)
        response.status(500).json({errors})
    } else {
        next()
    }
}

const parseErrorMessages = (errorsList) => {
    const errors = []

    _.forIn(errorsList,error => errors.push(error.message))

    return errors
}