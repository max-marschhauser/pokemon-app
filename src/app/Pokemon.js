import GetPokemonImage from "./GetPokemonImage.js";
import GetPokemonName from "./GetPokemonName.js";
import nextPokemon from "./NextPokemon.js";

let pokemonName = GetPokemonName(nextPokemon());

function Pokemon() {
	return (
		<div className="container">
			<button className="button" onClick={nextPokemon}>
				NEXT
			</button>
			<div className="pokemon-text">{pokemonName}</div>
			<img className="pokemon-image" src={GetPokemonImage(pokemonName)} alt={pokemonName} />
		</div>
	);
}

export default Pokemon;
