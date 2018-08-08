import React from 'react'
import SearchBar from "./SearchBar";

class Homepage extends React.Component{
    _renderSearchBar=()=>{
        return(
            <div style={{display:'flex', margin: '80px auto' }}>
                <i className='fa fa-map-marker' aria-hidden='true'/>
                <input/>
                <button>Search</button>
            </div>
        )
    }
    render(){
        const background=require('../../static/homepage-bg.jpg')
        return(
            <div style={{height:'100vh', backgroundImage:`url(${background})`,backgroundSize: 'cover'}}>
                {this._renderSearchBar()}
                <SearchBar/>
                <SearchBar/>
            </div>
        )
    }
}

export default Homepage