const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count',(request, response, next) => {
    BillingCycle.count((error, value) => {

        if(error){
            response.status(500).json({errors: [error]})
        } else {
            response.json({value})
        }
    })
})

BillingCycle.route('summary',(request, response, next) => {
    // BillingCycle.summary((error, value) => {
        response.send({value: "ok"})
    // })
})

module.exports = BillingCycle