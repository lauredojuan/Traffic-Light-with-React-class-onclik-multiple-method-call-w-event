import React from "react";
import "bootstrap";

//create your first component
export function Home() {
	let isOn = true;

	// onFunction();

	return (
		<div className="container-fluid">
			<div className="box d-flex flex-column mt-3">
				<div className={`red m-2 ${isOn ? "" : "lightOn"}`} />
				<div className="yellow m-2 lightOn" />
				<div className="green m-2" />
			</div>
		</div>
	);
}
