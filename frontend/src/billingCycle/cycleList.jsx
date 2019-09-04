import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {listCycles, showTabContent} from './billingCycleActions'
import Button from '../common/template/button'

class CycleList extends Component{
    componentWillMount(){
        this.props.listCycles()
    }

    renderRows(){
        const dataList = this.props.cycles || []
        var {showTabContent} = this.props

        return dataList.map(item => (
                <tr key={item._id}>
                    <td>{item.name}</td> 
                    <td>{item.month}</td>
                    <td>{item.year}</td>
                    <td className='table-actions'>
                        <Button id='alterar' name='Alterar' icon='pencil' type='warning' 
                            onClick={() => {showTabContent('tabUpdate',item)}}/>
                        <Button id='remover' name='Remover' icon='trash-o' type='danger' 
                            onClick={() => {showTabContent('tabDelete',item)}}/>
                    </td>
                </tr>
            ))
    }

    render(){
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th className='table-actions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({cycles: state.billingCycle.cycles})
const mapDispatchToProps = dispatch => bindActionCreators({listCycles, showTabContent}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps) (CycleList)