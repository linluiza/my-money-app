import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Summary from '../common/widget/summary'
import {getSummary} from './dashboardActions'

class Dashboard extends Component{
    componentWillMount(){
        this.props.getSummary()
    }

    render() {
        const {credit, debt} = this.props.summary || {credit:0,debt:0}
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

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)
