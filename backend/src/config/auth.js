const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (request, response, next) => {
    //CORS preflight request
    if(request.method === 'OPTIONS'){
        next()
    } else{
        const token = request.body.token || request.query.token || request.headers['authorization']

        if(!token){
            return response.status(403).send({errors: "Token não enviado"})
        }

        jwt.verify(token, env.authSecret, function(err, decoded) {
            if(err){
                return response.status(403).send({errors: "Falha na autenticação de token."})
            } else{
                // request.decoded = decoded
                next()
            }
        })
    }
}