import React, { useState } from "react";
import Game from "../components/Game";

export default function Main() {
	const [isActive, setIsActive] = useState(false);

	function startGame() {
		setIsActive((current) => !current);
	}

	return (
		<>
			<div className={isActive ? "hide" : ""}>
				<button className="button--start" onClick={startGame}>
					Start Game!
				</button>
			</div>
			<div className={isActive ? "" : "hide"}>
				<div className="container--page">
					<Game />
				</div>
			</div>
		</>
	);
}
