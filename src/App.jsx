import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/map" element={<MapPage />} />
			</Routes>
		</>
	);
};
export default App;
