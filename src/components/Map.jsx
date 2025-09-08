// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const storeIcon = new L.Icon({
// 	iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
// 	iconSize: [30, 30],
// });

// const locations = [
// 	{ lat: 6.5484, lng: 3.3035 },
// 	{ lat: 6.5244, lng: 3.3792 },
// 	{ lat: 6.4654, lng: 3.4064 },
// ];

// const Map = () => (
// 	<MapContainer
// 		center={[6.5244, 3.3792]}
// 		zoom={11}
// 		style={{ height: '100vh', width: '100%' }}
// 	>
// 		<TileLayer
// 			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// 			attribution="© OpenStreetMap contributors"
// 		/>
// 		{locations.map((loc, idx) => (
// 			<Marker key={idx} position={[loc.lat, loc.lng]} icon={storeIcon} />
// 		))}
// 	</MapContainer>
// );

// export default Map;
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useState, useCallback } from 'react';
import fetchOsmDensity from '../hooks/fetchAPI';

// custom store icon
const storeIcon = new L.Icon({
	iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
	iconSize: [30, 30],
});

// map event handler component
const MapEventHandler = ({ onMoveEnd }) => {
	useMapEvents({
		moveend: (e) => {
			const map = e.target;
			const center = map.getCenter();
			onMoveEnd(center);
		},
	});
	return null;
};

const DensityMap = () => {
	const [locations, setLocations] = useState([]);
	const [error, setError] = useState(null);
	const [mapCenter, setMapCenter] = useState({ lat: 6.5244, lng: 3.3792 });
	const [collection, setCollection] = useState('bank'); // default collection
	const [loading, setLoading] = useState(false);

	// helper: parse backend response into lat/lng points
	const parsePoints = (data) => {
		if (
			data &&
			data.type === 'FeatureCollection' &&
			Array.isArray(data.features)
		) {
			return data.features
				.map((f) => {
					const coords = f?.geometry?.coordinates;
					return Array.isArray(coords) && coords.length >= 2
						? { lat: coords[1], lng: coords[0] }
						: null;
				})
				.filter(Boolean);
		} else if (Array.isArray(data)) {
			return data
				.map((p) =>
					p && typeof p.lat === 'number'
						? { lat: p.lat, lng: p.lng ?? p.lon }
						: null
				)
				.filter(Boolean);
		}
		return [];
	};

	// function to fetch density
	const fetchDensity = useCallback(
		async (lat, lon) => {
			const controller = new AbortController();
			try {
				setLoading(true);
				setError(null);
				const data = await fetchOsmDensity({
					collections: collection,
					lat,
					lon,
					radius: 20,
					signal: controller.signal,
				});
				setLocations(parsePoints(data));
			} catch (e) {
				if (e.name !== 'AbortError') setError(e.message);
			} finally {
				setLoading(false);
			}
			return () => controller.abort();
		},
		[collection]
	);

	// initial fetch (Lagos center)
	useEffect(() => {
		fetchDensity(6.5244, 3.3792);
	}, [fetchDensity]);

	const center = useMemo(() => {
		if (locations.length) return [locations[0].lat, locations[0].lng];
		return [6.5244, 3.3792]; // fallback Lagos
	}, [locations]);

	return (
		<div className="relative h-screen w-full">
			{/* Dropdown for collections */}
			<select
				value={collection}
				onChange={(e) => setCollection(e.target.value)}
				className="absolute top-4 left-4 z-[1000] p-2 bg-white border rounded shadow"
			>
				<option value="bank">Banks</option>
				<option value="restaurant">Restaurants</option>
				<option value="hospital">Hospitals</option>
				<option value="school">Schools</option>
				<option value="store">Stores</option>
			</select>

			{/* Loading & error overlays */}
			{loading && (
				<div className="absolute top-4 right-4 bg-yellow-200 p-2 rounded shadow z-[1000]">
					Loading...
				</div>
			)}
			{error && (
				<div className="absolute bottom-4 left-4 bg-red-200 p-2 rounded shadow z-[1000]">
					{error}
				</div>
			)}

			{/* Map */}
			<MapContainer
				center={center}
				zoom={11}
				style={{ height: '100%', width: '100%' }}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="© OpenStreetMap contributors"
				/>
				<MapEventHandler
					onMoveEnd={(center) => fetchDensity(center.lat, center.lng)}
				/>
				{locations.map((loc, idx) => (
					<Marker key={idx} position={[loc.lat, loc.lng]} icon={storeIcon} />
				))}
			</MapContainer>
		</div>
	);
};

export default DensityMap;
