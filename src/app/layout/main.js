import React, { useState } from "react";
import Question from "../components/Question";
import Options from "../components/Options";
import NextPokemon from "../components/NextPokemon";

export default function Main() {
	const [isActive, setIsActive] = useState(false);

	const startGame = () => {
		setIsActive((current) => !current);
	};

	return (
		<>
			<div className={isActive ? "hide" : ""}>
				<button className="button--start" onClick={startGame}>
					Start Game!
				</button>
			</div>
			<div className={isActive ? "" : "hide"}>
				<div className="container--page">
					<Question />
					<Options />
					<NextPokemon />
				</div>
			</div>
		</>
	);
}
