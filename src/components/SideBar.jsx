const SideBar = () => {
	return (
		<div className="absolute bottom-5 left-5 bg-white p-[15px] rounded-lg shadow-lg z-[1000]">
			<h3 className="font-bold mb-2">Live Statistics</h3>
			<div className="flex">
				<div className="mx-[10px]">
					<strong>2,847</strong>
					<p className="flex flex-row text-sm">Stores</p>
				</div>
				<div className="mx-[10px]">
					<strong>⭐ 4.2</strong>
					<p className="flex flex-row text-sm">Avg Rating</p>
				</div>
				<div className="mx-[10px]">
					<strong>📶 94.2%</strong>
					<p className="flex flex-row text-sm">Coverage</p>
				</div>
			</div>
		</div>
	);
};
export default SideBar;
