import React from 'react'
import {DatePicker, Radio} from 'antd'

const {RangePicker}=DatePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class CheckOutBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            unit:'hour'
        }
    }
    onChangeUnit=(e)=>{
        this.setState({unit: e.target.value})
    }
    render(){
        return(
            <div className='checkout-box-container'>
                <div style={{paddingBottom:'25px', borderBottom:'1px solid #C9C9C9'}}>
                    <h2 style={{display:'inline'}}>$1</h2> per {this.state.unit}
                </div>
                <div>
                    <div style={{margin:'20px 0'}}>
                        Rent by
                        <RadioGroup className='option-group' onChange={this.onChangeUnit} defaultValue='hour'>
                            <RadioButton className='option-group-button' value='hour'>hour</RadioButton>
                            <RadioButton className='option-group-button' value='day'>day</RadioButton>
                            <RadioButton className='option-group-button' value='month'>month</RadioButton>
                        </RadioGroup>
                    </div>
                    <div style={{paddingBottom:'25px', borderBottom:'1px solid #C9C9C9'}}>
                        <div style={{margin:'10px 0'}}>Time</div>
                        <RangePicker showTime={{ format: 'HH:mm' }}
                                     format="YYYY-MM-DD HH:mm"
                                     placeholder={['Check In', 'Check Out']}
                        />
                    </div>
                    <button className='checkout-button'>Book</button>

                </div>
            </div>
        )
    }
}

export default CheckOutBox