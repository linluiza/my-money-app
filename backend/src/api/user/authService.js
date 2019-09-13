const _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const env = require('../../config/.env')
const User = require('./user')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (response, dbErrors) => {
    const errors = []
    
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return response.status(400).json({errors})
}

const login = (request, response, next) => {
    const email = request.body.email || ''
    const password = request.body.password || ''

    User.findOne({email}, (err, user) => {
        if(err){
            return sendErrorsFromDB(response, err)
        } else if(user && bcrypt.compareSponseync(password, user.password)){
            const token = jwt.sign(user,env.authSecret, {
                expiresponseIn: "1 day"
            })
            const {name, email} = user
            response.json({name, email, token})
        } else {
            return response.status(400).send({errors: ['Usuário/Senha inválidos']})
        }
    })
}

const validateToken = (request, response, next) => {
    const token = request.body.token || ''

    jwt.verify(token, env.authSecret, function(err, decoded){
        return resizeBy.status(200).send({valid: !err})
    })
}


