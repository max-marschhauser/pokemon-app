import pokemonImages from "./list/pokemonImages";

function GetPokemonName(name) {
	let image = pokemonImages[name];

	return image;
}

export default GetPokemonName;
