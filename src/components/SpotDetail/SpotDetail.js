import React from 'react'
import './SpotDetail.css'
import CheckOutBox from "./CheckOutBox";

class SpotDetail extends React.Component{
    render(){
        return(
            <div>
                <div className='detail-container'>
                    <div className='row'>
                        <div className='col-xs-7'>
                            <div className='detail-title-container'>
                                <h1 className='detail-title'>Nice Parking Spot Near Yonge/ Finch</h1>
                                <div className='detail-location'>Toronto</div>
                            </div>
                            <div className='detail-description'>The suite is a self contained one bedroom loft style apartment in a newly renovated 120+ year old Victorian home. Located in the heart of Roncesvalles Village in Toronto's vibrant West End, the suite is conveniently located close to multiple transit access points. It is just a short walk to Queen St W or Roncesville Ave and all the shops, restaurants and bars they have to offer . Maple hardwood floors, 12' ceiling, and modern finishes characterize this stylish suite.
                                "Free high-speed WIFI"</div>
                            <div className='detail-contact'>Contact host</div>

                            <div className='detail-rules'>Location</div>

                            <div className='detail-rules'>Parking Rules</div>
                            <div>1234</div>

                            <div className='detail-rules'>Cancellations</div>
                            <div>1234</div>

                            <div className='detail-review'>Reviews</div>

                        </div>
                        <div className='col-xs-5 checkout-box'>
                            <CheckOutBox/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SpotDetail