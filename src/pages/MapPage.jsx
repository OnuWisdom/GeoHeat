import Header from '../components/Header';
import Map from '../components/Map';
import SideBar from '../components/SideBar';
import Legend from '../components/Legend';

const MapPage = ({ mapCenter }) => {
	return (
		<>
			<Header
			// mapCenter={mapCenter}
			// onSearchResults={(json) => setLocations(parsePoints(json))}
			/>
			<Map />
			<SideBar />
			<Legend />
		</>
	);
};
export default MapPage;
