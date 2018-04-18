import React from 'react'
import './UserProfile.css'
import ProfileInputSection from "./ProfileInputSection";

class UserProfile extends React.Component{
    renderRightSection(){
        return(
            <div>
                <ProfileInputSection/>
            </div>
        )
    }

    renderLeftSection(){
        return(
            <div className='left-section-container'>
                <div className="profile-choice">Edit Profile</div>
                <div className="profile-choice">Reservations</div>
                <div className="profile-choice">Reviews</div>
            </div>
        )
    }

    render(){
        return(
            <div className='user-profile-container'>
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-2">
                        {this.renderLeftSection()}
                    </div>
                    <div className='col-xs-offset-1 col-xs-7'>
                        {this.renderRightSection()}
                    </div>
                </div>


            </div>
        )
    }
}

export default UserProfile