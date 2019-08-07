import axios from 'axios'

const urlBackend = 'http://localhost:3003/api'

function getSummary(){
    var request = axios.get(`${urlBackend}/billingCycles/summary`)

    return {
        type: "BILLING_SUMMARY_LOADED",
        payload: request
    }
}

export {getSummary}