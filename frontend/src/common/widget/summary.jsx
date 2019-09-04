import React from 'react'

import ValueBox from './valueBox'
import Row from '../layout/row'
import Grid from '../layout/grid'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' value={`R$ ${credit}`} text='Total de Créditos' icon='bank' />
                <ValueBox cols='12 4' color='red' value={`R$ ${debt}`} text='Total de Débitos' icon='credit-card' />
                <ValueBox cols='12 4' color='blue' value={`R$ ${credit - debt}`} text='Consolidado' icon='money' />
            </Row>
        </fieldset>
     </Grid>
)