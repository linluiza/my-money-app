import React from 'react'

export default props => (
    <button id={props.id} onClick={props.onClick} className={`btn btn-${props.type}`}>
        <i className={`fa fa-${props.icon}`}></i>
    </button> 
)