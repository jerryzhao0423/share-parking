import React from 'react'
import './Login.css'

class LogIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:"show password",
            type:"password",
        }
        console.log(this.state.show)
    }
    handleShowPassword=()=>{
        this.state.show === "show password"?
            this.setState({show:"hide password", type:'text'}):
            this.setState({show:'show password', type:'password'})
    }
    render(){
        console.log(this.state.show)
        return(
            <div className="login-container">
                <input className="login-input" ref={(email)=>{this.email=email}}
                       placeholder="Email Address"/>
                <input className='login-input' ref={(password)=>{this.password=password}}
                       placeholder="Password" type={this.state.type}/>
                {/*<div>Remember me</div>*/}
                <div className="show-password" onClick={this.handleShowPassword}>{this.state.show}</div>
                <button className='login-button'>Log In</button>
                {/*<div>Forget password?</div>*/}
            </div>
        )
    }
}

export default LogIn