import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {initialize} from 'redux-form'

import {selectTab, showTabs} from '../common/tabs/tabActions'

const URL_BASE = 'http://localhost:3003/api'
const INITIAL_STATE = {credits:[], debts:[]}

function listCycles(){
    var  request = axios.get(`${URL_BASE}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_LISTED',
        payload: request
    }
}

function createNew(cycleFields){
 //   tratarCamposObrigatoriosEArraysVazios(cycleFields)
    return dispatch => {
        console.log(cycleFields)
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
    
function tratarCamposObrigatoriosEArraysVazios(cycleFields){
    let credits = cycleFields.credits
    let debts = cycleFields.debts

    console.log(cycleFields)
    if(credits){
        credits = credits.filter(function(credit){
            return Object.keys(credit).length > 0
        }).map((credit) => {

            if(credit.value && !credit.name){
                credit['name']=''
            } 
            if(credit.name && !credit.value){
                credit['value']=null
            }
            return credit
        })
        console.log(credits)

        if(credits.length == 0){
            delete cycleFields.credits
        } else{
            cycleFields.credits = credits
        }
    }
    console.log(credits)
    // if(credits && credits.length == 1 && Object.keys(credits[0]).length == 0){
        //     delete cycleFields.credits
        // }
    if(debts && debts.length == 1 && Object.keys(debts[0]).length == 0){
        delete cycleFields.debts
    }
    console.log(cycleFields)
}
    
function showTabContent(tabId,item){  
        return [
            showTabs(tabId),
            selectTab(tabId),
        initialize('billingCycleForm', item)
    ]
}

function edit(item){
 //   tratarCamposObrigatoriosEArraysVazios(item)
    return dispatch => {
        console.log(item)
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
    
function remove(item){
    return dispatch => {
        axios.delete(`${URL_BASE}/billingCycles/${item._id}`)
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

export {listCycles, createNew, showTabContent, init, edit, remove}