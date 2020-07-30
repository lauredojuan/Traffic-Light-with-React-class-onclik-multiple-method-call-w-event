import React from "react";

//create your first component

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			color: ""
		};
	}

	render() {
		let redOn = this.state.color === "red" ? "lightOn" : "";
		let yellowOn = this.state.color === "yellow" ? "lightOn" : "";
		let greenOn = this.state.color === "green" ? "lightOn" : "";

		return (
			<div className="container-fluid">
				<div className="box d-flex justify-content-center mt-3">
					<div className="d-flex flex-column">
						<div
							onClick={() => this.setState({ color: "red" })}
							className={"red m-2 " + redOn}
						/>

						<div
							onClick={() => this.setState({ color: "yellow" })}
							className={"yellow m-2 " + yellowOn}
						/>

						<div
							onClick={() => this.setState({ color: "green" })}
							className={"green m-2 " + greenOn}
						/>
					</div>
				</div>
			</div>
		);
	}
}
