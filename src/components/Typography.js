import React from "react";

export default function Typography(props) { //use dynamic props
	return (
		<div className="flex flex-col w-full items-center py-8 lg:py-12 px-6 min-h-[100vh]">
			<div className="prose lg:prose-xl  pb-10">{props.children}</div>
		</div>
	);
}
export function Typography1(props) { //use dynamic props
	return ( 
		<div className="flex flex-col w-full items-center py-8 lg:py-12 px-6 min-h-[100vh]">
			<div className="prose lg:prose-xl pb-10 wideBoy">{props.children}</div>
		</div>
	);
}