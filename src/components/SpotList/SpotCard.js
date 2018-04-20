import React from 'react'
import './SpotCard.css'

class SpotCard extends React.Component{
    render(){
        return(
            <div>
                <div className='card-container'>
                    <div className='card-img'>
                        <img alt='pic'/>
                    </div>
                    <div className='card-line1'>TORONTO</div>
                    <div className='card-line2'>Nice Parking Spot Near Yonge/ Finch</div>
                    <div className='card-line3'>$1 CAD per hour</div>
                </div>
            </div>
        )
    }
}

export default SpotCard