import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import Sidebar from "../components/Sidebar";

import '../styles/pages/create-orphanage.css';
import { FiPlus } from "react-icons/fi";


export default function OrphanagesMap() {
  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

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
              </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button type="button" className="confirm-button">
              Confirmar
            </button>
        </form>
      </main>
    </div>
  );
}