import React from 'react'
import './Navbar.css'
import Modal from 'react-modal'
import SignUp from "../auth/Signup/Signup";
import LogIn from "../auth/Login/Login";


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            signUpModalOpen:false,
            logInModalOpen:false
        }
    }
    handleSignUpOpen = () => {
        this.setState({signUpModalOpen:true})
    };
    handleSignUpClose = () =>{
        this.setState({signUpModalOpen:false})
    };
    handleLogInOpen=()=>{
        this.setState({logInModalOpen:true})
    };
    handleLogInClose=()=>{
        this.setState({logInModalOpen:false})
    }
    switchToLogIn=()=>{
        this.setState({logInModalOpen:true, signUpModalOpen:false})
    }
    switchToSignUp=()=>{
        this.setState({logInModalOpen:false, signUpModalOpen:true})
    }
    render(){
        return(
            <div>
                <nav className="nav">
                    <div className="nav-logo">ShareParking</div>
                    <ul className="nav-list">
                        <li className="nav-item">Location</li>
                        <li className='nav-item'>Search</li>
                        <li className="nav-item">Help</li>
                    </ul>
                    <div className="nav-sign-container">
                        <div className='nav-log' onClick={this.handleLogInOpen}>Log In</div>
                        <div className='nav-sign' onClick={this.handleSignUpOpen}>Sign Up</div>
                    </div>
                </nav>
                <Modal
                    shouldCloseOnOverlayClick={true}
                    isOpen={this.state.signUpModalOpen}
                    onRequestClose={this.handleSignUpClose}
                    className='signup-modal'
                    overlayClassName='signup-overlay'
                    contentLabel="Example Modal" >
                    <a onClick={this.handleSignUpClose}>
                        <i className="fa fa-times closeButton" aria-hidden="true"/>
                    </a>
                    <SignUp/>
                    <div className='switch-modal'>Already have an account?&nbsp;
                        <a className='switch-button' onClick={this.switchToLogIn}>Log in</a>
                    </div>
                </Modal>
                <Modal
                    shouldCloseOnOverlayClick={true}
                    isOpen={this.state.logInModalOpen}
                    onRequestClose={this.handleLogInClose}
                    className='signup-modal'
                    overlayClassName='signup-overlay'
                    contentLabel="Example Modal" >
                    <a onClick={this.handleLogInClose}>
                        <i className="fa fa-times closeButton" aria-hidden="true"/>
                    </a>
                    <LogIn/>
                    <div className='switch-modal'>Don’t have an account?&nbsp;
                        <a className='switch-button' onClick={this.switchToSignUp}>Sign up</a>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Navbar