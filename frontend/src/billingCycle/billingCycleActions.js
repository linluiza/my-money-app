import axios from 'axios'

const URL_BASE = 'http://localhost:3003/api'

function listCycles(){
    var  request = axios.get(`${URL_BASE}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_LISTED',
        payload: request
    }
}

export {listCycles}