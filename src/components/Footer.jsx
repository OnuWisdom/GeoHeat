const Footer = () => {
	return (
		<footer className="bg-[#2d014d] text-white py-5 text-sm">
			<div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-3">
				<span>©GeoHeat 2025</span>

				<div className="flex gap-5">
					<a href="#" className="text-gray-300 hover:text-white">
						Privacy
					</a>
					<a href="#" className="text-gray-300 hover:text-white">
						Terms of service
					</a>
				</div>

				<span>Powered by X-lab Hackaton</span>
			</div>
		</footer>
	);
};
export default Footer;
