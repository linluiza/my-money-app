import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContent from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'

import {selectTab, showTabs} from '../common/tabs/tabActions'
import CycleList from './cycleList'
import CycleForm from './cycleForm'
import {createNew, updateCycle} from './billingCycleActions'

class BillingCycle extends Component {
    componentWillMount(){
        this.props.selectTab(this.props.tab.selected || 'tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return(
            <div>
                <ContentHeader title="Ciclos de Pagamento" subtitle="Cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <CycleList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <CycleForm onSubmit={this.props.createNew} buttonLabel='Submit'></CycleForm>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <CycleForm onSubmit={this.props.updateCycle} buttonLabel='Update'></CycleForm>
                            </TabContent>
                            <TabContent id='tabDelete'>Content Tab Delete</TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>)
    }
}
const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators(
    {selectTab, showTabs, createNew, updateCycle}, 
    dispatch)

export default connect(mapStateToProps,mapDispatchToProps) (BillingCycle)