import React from "react";
import getPokemonImage from "../utils/getPokemonImage";
import getCorrectPokemonImage from "../utils/getCorrectPokemonImage";

export default function Options(props) {
	let randNum = Math.floor(Math.random() * 4 + 1);

	let correctPokemon = getCorrectPokemonImage(props.correctPokemon);
	let wrongPokemons = [];

	return (
		<>
			<img
				className="image"
				src={randNum === 1 ? correctPokemon : getPokemonImage(props.correctPokemon)}
				alt="Error"
			/>
			<img
				className="image"
				src={randNum === 2 ? correctPokemon : getPokemonImage(props.correctPokemon)}
				alt="Error"
			/>
			<img
				className="image"
				src={randNum === 3 ? correctPokemon : getPokemonImage(props.correctPokemon)}
				alt="Error"
			/>
			<img
				className="image"
				src={randNum === 4 ? correctPokemon : getPokemonImage(props.correctPokemon)}
				alt="Error"
			/>
		</>
	);
}
