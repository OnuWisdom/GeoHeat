import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const storeIcon = L.icon({
	iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
	iconSize: [30, 30],
});

const locations = [
	{ lat: 6.5484, lng: 3.3035 },
	{ lat: 6.5244, lng: 3.3792 },
	{ lat: 6.4654, lng: 3.4064 },
];

const Map = () => {
	return (
		<div
			id="map"
			className="h-[calc(100vh-160px)] sm:h-[calc(100vh-60px)] w-full z-[1] relative"
		>
			<MapContainer
				center={[6.5244, 3.3792]}
				zoom={11}
				className="h-[calc(100vh-60px)] w-full"
				scrollWheelZoom={true}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="© OpenStreetMap contributors"
				/>
				{locations.map((loc, idx) => (
					<Marker key={idx} position={[loc.lat, loc.lng]} icon={storeIcon} />
				))}
			</MapContainer>
		</div>
	);
};
export default Map;
