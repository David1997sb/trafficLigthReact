import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import TrafficLigth from "./TrafficLigth.jsx";
import { useCallback, useEffect } from "react";
//create your first component
const Home = () => {
	const [redShine, setRedShine] = useState("");
	const [yellowShine, setYellowShine] = useState("");
	const [greenShine, setGreenShine] = useState("");

	return (
		<div className="mainContainer">
			<div className="container">
				<div className="trafficTop">
					<div className="topBar"></div>
				</div>
				<div className="skeleton">
					<div className="lights">
						<div
							onClick={() => {
								if (redShine === "") {
									setRedShine("shine");
								} else {
									setRedShine("");
								}
							}}
							className={`red ${redShine}`}></div>
						<div
							onClick={() => {
								if (yellowShine === "") {
									setYellowShine("shine");
								} else {
									setYellowShine("");
								}
							}}
							className={`yellow ${yellowShine}`}></div>
						<div
							onClick={() => {
								if (greenShine === "") {
									setGreenShine("shine");
								} else {
									setGreenShine("");
								}
							}}
							className={`green ${greenShine}`}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
