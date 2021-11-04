

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map= () => {
  
  const mapStyles = {        
    height: "400px",
    width: "400px"};
  
  const defaultCenter = {
    lat: 38.651606, lng: -90.314901 
  }
  const locations = [
    {
      name: "Hi-Tec Copy",
      location: {lat: 38.651606, lng: -90.314901 
      }}];
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCGS2WtILf44yoYvgazgmoW4wR7qVb9vTM'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={defaultCenter}>
          {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }</GoogleMap>
      
     </LoadScript>
  )
}

export default Map;