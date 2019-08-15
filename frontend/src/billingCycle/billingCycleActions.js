import axios from 'axios'
import {toastr} from 'react-redux-toastr'

const URL_BASE = 'http://localhost:3003/api'

function listCycles(){
    var  request = axios.get(`${URL_BASE}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_LISTED',
        payload: request
    }
}

function createNew(cycleFields){
    var request = axios.post(`${URL_BASE}/billingCycles`,cycleFields)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
        })
        .catch( e => {
            e.response.data.forEach(
                error => toastr.error('Error', error)
            )
        })
    return {
        type: 'BILLING_CYCLE_CREATED',
        payload: request
    }
}

export {listCycles, createNew}