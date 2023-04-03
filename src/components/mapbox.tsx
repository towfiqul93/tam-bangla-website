

const accessToken = 'pk.eyJ1IjoidG93Zmlxb21pIiwiYSI6ImNqc3Z4N2g1bzBhcmYzeXB2bmFodms0ZzgifQ.roVJmGOqvjsN-vrUVxHG9Q';

import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Marker} from 'react-map-gl';

export function MapBox() {
  return <Map
    mapboxAccessToken={accessToken}
    initialViewState={{
      longitude: 23.835470,
      latitude: 61.454960,
      zoom: 13.5
    }}
    style={{width: 800, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    interactive={true} 
  >;
  <Marker longitude={23.835470} latitude={61.454960} color="red" />
  </Map>
  
}
