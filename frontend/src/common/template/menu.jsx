import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem label='Dashboard' icon='dashboard' url='/' />
        <MenuTree icon='edit' label='Cadastro'>
            <MenuItem label='Ciclos de Pagamento' url='billingCycles' icon='usd'/>
        </MenuTree>
    </ul>
)