import Pokedex from "./list/Pokedex.js";

function GetPokemonName(num) {
	let matchedPokemon = "";

	Pokedex.forEach((pokemon) => {
		if (pokemon.id === num) {
			matchedPokemon = pokemon.name;
		}
	});

	return matchedPokemon;
}

export default GetPokemonName;
