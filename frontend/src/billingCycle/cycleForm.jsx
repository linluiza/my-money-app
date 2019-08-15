import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

class CycleForm extends Component{
    render(){
        const {handleSubmit} = this.props
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field component='input' name='name'></Field>
                    <Field component='input' name='month'></Field>
                    <Field component='input' name='year'></Field>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn primary'>{this.props.buttonLabel}</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'}) (CycleForm)