import React from 'react'

class CarProfileSection extends React.Component{
    render(){
        return(
            <div>
                <div className='profile-section-container'>
                    <div className='profile-title'>Car Profile</div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>Brand:</div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>Model:</div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>Color:</div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>
                            Plate Number:
                        </div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'><i className="fa fa-lock"/>&nbsp;Driver License:</div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>Describe Your car:</div>
                        <div className='col-xs-8'>
                            <textarea defaultValue='' className='textarea'/>
                        </div>
                    </div>
                </div>
                <button className='profile-save'>Save</button>
            </div>

        )
    }
}

export default CarProfileSection