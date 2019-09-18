import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {initialize} from 'redux-form'

import {selectTab, showTabs} from '../common/tabs/tabActions'

const URL_BASE = 'http://localhost:3003/api'
const INITIAL_STATE = {credits : [{}], debts: [{}]}

function listCycles(){
    var  request = axios.get(`${URL_BASE}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_LISTED',
        payload: request
    }
}

function createNew(cycleFields){
    return dispatch => {
        console.log(cycleFields)
        axios.post(`${URL_BASE}/billingCycles`,cycleFields)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch(init())
            })
            .catch(e => handleErrors(e))
    }
}

function showTabContent(tabId,item){  
    return [
        showTabs(tabId),
        selectTab(tabId),
        initialize('billingCycleForm', item)
    ]
}

function edit(item){
    return dispatch => {
        console.log(item)
        axios.put(`${URL_BASE}/billingCycles/${item._id}`,item)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
            dispatch(init())
        })
        .catch( e => handleErrors(e))
    }
}
    
function remove(item){
    return dispatch => {
        axios.delete(`${URL_BASE}/billingCycles/${item._id}`)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch(init())
            })
            .catch( e => handleErrors(e))
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

function handleErrors(e){
    if(e.response && e.response.data){
        var errorList = e.response.data
        console.log(e.response.data)
        if(e.response.data.errors){
            errorList = e.response.data.errors
        }

        errorList.forEach(
            error => toastr.error('Error', error)
        )
    } else {
        toastr.error("Erro na comunicação com o servidor!")
    }
}

export {listCycles, createNew, showTabContent, init, edit, remove}