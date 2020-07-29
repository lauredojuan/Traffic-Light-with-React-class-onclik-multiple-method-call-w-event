import React from "react";
import "bootstrap";

//create your first component
export function Home() {
	let isOn = true;

	function onFunction(event) {}

	return (
		<div className="container-fluid">
			<div className="box d-flex justify-content-center mt-3">
				<div className="d-flex flex-column">
					<div
						onClick={onFunction}
						className={`red m-2 ${isOn ? "lightOn" : ""}`}
					/>
					<div className="yellow m-2 lightOn" />
					<div className="green m-2" />
				</div>
			</div>
		</div>
	);
}
