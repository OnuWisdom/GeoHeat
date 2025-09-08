const Legend = () => {
	return (
		<div className="absolute bottom-5 right-5 bg-white px-[15px] py-[10px] rounded-lg shadow-lg z-[1000]">
			<h4 className="font-semibold mb-2">Store Density</h4>
			<div className="flex items-center gap-[10px]">
				<span>Low</span>
				<div
					className="h-[10px] w-[100px] rounded-md 
            bg-[linear-gradient(to_right,#fee5d9,#fcae91,#fb6a4a,#de2d26,#a50f15)]"
				></div>
				<span className="text-sm">High</span>
			</div>
		</div>
	);
};
export default Legend;
