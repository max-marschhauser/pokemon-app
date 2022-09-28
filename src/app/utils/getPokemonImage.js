// returns random pokemon image src

import pokemonImages from "../data/pokemonImages";
import GetPokemonName from "./getPokemonName";

function GetPokemonImage(name) {
	let image = pokemonImages[name];
	return image;
}

export default GetPokemonImage;
