import GetPokemonImage from "./GetPokemonImage.js";
import GetPokemonName from "./GetPokemonName.js";
import nextPokemon from "./NextPokemon.js";
//import { useState } from "react";

let pokemonName = GetPokemonName(nextPokemon());

function Pokemon() {
	return (
		<div className="container">
			<button className="button">NEXT</button>
			<div className="pokemon-text">{pokemonName}</div>
			<img className="pokemon-image" src={GetPokemonImage(pokemonName)} alt={pokemonName} />
		</div>
	);
}

export default Pokemon;
