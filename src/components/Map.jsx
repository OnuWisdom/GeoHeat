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

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useState } from 'react';
import fetchOsmDensity from '../hooks/fetchAPI';

const storeIcon = new L.Icon({
	iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
	iconSize: [30, 30],
});

const Map = () => {
	const [locations, setLocations] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		(async () => {
			try {
				setError(null);
				// Example: collections=bank&lat=6.5&lon=3.3&radius=20
				const data = await fetchOsmDensity({
					collections: 'bank',
					lat: 6.5,
					lon: 3.3,
					radius: 20,
					signal: controller.signal,
				});

				// Flexible parsing: supports GeoJSON FeatureCollection or array of {lat,lng}/{lat,lon}
				let points = [];
				if (
					data &&
					data.type === 'FeatureCollection' &&
					Array.isArray(data.features)
				) {
					points = data.features
						.map((f) => {
							const coords = f?.geometry?.coordinates;
							if (Array.isArray(coords) && coords.length >= 2) {
								return { lat: coords[1], lng: coords[0] };
							}
							return null;
						})
						.filter(Boolean);
				} else if (Array.isArray(data)) {
					points = data
						.map((p) => {
							if (
								p &&
								typeof p.lat === 'number' &&
								(typeof p.lng === 'number' || typeof p.lon === 'number')
							) {
								return {
									lat: p.lat,
									lng: typeof p.lng === 'number' ? p.lng : p.lon,
								};
							}
							return null;
						})
						.filter(Boolean);
				}

				setLocations(points);
			} catch (e) {
				if (e.name !== 'AbortError')
					setError(e.message || 'Failed to load data');
			}
		})();

		return () => controller.abort();
	}, []);

	const center = useMemo(() => {
		if (locations.length) return [locations[0].lat, locations[0].lng];
		return [6.5244, 3.3792];
	}, [locations]);

	return (
		<MapContainer
			center={center}
			zoom={11}
			style={{ height: '100vh', width: '100%' }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="© OpenStreetMap contributors"
			/>
			{locations.map((loc, idx) => (
				<Marker key={idx} position={[loc.lat, loc.lng]} icon={storeIcon} />
			))}
		</MapContainer>
	);
};

export default Map;
