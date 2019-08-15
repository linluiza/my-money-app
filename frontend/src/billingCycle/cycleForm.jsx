import React, {Component} from 'react'

class CycleForm extends Component{
    render(){
        return(
            <form role='form'>
                <div className='box-body'>
                    <div className='form-group'>
                        <label>Name:</label>
                        <input id='cycleName' type='text'></input>
                    </div>
                    <div className='form-group'>
                        <label>Month:</label>
                        <input id='cycleMonth' type='number'></input>
                    </div>
                    <div className='form-group'>
                        <label>Year:</label>
                        <input id='cycleYear' type='number'></input>
                    </div>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn primary'>{this.props.buttonLabel}</button>
                </div>
            </form>
        )
    }
}

export default CycleForm