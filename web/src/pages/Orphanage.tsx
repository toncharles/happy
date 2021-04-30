import {FaWhatsapp} from "react-icons/fa";
import {FiClock, FiInfo} from "react-icons/fi";
import {MapConsumer, MapContainer, Marker, TileLayer} from "react-leaflet";

import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import '../styles/pages/orphanage.css';


export default function Orphanage() {

  return (
    <div id="page-orphanage">
      <Sidebar/>

      <main>
        <div className="orphanage-details">
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Crianças"/>

          <div className="images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Crianças"/>
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Crianças"/>
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Crianças"/>
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Crianças"/>
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Crianças"/>
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Crianças"/>
            </button>
          </div>

          <div className="orphanage-details-content">
            <h1>Lar das crianças</h1>
            <p>Pesta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade.</p>

            <div className="map-container">
              <MapContainer 
              center={[-16.680209,-49.2617028]} 
              zoom={16}
              style={{width: '100%', height: 280}}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              >
                
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker interactive={false} icon={mapIcon} position={[-16.680209,-49.2617028]} />
              </MapContainer>

              <footer>
                <a href="https://www.google.com.br/maps/">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr/>

            <h2>Instruções para visita</h2>
            <p>Venha como se sentir mais a vontade</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda a Sexta <br/>
                08h as 18h
              </div>
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br/>
                fim de semana
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#fff" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}