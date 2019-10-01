import React, {Component} from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Summary from '../common/widget/summary'

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
        const {credit, debt} = this.state
        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="versao 1.0" />
                <Content>
                    <Summary credit={credit} debt={debt} />
                </Content>
            </div>
        )
    }
}

export default Dashboard
