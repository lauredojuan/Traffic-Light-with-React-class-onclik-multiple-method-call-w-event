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
		// console.log(string);
		this.setState({ color: string });
	};

	render() {
		// let redOn = this.state.color === "red" ? "lightOn" : "";
		// let yellowOn = this.state.color === "yellow" ? "lightOn" : "";
		// let greenOn = this.state.color === "green" ? "lightOn" : "";

		return (
			<div className="container-fluid">
				<div className=" ligthImg d-flex justify-content-center mt-5">
					<div className="d-flex flex-column">
						<div
							onClick={event => this.clickAcion(event, "red")}
							className={
								this.state.color === "red"
									? "red lightOn  "
									: "red  "
							}
						/>
						<div
							onClick={event => this.clickAcion(event, "yellow")}
							className={
								this.state.color === "yellow"
									? "yellow   lightOn"
									: "yellow "
							}
						/>
						<div
							onClick={event => this.clickAcion(event, "green")}
							className={
								this.state.color === "green"
									? "green  lightOn"
									: "green "
							}
						/>
					</div>
				</div>

				<div className="post" />
				<div className="base" />
			</div>
		);
	}
}
