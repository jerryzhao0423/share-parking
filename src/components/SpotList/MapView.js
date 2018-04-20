import React from 'react'
import GoogleMap from 'google-map-react'

const GOOGLE_API_KEY = 'AIzaSyAWSrk11jcYTtNrQKw95bhR63OueLT64xg'

class MapView extends React.Component{
    componentDidMount(){
        if (navigator&&navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const pos = {
                    lat:position.coords.latitude,
                    lng:position.coords.longitude
                }
            })
        }
    }

    render(){
        return(
            <GoogleMap
                bootstrapURLKeys={{key: GOOGLE_API_KEY,}}
                center={[43.6532, -79.3832]}
                zoom={12}
            />
        )
    }
}

export default MapView