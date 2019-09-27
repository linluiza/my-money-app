import {toastr} from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'
import {handleErrors} from '../common/util'

export function login(values){
    return submit(values, `${consts.OAPI_URL}/login`)
}

export function signup(values){
    return submit(values, `${consts.OAPI_URL}/signup`)
}

function submit(values, url){
    console.log("inicio submit")
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                console.log("response="+resp)
                dispatch([
                    {type: 'USER_FETCHED', payload: resp.data}
                ])
            })
            .catch( e => handleErrors(e))
    }
}

export function logout(){
    return {type: 'TOKEN_VALIDATED', payload: false}
}

export function validateToken(token){
    if(token){
        return dispatch => {
            axios.post(`${consts.OAPI_URL}/validateToken`, {token})
                .then(resp => {
                    dispatch([
                        {type: 'TOKEN_VALIDATED', payload: resp.data.valid}
                    ])
                })
                .catch( e => {
                    logout()
                })
        }
    } else {
        logout()
    }
}