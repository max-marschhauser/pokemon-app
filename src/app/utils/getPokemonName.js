// returns random pokemon name

import Pokedex from "../data/pokedex";

function GetPokemonName() {
	let matchedPokemon = "";
	let randomNumber = Math.floor(Math.random() * (152 - 1) + 1);

	Pokedex.forEach((pokemon) => {
		if (pokemon.id === randomNumber) {
			matchedPokemon = pokemon.name;
		}
	});

	return matchedPokemon;
}

export default GetPokemonName;
