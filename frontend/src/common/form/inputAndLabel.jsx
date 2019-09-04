import React from 'react'

import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} id={props.name} 
                placeholder={props.placeholder} readOnly={props.readOnly}
                type={props.type} className='form-control'></input>
        </div>
    </Grid>
)