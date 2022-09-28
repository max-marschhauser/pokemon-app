import React, { useState } from "react";
import getPokemonName from "../utils/getPokemonName";
import getPokemonImage from "../utils/getPokemonImage";
import getCorrectPokemonImage from "../utils/getCorrectPokemonImage";
import GetPokemonName from "../utils/getPokemonName";

let scoreCount = 0;
let combo = 0;

export default function Game() {
	const [correctPokemon, setCorrectPokemon] = useState(getPokemonName);
	function newPokemon() {
		setCorrectPokemon(getPokemonName);
	}

	let randNum = Math.floor(Math.random() * 4 + 1);
	let correctPokemonSrc = getCorrectPokemonImage(correctPokemon);
	let wrongPokemons = [];
	let clickedPokemon = false;
	let tryPokemon = "";

	while (wrongPokemons.length < 3) {
		tryPokemon = GetPokemonName();

		if (tryPokemon !== correctPokemon && wrongPokemons.includes(tryPokemon) === false) {
			wrongPokemons.push(tryPokemon);
		}
	}

	function imageClicked(event) {
		if (clickedPokemon === false) {
			let pokemonImageSrc = event.target.src;
			let correctPokemonImageSrc = getCorrectPokemonImage(correctPokemon);

			if (pokemonImageSrc === correctPokemonImageSrc) {
				combo++;
				event.target.className = "answer--right";
				clickedPokemon = true;
				setTimeout(resetClassName, 1000);
			} else {
				combo = 0;
				event.target.className = "answer--wrong";
				clickedPokemon = true;
				setTimeout(resetClassName, 1000);
			}

			if (combo > scoreCount) {
				scoreCount = combo;
			}
		}

		function resetClassName() {
			event.target.className = "answer";
			clickedPokemon = false;
			newPokemon();
		}
	}

	return (
		<>
			<div className="question">Which one is {correctPokemon}?</div>
			<div className="image--container">
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
			</div>
			<div className="score">
				<span>&nbsp;Combo:&nbsp;{combo}&nbsp;</span>
				<span>&nbsp;High-Score:&nbsp;{scoreCount}&nbsp;</span>
			</div>
		</>
	);
}
