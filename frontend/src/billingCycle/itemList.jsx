import React, {Component} from 'react'
import {Field, arrayInsert, arrayRemove} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import Button from '../common/template/button'
import If from '../common/operator/if'

class ItemList extends Component{
    add(index, item={name: '', value: null}){
        const {field, readOnly} = this.props
        if(!readOnly){
            this.props.arrayInsert('billingCycleForm',field,index, item)
        }
    }
    
    remove(index){
        const {field, readOnly} = this.props
        if(!readOnly && this.props.list.length > 1){
            this.props.arrayRemove('billingCycleForm',field,index)
        }
    }

    renderRows(){
        const list = this.props.list || []
        const {field, readOnly} = this.props
        const isDebt = field == 'debts'

        if(list.length == 0){
            //inserindo elemento vazio, para possibilitar a inserção de novos elementos
            list.push({})
        }

        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${field}[${index}].name`} component={Input} 
                    placeholder='Informe o nome' readOnly={readOnly} type='text'/></td>
                <td><Field name={`${field}[${index}].value`} component={Input} type='number'
                    placeholder='Informe o valor' readOnly={readOnly} type='text'/></td>
                <If condition={isDebt}>
                    <td><Field name={`${field}[${index}].status`} component={Input}
                        placeholder='Informe o status' readOnly={readOnly}/></td>
                </If>
                <td>
                    <Button id='add' type='success' icon='plus' onClick={() => this.add(index+1)}/>
                    <Button id='clone' type='warning' icon='clone' onClick={() => this.add(index+1, item)}/>
                    <Button id='delete' type='danger' icon='trash-o' onClick={() => this.remove(index)}/>
                </td>
            </tr>
        ))
    }

    render(){

        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If condition={this.props.field == 'debts'}><th>Status</th></If>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps) (ItemList)