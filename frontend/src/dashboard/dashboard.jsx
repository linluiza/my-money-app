import React, {Component} from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

const urlBackend = 'http://localhost:3003/api/billingCycles'

class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state = {
            credit: 0,
            debt: 0
        }
    }

    componentWillMount(){
        axios.get(`${urlBackend}/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        return (
        <div>
            <ContentHeader title="Dashboard" subtitle="versao 1.0" />
            <Content>
                <Row>
                    <ValueBox cols='12 4' color='green' value={`R$ ${this.state.credit}`} text='Total de Créditos' icon='bank' />
                    <ValueBox cols='12 4' color='red' value={`R$ ${this.state.debt}`} text='Total de Débitos' icon='credit-card' />
                    <ValueBox cols='12 4' color='blue' value={`R$ ${this.state.credit - this.state.debt}`} text='Consolidado' icon='money' />
                </Row>
            </Content>
        </div>
        )
    }
}

export default Dashboard
