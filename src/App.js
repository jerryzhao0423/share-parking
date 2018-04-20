import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import MapView from "./components/SpotList/MapView";
import SpotDetail from "./components/SpotDetail/SpotDetail";


class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar/>
                {/*<div style={{position:'absolute',top:0, left:0, backgroundColor: '#F0F0F0',*/}
                    {/*height: '100vh', width: '100vw'}}>*/}
                    {/*Hello World*/}
                {/*</div>*/}
                <UserProfile/>
            </div>
        )
    }
}

export default App