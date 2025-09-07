import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<section className="bg-gray-100 w-full min-h-[86vh] flex items-center">
			<div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center justify-between w-full">
				{/* Left text content */}
				<div className="flex-1 md:pr-10 mb-10 md:mb-0">
					<h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
						Explore Live Store Density in Seconds
					</h1>
					<p className="text-gray-600 text-base md:text-lg mb-6">
						Discover high-density store clusters with live categories, ratings,
						and insights on a single attractive map
					</p>
					<Link
						to={'/map'}
						className="inline-block bg-gradient-to-b from-[#E137FF] to-[#872199] text-white px-8 py-3 rounded-full font-semibold transition duration-300 hover:opacity-90"
					>
						Access GeoHeat
					</Link>
				</div>

				{/* Right image content */}
				<div className="flex-1 flex justify-center items-center relative">
					<div className="relative bg-[#f2eaff] p-5 rounded-2xl w-full max-w-[600px]">
						<img
							src="Group 2.png"
							alt="GeoHeat Map"
							className="w-full rounded-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HeroSection;
