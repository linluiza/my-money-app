const _ = require('lodash')

module.exports = (request, response, next) => {
    const bundle = response.locals.bundle
    console.log("bundle: "+ bundle)
    
    if(bundle && bundle.errors){
        console.log("bundle errors: "+bundle.errors)
        response.status(500).json(parseErrorMessages(bundle.errors))
    } else {
        next()
    }
}

const parseErrorMessages = (errorsList) => {
    const errors = []

    _.forIn(errorsList,error => errors.push(error.message))

    return errors
}