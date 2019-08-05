import React, {Component} from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

const urlBackend = 'http://localhost:3003'

class Dashboard extends Component{

    render () {
        return (
        <div>
            <ContentHeader title="Dashboard" subtitle="versao 1.0" />
            <Content>
                <Row>
                    <ValueBox cols='12 4' color='green' value='R$10' text='Total de Créditos' icon='bank' />
                    <ValueBox cols='12 4' color='red' value='R$10' text='Total de Débitos' icon='credit-card' />
                    <ValueBox cols='12 4' color='blue' value='R$0' text='Consolidado' icon='money' />
                </Row>
            </Content>
        </div>
        )
    }
}

export default Dashboard
