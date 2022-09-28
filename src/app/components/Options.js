import React from "react";
import getPokemonImage from "../utils/getPokemonImage";
import getCorrectPokemonImage from "../utils/getCorrectPokemonImage";
import GetPokemonName from "../utils/getPokemonName";

export default function Options(props) {
	let randNum = Math.floor(Math.random() * 4 + 1);
	let correctPokemonSrc = getCorrectPokemonImage(props.correctPokemon);

	let wrongPokemons = [];
	let clickedPokemon = false;
	let tryPokemon = "";

	while (wrongPokemons.length < 3) {
		tryPokemon = GetPokemonName();

		if (tryPokemon !== props.correctPokemon && wrongPokemons.includes(tryPokemon) === false) {
			wrongPokemons.push(tryPokemon);
		}
	}

	function imageClicked(event) {
		if (clickedPokemon === false) {
			let pokemonImageSrc = event.target.src;
			let correctPokemonImageSrc = getCorrectPokemonImage(props.correctPokemon);

			if (pokemonImageSrc === correctPokemonImageSrc) {
				event.target.className = "answer--right";
				clickedPokemon = true;
				setTimeout(resetClassName, 2000);
			} else {
				event.target.className = "answer--wrong";
				clickedPokemon = true;
				setTimeout(resetClassName, 2000);
			}
		}

		function resetClassName() {
			event.target.className = "answer";
			clickedPokemon = false;
		}
	}

	return (
		<>
			<img
				className="answer"
				src={randNum === 1 ? correctPokemonSrc : getPokemonImage(wrongPokemons.pop())}
				alt="Error"
				onClick={imageClicked}
			/>
			<img
				className="answer"
				src={randNum === 2 ? correctPokemonSrc : getPokemonImage(wrongPokemons.pop())}
				alt="Error"
				onClick={imageClicked}
			/>
			<img
				className="answer"
				src={randNum === 3 ? correctPokemonSrc : getPokemonImage(wrongPokemons.pop())}
				alt="Error"
				onClick={imageClicked}
			/>
			<img
				className="answer"
				src={randNum === 4 ? correctPokemonSrc : getPokemonImage(wrongPokemons.pop())}
				alt="Error"
				onClick={imageClicked}
			/>
		</>
	);
}
