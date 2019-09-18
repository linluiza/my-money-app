import axios from 'axios'

import {handleErrors} from '../common/util'

const urlBackend = 'http://localhost:3003/api'

function getSummary(){
    var request = axios.get(`${urlBackend}/billingCycles/summary`)
                    .catch(e => handleErrors(e))

    return {
        type: "BILLING_SUMMARY_LOADED",
        payload: request
    }
}

export {getSummary}