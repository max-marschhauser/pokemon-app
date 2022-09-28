// returns random pokemon image src

import pokemonImages from "../data/pokemonImages";

function GetPokemonImage(name) {
	let image = pokemonImages[name];
	return image;
}

export default GetPokemonImage;
