// takes number and returns pokemon name

import Pokedex from "../data/pokedex";

function GetPokemonName(num) {
	let matchedPokemon = "";

	Pokedex.forEach((pokemon) => {
		if (pokemon.id === num) {
			matchedPokemon = pokemon.name.toUpperCase();
		}
	});

	return matchedPokemon;
}

export default GetPokemonName;
