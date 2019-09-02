import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {initialize} from 'redux-form'

import {selectTab, showTabs} from '../common/tabs/tabActions'

const URL_BASE = 'http://localhost:3003/api'
const INITIAL_STATE = {}

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
                dispatch(init())
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
        selectTab('tabUpdate'),
        initialize('billingCycleForm', item)
    ]
}

function edit(item){
    return dispatch => {
        axios.put(`${URL_BASE}/billingCycles/${item._id}`,item)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch(init())
            })
            .catch( e => {
                e.response.data.forEach(
                    error => toastr.error('Error', error)
                )
            })
    }
}

function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        listCycles(),
        initialize('billingCycleForm', INITIAL_STATE)
    ]
}

export {listCycles, createNew, startCycleEdit, init, edit}