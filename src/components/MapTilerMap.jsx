import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapTilerMap = () => {
	const locations = [
		{ lat: 6.5484, lng: 3.3035 },
		{ lat: 6.5244, lng: 3.3792 },
		{ lat: 6.4654, lng: 3.4064 },
	];

	return (
		<div className="h-screen w-full">
			<Map
				initialViewState={{
					longitude: 3.3792,
					latitude: 6.5244,
					zoom: 11,
				}}
				style={{ width: '100%', height: '100%' }}
				mapStyle="https://api.maptiler.com/maps/streets/style.json?key=YOUR_MAPTILER_KEY"
			>
				{locations.map((loc, idx) => (
					<Marker key={idx} longitude={loc.lng} latitude={loc.lat}>
						<div className="bg-purple-600 w-6 h-6 rounded-full border-2 border-white"></div>
					</Marker>
				))}
			</Map>
		</div>
	);
};

export default MapTilerMap;
