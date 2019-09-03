import React, {Component} from 'react'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {init} from './billingCycleActions'
import InputAndLabel from '../common/form/inputAndLabel'
import ItemList from './itemList'
import Summary from '../common/widget/summary'

class CycleForm extends Component{
    render(){
        const {handleSubmit, init} = this.props
        const {readOnly, submitClass, submitLabel, credits, debts} = this.props

        const credit = credits.reduce((sum,credit) => {
            if(credit.value)
                return sum + Number(credit.value)
            else
                return sum
        }, 0)
        const debt = debts.reduce((sum,debt) =>{
            if(debt.value)
                return sum +  Number(debt.value)
            else
                return sum
        }, 0)
        
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field component={InputAndLabel} name='name'
                        label='Nome' cols='12 4'
                        placeholder='Preencha o nome'
                        readOnly={readOnly}>
                    </Field>
                    <Field component={InputAndLabel} name='month'
                        label='Mês' cols='12 4' type='number'
                        placeholder='Preencha o mês'
                        readOnly={readOnly}>
                    </Field>
                    <Field component={InputAndLabel} name='year'
                        label='Ano' cols='12 4' type='number'
                        placeholder='Preencha o ano'
                        readOnly={readOnly}>
                    </Field>

                    <Summary credit={credit} debt={debt} />
                    
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos'/>
                </div>
                <div className='box-footer'>
                    <div className='form-group'>
                        <button type='submit' className={`btn btn-${submitClass}`}>{submitLabel}</button>
                        <button type='button' className='btn btn-default' onClick={init}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }
}

CycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false}) (CycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'), 
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(CycleForm)