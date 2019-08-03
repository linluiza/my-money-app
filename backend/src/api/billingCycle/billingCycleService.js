const BillingCycle = require('./billingCycle')
const errorParser = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post',errorParser).after('put',errorParser)

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
    BillingCycle.aggregate([{
        $project : {credit: {$sum: "$credits.value"}, debit: {$sum: "$debts.value"}}
    },{
        $group: {_id: null, credit: {$sum: "$credit"}, debit: {$sum: "$debit"}}
    },{
        $project: {_id: 0, credit: 1, debit: 1}
    }], (error, result) => {
        if(error){
            response.status(500).json({errors: [error]})
        } else{
            response.json(result)
        }
    })
})

module.exports = BillingCycle