const Header = () => {
	return (
		<header className="flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-5 shadow-md relative z-[1000]">
			{/* Logo Section */}
			<div className="flex items-center font-bold text-[20px] mb-3 md:mb-0">
				<img
					src="material-symbols_mode-heat.png"
					alt="logo"
					className="h-5 bg-gradient-to-b from-[#E137FF] to-[#872199] p-1 mr-1 rounded-md"
				/>
				<p>GeoHeat</p>
				<p className="w-[2px] h-10 bg-[#f0f0f0] mx-[5px] ml-[14px] hidden sm:block"></p>
				<p className="text-sm hidden sm:block">Store Density Analytics</p>
			</div>

			{/* Search Section */}
			<div className="relative w-full md:w-[400px] mb-3 md:mb-0">
				<input
					type="text"
					placeholder="Search by Name, Category"
					className="w-full py-2 pr-9 pl-2 rounded-md border border-gray-300 box-border"
				/>
				<div className="absolute top-1/2 right-[15px] -translate-y-1/2 bg-gradient-to-b from-[#E137FF] to-[#872199] text-white flex items-center justify-center w-[90px] h-[25px] rounded-full">
					<img src="Search.png" alt="" className="h-[17px] mr-2" />
					<span>search</span>
				</div>
			</div>

			{/* Navigation / Buttons */}
			<div className="flex flex-wrap items-center gap-2 md:gap-[10px] justify-center md:justify-end">
				<button className="px-2 py-[6px] bg-white border-2 border-[#f3f3f3] rounded-md cursor-pointer font-bold flex items-center text-sm sm:text-base">
					<img
						src="typcn_pin-outline.png"
						alt="pin"
						className="h-[18px] pr-[6px]"
					/>{' '}
					Use my location
				</button>
				<button className="px-2 py-[6px] bg-white border-2 border-[#f3f3f3] rounded-md cursor-pointer font-bold flex items-center text-sm sm:text-base">
					<img
						src="typcn_pin-outline.png"
						alt="pin"
						className="h-[18px] pr-[6px]"
					/>{' '}
					Pins
					<span className="ml-[9px] bg-gradient-to-b from-[#E137FF] to-[#872199] text-white px-[10px] py-[3px] rounded-full text-[10px]">
						24
					</span>
				</button>
				<img
					src="material-symbols_dark-mode-outline-rounded.png"
					alt="moon"
					className="px-[7px] py-[2px] border-2 border-[#f3f3f3] rounded-md cursor-pointer"
				/>
				<div className="bg-[#f8f8f8] text-[#d95ce0] p-2 rounded-full font-bold text-lg">
					JA
				</div>
			</div>
		</header>
	);
};
export default Header;
