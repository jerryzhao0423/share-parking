import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
//import SpotDetail from "./components/SpotDetail/SpotDetail";


class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}

export default App