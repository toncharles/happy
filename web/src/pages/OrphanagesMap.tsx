import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {FiArrowRight, FiPlus} from 'react-icons/fi';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

import mapMakerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';


interface Orphanage {
  id: number;
  latitude: number;
  longitude:number;
  name: string;
}


function OrphanagesMap() {
  const[orphanages, setOrphanages] = useState<Orphanage[]>([]);

  //console.log(orphanages);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages (response.data);
    });
  }, []);

  
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

        {orphanages.map(orphanage => {
          return (
            <Marker 
              key={orphanage.id}
              icon={mapIcon} 
              position={[orphanage.latitude,orphanage.longitude]} 
            >
          <Popup className="map-popup" closeButton= {false} minWidth={240} maxWidth={240} >
            {orphanage.name}
            <Link to={`/orphanage/${orphanage.id}`}>
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
          )
        })}

      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#ffff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;