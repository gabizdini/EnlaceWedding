import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './MapaFornecedores.css'

const orangeIcon = new L.DivIcon({
  className: 'orange-marker',
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#B85C38" stroke="#9A4A2C" stroke-width="1.5"/>
    <circle cx="12" cy="11" r="5" fill="white"/>
  </svg>`,
  iconSize: [28, 42],
  iconAnchor: [14, 42],
  popupAnchor: [0, -36],
})

const locais = [
  { id: 1, nome: 'Vini Pessoa', categoria: 'Fotógrafo', lat: -21.6864389, lng: -45.9282652, endereco: 'Alameda Castilho, 46 - Machado, MG, 37750-000' },
  { id: 2, nome: 'Luara Buffet', categoria: 'Espaço e Buffet', lat: -21.6799667, lng: -45.9132586, endereco: 'Av. Dr. Renato Azeredo, 2 - Machado, MG, 37750-000' },
  { id: 3, nome: 'Naty Decorações em Eventos', categoria: 'Decorações', lat: -21.6693655, lng: -45.9254459, endereco: 'Rua Dr Gabriel Barbosa, 43 - Machado, MG' },
  { id: 4, nome: 'Josi Oliveira Beauty Studio', categoria: 'Maquiadora', lat: -21.6829237, lng: -45.9170724, endereco: 'R. Durval Martins Ramos, 130 - Centro, Machado, MG, 37750-000' },
]

const center = [-21.678, -45.921]

export default function MapaFornecedores() {
  return (
    <MapContainer center={center} zoom={14} className="map-container" attributionControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locais.map(local => (
        <Marker key={local.id} position={[local.lat, local.lng]} icon={orangeIcon}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1}>
            {local.nome}
          </Tooltip>
          <Popup>
            <strong>{local.nome}</strong><br />
            <em>{local.categoria}</em><br />
            <small>{local.endereco}</small>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
