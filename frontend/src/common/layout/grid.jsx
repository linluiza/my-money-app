import React, {Component} from 'react'

class Grid extends Component{
    toCssClasses(cols){
        const colunas = cols ? cols.split(' ') : []
        let classes = ''

        classes += colunas[0] ? `col-xs-${colunas[0]}` : ''
        classes += colunas[1] ? ` col-sm-${colunas[1]}` : ''
        classes += colunas[2] ? ` col-md-${colunas[2]}` : ''
        classes += colunas[3] ? ` col-lg-${colunas[3]}` : ''

        return classes
    }

    render(){
        const gridClasses = this.toCssClasses(this.props.cols || '12')

        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}

export default Grid