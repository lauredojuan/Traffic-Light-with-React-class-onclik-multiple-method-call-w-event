import React from "react";

//create your first component

// multiple methd call onclik event (assing event argument)

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			color: ""
		};
	}

	clickAcion = (e, string) => {
		console.log(string);
		this.setState({ color: string });
	};

	render() {
		// let redOn = this.state.color === "red" ? "lightOn" : "";
		// let yellowOn = this.state.color === "yellow" ? "lightOn" : "";
		// let greenOn = this.state.color === "green" ? "lightOn" : "";

		return (
			<div className="container-fluid">
				<div className="box d-flex justify-content-center mt-3">
					<div className="d-flex flex-column">
						<div
							onClick={event => this.clickAcion(event, "red")}
							className={
								this.state.color === "red"
									? "red lightOn m-2 "
									: "red m-2"
							}
						/>
						<div
							onClick={event => this.clickAcion(event, "yellow")}
							className={
								this.state.color === "yellow"
									? "yellow m-2  lightOn"
									: "yellow m-2"
							}
						/>
						<div
							onClick={event => this.clickAcion(event, "green")}
							className={
								this.state.color === "green"
									? "green m-2 lightOn"
									: "green m-2"
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}
