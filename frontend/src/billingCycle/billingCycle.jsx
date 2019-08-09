import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabsContent from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'

class BillingCycle extends Component {
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
                            <TabContent id='tabList'>Content Tab List</TabContent>
                            <TabContent id='tabCreate'>Content Tab Create</TabContent>
                            <TabContent id='tabUpdate'>Content Tab Update</TabContent>
                            <TabContent id='tabDelete'>Content Tab Delete</TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>)
    }
}

export default BillingCycle