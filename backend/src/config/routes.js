const express = require('express')

module.exports = function(server){
    //Definir URL base

    const router = express.Router()
    server.use('/api', router)

    //rotasd de Ciclo de Pagamento
    const BillingCycle =  require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}