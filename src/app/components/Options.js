import React from "react";
import getPokemonImage from "../utils/getPokemonImage";
import getCorrectPokemonImage from "../utils/getCorrectPokemonImage";

export default function Options(props) {
	let randNum = Math.floor(Math.random() * 4 + 1);

	return (
		<>
			<img
				className="image"
				src={randNum === 1 ? getCorrectPokemonImage(props.correctPokemon) : getPokemonImage()}
				alt="ERROR"
			/>
			<img
				className="image"
				src={randNum === 2 ? getCorrectPokemonImage(props.correctPokemon) : getPokemonImage()}
				alt="ERROR"
			/>
			<img
				className="image"
				src={randNum === 3 ? getCorrectPokemonImage(props.correctPokemon) : getPokemonImage()}
				alt="ERROR"
			/>
			<img
				className="image"
				src={randNum === 4 ? getCorrectPokemonImage(props.correctPokemon) : getPokemonImage()}
				alt="ERROR"
			/>
		</>
	);
}
