import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {listCycles} from './billingCycleActions'

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
const mapDispatchToProps = dispatch => bindActionCreators({listCycles}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps) (CycleList)