import React from 'react'

export default props => (
    <li className='treeview'>
        <a href={props.url}>
            <i className={`fa fa-${props.icon}`}></i>
            {props.label}
            <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)