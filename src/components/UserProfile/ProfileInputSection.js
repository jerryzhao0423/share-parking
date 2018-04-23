import React from 'react'

class PersonalProfileSection extends React.Component{
    render(){
        return(
            <div>
                <div className='profile-section-container'>
                    <div className='profile-title'>Personal Profile</div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>First Name:</div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>Last Name:</div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'><i className="fa fa-lock"/>&nbsp;Email:</div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>
                            <i className="fa fa-lock"/>&nbsp;Phone Number:
                        </div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'><i className="fa fa-lock"/>&nbsp;Address Line1:</div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'><i className="fa fa-lock"/>&nbsp;Address Line2:</div>
                        <div className='col-xs-8'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>City:</div>
                        <div className='col-xs-3'>
                            <input defaultValue='' className='input'/>
                        </div>
                        <div className='col-xs-2 label'>Province:</div>
                        <div className='col-xs-3'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>Postcode:</div>
                        <div className='col-xs-3'>
                            <input defaultValue='' className='input'/>
                        </div>
                        <div className='col-xs-2 label'>Country:</div>
                        <div className='col-xs-3'>
                            <input defaultValue='' className='input'/>
                        </div>
                    </div>
                    <div className='row profile-input'>
                        <div className='col-xs-3 label'>Describe Yourself:</div>
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

export default PersonalProfileSection