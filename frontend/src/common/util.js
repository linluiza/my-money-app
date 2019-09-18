import {toastr} from 'react-redux-toastr'

function handleErrors(e){
    if(e.response && e.response.data){
        var errorList = e.response.data
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

export { handleErrors}