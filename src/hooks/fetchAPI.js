const fetchOsmDensity = async ({
	collections,
	lat,
	lon,
	radius,
	signal,
} = {}) => {
	const baseUrl = 'https://test-geo.onrender.com/ai/osm_density';
	const url = new URL(baseUrl);
	const params = new URLSearchParams();

	if (collections) params.set('collections', collections);
	if (lat != null) params.set('lat', lat);
	if (lon != null) params.set('lon', lon);
	if (radius != null) params.set('radius', radius);

	url.search = params.toString();

	const res = await fetch(url.toString(), { method: 'GET', signal });
	if (!res.ok) {
		const text = await res.text().catch(() => '');
		throw new Error(`Request failed: ${res.status} ${res.statusText} ${text}`);
	}
	return res.json();
};

export default fetchOsmDensity;
