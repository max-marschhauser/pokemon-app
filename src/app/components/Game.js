import React, { useState } from "react";
import getPokemonName from "../utils/getPokemonName";
import Options from "../components/Options";

export default function Game() {
	const [currentPokemon, setCurrentPokemon] = useState(getPokemonName);

	function newPokemon() {
		setCurrentPokemon(getPokemonName);
	}

	return (
		<>
			<div className="question">Which one is {currentPokemon}?</div>
			<div className="image--container">
				<Options correctPokemon={currentPokemon} />
			</div>
			<button className="nextPokemon--button" onClick={newPokemon}>
				Next Pokémon
			</button>
		</>
	);
}
