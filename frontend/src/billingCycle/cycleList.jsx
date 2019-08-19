import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {listCycles, startCycleEdit} from './billingCycleActions'
import Button from '../common/template/button'

class CycleList extends Component{
    componentWillMount(){
        this.props.listCycles()
    }

    renderRows(){
        const dataList = this.props.cycles || []
        return dataList.map(item => (
                <tr key={item._id}>
                    <td>{item.name}</td> 
                    <td>{item.month}</td>
                    <td>{item.year}</td>
                    <td>
                        <Button id='alterar' name='Alterar' icon='pencil' type='warning' 
                            onClick={() => {this.props.startCycleEdit(item)}}/>
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
                        <th>Ações</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({listCycles, startCycleEdit}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps) (CycleList)