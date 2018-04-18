import React from 'react'
import './Signup.css'

class SignUp extends React.Component{
    render(){
        return(
            <div className="signup-container">
                <input className="signup-input" ref={(email)=>{this.email=email}}
                       placeholder="Email Address"/>
                <input className='signup-input' ref={(first_name)=>{this.first_name=first_name}}
                       placeholder="First name"/>
                <input className='signup-input' ref={(last_name)=>{this.last_name=last_name}}
                       placeholder="Last name"/>
                <input className='signup-input' ref={(password1)=>{this.password1=password1}}
                       placeholder="Create a Password" type="password"/>
                <input className='signup-input' ref={(password2)=>{this.password2=password2}}
                       placeholder="Confirm Your Password" type="password"/>
                <button className='signup-button'>Sign up</button>
            </div>
        )
    }
}

export default SignUp