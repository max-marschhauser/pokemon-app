import React from "react";
import getPokemonImage from "../utils/getPokemonImage";
import getCorrectPokemonImage from "../utils/getCorrectPokemonImage";
import GetPokemonName from "../utils/getPokemonName";

export default function Options(props) {
	let randNum = Math.floor(Math.random() * 4 + 1);

	let correctPokemon = getCorrectPokemonImage(props.correctPokemon);
	let wrongPokemons = [];

	for (wrongPokemons; wrongPokemons.length < 3; wrongPokemons) {
		let tryPokemon = GetPokemonName();
		if (tryPokemon !== correctPokemon && wrongPokemons.includes(tryPokemon) === false) {
			wrongPokemons.push(tryPokemon);
		}
	}

	function imageClicked(event) {
		let pokemonImageSrc = event.target.src;
		let correctPokemonImageSrc = getCorrectPokemonImage(props.correctPokemon);

		// dodati true/false varijablu koja govori treba li se dodati class name ili ne, isto tako da broji i bodove. Varijabla se resetira kad se stisne dugme novi pokemon

		if (pokemonImageSrc === correctPokemonImageSrc) {
			event.target.className = "answer--right";
		} else {
			event.target.className = "answer--wrong";
		}
	}

	return (
		<>
			<img
				className="image"
				src={randNum === 1 ? correctPokemon : getPokemonImage(wrongPokemons.pop())}
				alt="Error"
				onClick={imageClicked}
			/>
			<img
				className="image"
				src={randNum === 2 ? correctPokemon : getPokemonImage(wrongPokemons.pop())}
				alt="Error"
				onClick={imageClicked}
			/>
			<img
				className="image"
				src={randNum === 3 ? correctPokemon : getPokemonImage(wrongPokemons.pop())}
				alt="Error"
				onClick={imageClicked}
			/>
			<img
				className="image"
				src={randNum === 4 ? correctPokemon : getPokemonImage(wrongPokemons.pop())}
				alt="Error"
				onClick={imageClicked}
			/>
		</>
	);
}
