import {Link} from 'react-router-dom';
import {FiArrowRight, FiPlus} from 'react-icons/fi';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMakerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';


const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor:[170, 0]
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMakerImg} alt="happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </footer>
      </aside>

      <MapContainer 
        center={[-16.6799799,-49.2577286]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker 
          icon={mapIcon} 
          position={[-16.6799799,-49.2577286]} 
        >
          <Popup className="map-popup" closeButton= {false} minWidth={240} maxWidth={240} >
            Teste
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>

      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#ffff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;