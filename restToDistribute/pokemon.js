import GetPokemonImage from "./GetPokemonInfo/GetPokemonImage.js";
import GetPokemonName from "./GetPokemonInfo/GetPokemonName.js";
import nextPokemon from "./NextPokemon.js";
import "./pokemon.scss";

let pokemonName = GetPokemonName(nextPokemon());

function Pokemon() {
	return (
		<div className="container">
			<div className="pokemon-text">{pokemonName}</div>
			<img className="pokemon-image" src={GetPokemonImage(pokemonName)} alt={pokemonName} />
		</div>
	);
}

export default Pokemon;
