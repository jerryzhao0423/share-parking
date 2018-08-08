import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div style={{display:'flex', margin: '80px auto' }}>
                <i className='fa fa-map-marker' aria-hidden='true'/>
                <input/>
                <button>Search</button>
            </div>
        )
    }
}


export default SearchBar