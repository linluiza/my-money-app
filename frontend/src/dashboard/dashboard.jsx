import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'
import {getSummary} from './dasboardActions'

// const urlBackend = 'http://localhost:3003/api/billingCycles'

class Dashboard extends Component{
    /*Metodos nbecessarios para popular dados sem redux
    */
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         credit: 0,
    //         debt: 0
    //     }
    // }

    componentWillMount(){
        // axios.get(`${urlBackend}/summary`)
        //     .then(resp => this.setState(resp.data))
        this.props.getSummary()
    }

    render() {
        const {credit, debt} = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="versao 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' value={`R$ ${credit}`} text='Total de Créditos' icon='bank' />
                        <ValueBox cols='12 4' color='red' value={`R$ ${debt}`} text='Total de Débitos' icon='credit-card' />
                        <ValueBox cols='12 4' color='blue' value={`R$ ${credit - debt}`} text='Consolidado' icon='money' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)
