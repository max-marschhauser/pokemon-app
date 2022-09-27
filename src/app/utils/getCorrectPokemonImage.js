import pokemonImages from "../data/pokemonImages";

function GetCorrectPokemonImage(name) {
	let image = pokemonImages[name];
	return image;
}

export default GetCorrectPokemonImage;
