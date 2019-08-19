import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm} from 'redux-form'

import {selectTab, showTabs} from '../common/tabs/tabActions'

const URL_BASE = 'http://localhost:3003/api'

function listCycles(){
    var  request = axios.get(`${URL_BASE}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_LISTED',
        payload: request
    }
}

function createNew(cycleFields){
    return dispatch => {
        axios.post(`${URL_BASE}/billingCycles`,cycleFields)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch([
                    resetForm('billingCycleForm'),
                    selectTab('tabList'),
                    listCycles(),

                ])
            })
            .catch( e => {
                e.response.data.forEach(
                    error => toastr.error('Error', error)
                )
            })
    }
}

function startCycleEdit(item){   
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate')
    ]
}

function updateCycle(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList')
    ]
}

export {listCycles, createNew, startCycleEdit, updateCycle}