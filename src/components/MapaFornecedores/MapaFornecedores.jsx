import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './MapaFornecedores.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const locais = [
  { id: 1, nome: 'Vini Pessoa', categoria: 'Fotografo', lat: -21.6864389, lng: -45.9282652, endereco: 'Alameda Castilho, 46 - Machado, MG, 37750-000' },
  { id: 2, nome: 'Luara Buffet', categoria: 'Espaco e Buffet', lat: -21.6799667, lng: -45.9132586, endereco: 'Av. Dr. Renato Azeredo, 2 - Machado, MG, 37750-000' },
  { id: 3, nome: 'Naty Decoracoes em Eventos', categoria: 'Decoracoes', lat: -21.6693655, lng: -45.9254459, endereco: 'Rua Dr Gabriel Barbosa, 43 - Machado, MG' },
  { id: 4, nome: 'Josi Oliveira Beauty Studio', categoria: 'Maquiadora', lat: -21.6829237, lng: -45.9170724, endereco: 'R. Durval Martins Ramos, 130 - Centro, Machado, MG, 37750-000' },
]

const center = [-21.678, -45.921]

export default function MapaFornecedores() {
  return (
    <MapContainer center={center} zoom={14} className="map-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locais.map(local => (
        <Marker key={local.id} position={[local.lat, local.lng]}>
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
