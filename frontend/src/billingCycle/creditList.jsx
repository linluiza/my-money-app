import React, {Component} from 'react'
import {Field, arrayInsert, arrayRemove} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import Button from '../common/template/button'

class CreditList extends Component{
    add(index, item={}){
        if(!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm','credits',index, item)
        }
    }

    remove(index){
        if(!this.props.readOnly){
            this.props.arrayRemove('billingCycleForm','credits',index)
        }
    }

    renderRows(){
        const list = this.props.list || []

        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} component={Input} 
                    placeholder='Informe o nome' readOnly={this.props.readOnly}/></td>
                <td><Field name={`credits[${index}].value`} component={Input} type='number'
                    placeholder='Informe o valor' readOnly={this.props.readOnly}/></td>
                <td>
                    <Button id='add' type='success' icon='plus' onClick={() => this.add(index+1)}/>
                    <Button id='clone' type='warning' icon='clone' onClick={() => this.add(index+1, item)}/>
                    <Button id='delete' type='error' icon='trash-o' onClick={() => this.remove(index)}/>
                </td>
            </tr>
        ))
    }

    render(){
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Lista de Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
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
export default connect(null, mapDispatchToProps) (CreditList)