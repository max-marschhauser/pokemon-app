import getPokemonName from "../utils/getPokemonName";

export default function NextPokemon() {
	return (
		<button className="nextPokemon--button" onClick={getPokemonName}>
			Next Pokémon
		</button>
	);
}
