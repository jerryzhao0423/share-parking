import React from 'react'
import './UserProfile.css'
import PersonalProfileSection from "./ProfileInputSection";
import CarProfileSection from "./CarProfileSection";

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rightSection:'Personal'
        }
    }

    renderRightSection(){
        switch (this.state.rightSection){
            case 'Personal':
                return <PersonalProfileSection/>
            break;
            case  'Car':
                return <CarProfileSection/>
            break;
        }
    }

    renderLeftSection(){
        return(
            <div className='left-section-container'>
                <div className="profile-choice" onClick={()=>{this.setState({rightSection: "Personal"})}}>Personal Profile</div>
                <div className='profile-choice' onClick={()=>{this.setState({rightSection: "Car"})}}>Car Profile</div>
                <div className="profile-choice">Reservations</div>
                <div className="profile-choice">Reviews</div>
            </div>
        )
    }

    render(){
        return(
            <div className='user-profile-container'>
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-3">
                        {this.renderLeftSection()}
                    </div>
                    <div className='col-xs-7'>
                        {this.renderRightSection()}
                    </div>
                </div>


            </div>
        )
    }
}

export default UserProfile