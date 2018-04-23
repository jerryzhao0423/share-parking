import React from 'react'
import './HostSetUp.css'
import { Steps, TimePicker, DatePicker, Radio } from 'antd';
const Step = Steps.Step;


class HostSetUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentStep:0
        }
    }

    handleNextClick=()=>{
        this.setState({currentStep: this.state.currentStep + 1})
    }
    handleBackClick=()=>{
        this.setState({currentStep: this.state.currentStep - 1})
    }

    render(){
        const step1 = this.state.currentStep===0?{display:'block'}:{display:'none'};
        const step2 = this.state.currentStep===1?{display:'block'}:{display:'none'};
        const step3 = this.state.currentStep===2?{display:'block'}:{display:'none'};
        console.log(this.state.currentStep)
        return(
            <div className='host-container'>
                <div className='row'>
                    <div className='col-xs-offset-1 col-xs-4'>
                        <Steps direction='vertical' current={this.state.currentStep} style={{lineHeight:'6.5'}}>
                            <Step title='Step 1: Some Basic Information'
                                  description='Location, space, and more'
                            />
                            <Step title='Step 2: Set the Scene'
                                  description='Photos, description, title'
                            />
                            <Step title='Step 3: Your Rules'
                                  description='Schedule, price, rules'
                            />
                        </Steps>
                    </div>
                    <div className='col-xs-6'>
                        <div className='questions-container'>
                            <div className='step1' style={step1}>
                                <h2>Step 1: Some Basic Information</h2>
                                <div>
                                    <h3>What kind of places are you listing?</h3>
                                    <div className='row'>
                                        <div className='col-xs-8 basic-info'>
                                            <div>Choose a proper type</div>
                                            <select className='basic-input' style={{height:'30px'}}>
                                                <option>Apartments</option>
                                                <option>Condos</option>
                                                <option>Houses</option>
                                                <option>Townhouses</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xs-8 basic-info'>
                                            <div>What will guest have?</div>
                                            <select className='basic-input' style={{height:'30px'}}>
                                                <option>Entire parking area</option>
                                                <option>Shared parking area</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h3>Where is your place located?</h3>
                                    <div className='row'>
                                        <div className='col-xs-8 basic-info'>
                                            <div>Street address</div>
                                            <input className='basic-input'/>
                                        </div>
                                        <div className='col-xs-4 basic-info'>
                                            <div>Parking number(optional)</div>
                                            <input className='basic-input'/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xs-4 basic-info'>
                                            <div>City</div>
                                            <input className='basic-input'/>
                                        </div>
                                        <div className='col-xs-4 basic-info'>
                                            <div>Province</div>
                                            <input className='basic-input' defaultValue='Ontario'/>
                                        </div>
                                        <div className='col-xs-4 basic-info'>
                                            <div>Postcode</div>
                                            <input className='basic-input'/>
                                        </div>
                                    </div>
                                    <h3>How much space can you provide?</h3>
                                    <div className='row'>
                                        <div className='col-xs-4 basic-info'>
                                            <div>Unit</div>
                                            <select className='basic-input' style={{height:'30px'}}>
                                                <option>m</option>
                                                <option>ft</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xs-4 basic-info'>
                                            <div>Width</div>
                                            <input className='basic-input'/>
                                        </div>
                                        <div className='col-xs-4 basic-info'>
                                            <div>Length</div>
                                            <input className='basic-input'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-offset-6 col-xs-6' style={{textAlign:'right'}}>
                                        <button className='next-button' onClick={this.handleNextClick}>Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className='step2' style={step2}>
                                <h2>Step 2: Set the Scene</h2>
                                <div>
                                    <h3>Name your place</h3>
                                    <div className='setup-scene'>
                                        <input className='basic-input'/>
                                    </div>
                                    <h3>Describe your place</h3>
                                    <div className='setup-scene'>
                                        <textarea className='basic-textarea'/>
                                    </div>
                                    <h3>Show what your spot looks like</h3>
                                    <button className='next-button'>Upload Photos</button>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6' style={{textAlign:'left'}}>
                                        <button className='next-button' onClick={this.handleBackClick}>Back</button>
                                    </div>
                                    <div className='col-xs-6' style={{textAlign:'right'}}>
                                        <button className='next-button' onClick={this.handleNextClick}>Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className='step3' style={step3}>
                                <h2>Step 3: Your Rules</h2>
                                <div>
                                    <h3>Set your price</h3>
                                    <div className='row setup-scene'>
                                        <div className='col-xs-1' style={{textAlign:'right', margin:'5px'}}>$</div>
                                        <input className='col-xs-3 price-input' placeholder='0.00'/>
                                        <div className='col-xs-4' style={{textAlign:'left', margin:'5px'}}>per hour</div>
                                    </div>
                                    <div className='row setup-scene'>
                                        <div className='col-xs-1' style={{textAlign:'right', margin:'5px'}}>$</div>
                                        <input className='col-xs-3 price-input' placeholder='0.00'/>
                                        <div className='col-xs-4' style={{textAlign:'left', margin:'5px'}}>per day</div>
                                    </div>
                                    <div className='row setup-scene'>
                                        <div className='col-xs-1' style={{textAlign:'right', margin:'5px'}}>$</div>
                                        <input className='col-xs-3 price-input' placeholder='0.00'/>
                                        <div className='col-xs-4' style={{textAlign:'left', margin:'5px'}}>per month</div>
                                    </div>
                                    <h3>Set your schedule</h3>
                                    <div className='setup-scene'>
                                        <div>You can change your schedule any time.</div>
                                        <div className='row setup-scene'>
                                            <div className='col-xs-2' style={{paddingTop:'5px'}}>Set time</div>
                                            <div className='col-xs-10'><TimePicker/>&nbsp; ~ &nbsp;<TimePicker/></div>
                                        </div>
                                        <div className='row setup-scene'>
                                            <div className='col-xs-2' style={{paddingTop:'5px'}}>Set date</div>
                                            <div className='col-xs-10'><DatePicker/>&nbsp; ~ &nbsp;<DatePicker/></div>
                                        </div>
                                        <div className='setup-scene'>Options</div>
                                        <Radio.Group defaultValue={1}>
                                            <Radio value={1}>Everyday</Radio>
                                            <Radio value={2}>Only weekdays</Radio>
                                            <Radio value={3}>Only weekends</Radio>
                                        </Radio.Group>
                                    </div>
                                    <h3>Make your rules</h3>
                                </div>
                                <div className='row'>
                                    <div className='col-xs-6' style={{textAlign:'left'}}>
                                        <button className='next-button' onClick={this.handleBackClick}>Back</button>
                                    </div>
                                    <div className='col-xs-6' style={{textAlign:'right'}}>
                                        <button className='next-button'>Finish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default HostSetUp