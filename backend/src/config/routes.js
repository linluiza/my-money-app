const express = require('express')
const auth = require('./auth')

module.exports = function(server){
    /*
     * Rotas abertas
     */

    //Definir URL base
    const protectedApi = express.Router()
    // const router = express.Router()
    server.use('/api', protectedApi)
    protectedApi.use(auth)

    //rotas de Ciclo de Pagamento
    const BillingCycle =  require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')

    /*
     * Rotas abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}