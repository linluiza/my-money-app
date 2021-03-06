const _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const env = require('../../.env')
const User = require('./user')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (response, dbErrors) => {
    const errors = []
    console.log("iniciando sendErrorsFromDB")
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return response.status(400).json({errors})
}

const login = (request, response, next) => {
    const email = request.body.email || ''
    const password = request.body.password || ''
    console.log("iniciando login")

    User.findOne({email}, (err, user) => {
        if(err){
            return sendErrorsFromDB(response, err)
        } else if(user && bcrypt.compareSync(password, user.password)){
            const token = jwt.sign(user,env.authSecret, {
                expiresIn: "1 day"
            })
            console.log("token criado")
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
        return response.status(200).send({valid: !err})
    })
}

const signup = (request, response, next) => {
    const name = request.body.name || ''
    const email = request.body.email || ''
    const password = request.body.password || ''
    const confirmPassword = request.body.confirm_password || ''
    console.log("iniciando signup")
    if(!email.match(emailRegex)){
        return response.status(400).send({errors: ['O email informado está inválido']})
    }

    if(!password.match(passwordRegex)){
        return response.status(400).send({
            errors: [
                "Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, um caractere especial(@#$%) e tamanho entre 6-20."
            ]
        })
    }

    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)

    if(!bcrypt.compareSync(confirmPassword, passwordHash)){
        return response.status(400).send({errors: ['Senhas e confirmação de senha são diferentes']})
    }

    User.findOne({email}, (err, user) => {
        if(err){
            return sendErrorsFromDB(response, err)
        } else if(user){
            return response.status(400).send({errors: ['Usuário já cadastrado']})
        } else{
            const newUser = new User({name, email, password: passwordHash})
            newUser.save(err => {
                if(err){
                    return sendErrorsFromDB(response, err)
                } else{
                    login(request, response, next)
                }
            })
        }
    })
}

module.exports = {login, signup, validateToken}


