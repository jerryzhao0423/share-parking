import React from 'react'
import MapView from "./MapView";
import SpotCard from "./SpotCard";


class SpotListPage extends React.Component{
    render(){
        return(
            <div style={{marginTop:'160px'}}>
                <div className='row'>
                    <div className='col-xs-7' style={{height:'100vh'}}>
                        <MapView/>
                    </div>
                    <div className='col-xs-5'><SpotCard/></div>

                </div>
            </div>
        )
    }
}

export default SpotListPage