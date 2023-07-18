"use client";

import { useEffect, useState } from "react";

function ChildComponent({ text }: { text: string }) {
	console.log("render child");

	const [isOn, setIsOn] = useState(true);

	// Now have explicitly no dependancies
	useEffect(() => console.log("mounted"), []);

	return (
		<div
			className="bg-blue-400 rounded-xl p-4 text-white cursor-pointer"
			onClick={() => setIsOn(!isOn)}
		>
			{text} is {isOn ? "on" : "off"}
		</div>
	);
}

export function ComponentWithUseEffectOnMount() {
	console.log("render");

	return (
		<div className="bg-slate-400 rounded-xl p-4 text-white">
			parent
			<ChildComponent text="Party" />
		</div>
	);
}
