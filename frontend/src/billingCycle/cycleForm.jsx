import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import {init} from './billingCycleActions'

import InputAndLabel from '../common/form/inputAndLabel'

class CycleForm extends Component{
    render(){
        const {handleSubmit} = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field component={InputAndLabel} name='name'
                        label='Nome' cols='12 4'
                        placeholder='Preencha o nome'></Field>
                    <Field component={InputAndLabel} name='month'
                        label='Mês' cols='12 4' type='number'
                        placeholder='Preencha o mês'></Field>
                    <Field component={InputAndLabel} name='year'
                        label='Ano' cols='12 4' type='number'
                        placeholder='Preencha o ano'></Field>
                </div>
                <div className='box-footer'>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>{this.props.buttonLabel}</button>
                        <button className='btn btn-default' onClick={init}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false}) (CycleForm)