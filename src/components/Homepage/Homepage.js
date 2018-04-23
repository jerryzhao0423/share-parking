import React from 'react'

class Homepage extends React.Component{
    render(){
        const background=require('../../static/homepage-bg.jpg')
        return(
            <div style={{height:'100vh', backgroundImage:`url(${background})`,backgroundSize: 'cover'}}>
                <img src='../../static/homepage-bg.jpg'/>
            </div>
        )
    }
}

export default Homepage