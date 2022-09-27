import pokemonImages from "../data/pokemonImages";
import GetPokemonName from "./getPokemonName";

function GetPokemonImage() {
	let name = GetPokemonName();
	let image = pokemonImages[name];
	return image;
}

export default GetPokemonImage;
