import React from 'react'
import { Link} from 'react-router-dom'

export default props => (
    <li>
        <Link to={props.url}>
            <i className={`fa fa-${props.icon}`}></i>
            <span>{props.label}</span>
        </Link>
    </li>
)