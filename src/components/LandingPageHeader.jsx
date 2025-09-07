import { Link } from 'react-router-dom';

const LandingPageHeader = () => {
	return (
		<header className="bg-white py-4 border-b border-gray-200">
			<div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
				{/* Logo */}
				<div className="flex items-center gap-2 font-bold text-xl text-gray-800">
					<img
						src="material-symbols_mode-heat.png"
						alt="GeoHeat logo"
						className="h-5 bg-gradient-to-b from-[#E137FF] to-[#872199] p-1 mr-1 rounded-md"
					/>
					<span>GeoHeat</span>
				</div>

				{/* Nav links */}
				<nav>
					<ul className="hidden md:flex gap-4 list-none">
						<li>
							<Link
								to="#"
								className="text-[#872199] border-b-2 border-[#872199] font-medium pb-1"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="#"
								className="text-gray-600 hover:text-black font-medium pb-1"
							>
								Features
							</Link>
						</li>
						<li>
							<Link
								to="#"
								className="text-gray-600 hover:text-black font-medium pb-1"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="#"
								className="text-gray-600 hover:text-black font-medium pb-1"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				{/* CTA button */}
				<Link
					to={'/map'}
					className="hidden sm:inline-block bg-gradient-to-b from-[#E137FF] to-[#872199] text-white px-6 py-2 rounded-full font-semibold transition duration-300 hover:opacity-90"
				>
					Access GeoHeat
				</Link>
			</div>
		</header>
	);
};
export default LandingPageHeader;
