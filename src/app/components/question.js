import getPokemonName from "../utils/getPokemonName";

export default function Question() {
	return <div className="question">Which one is {getPokemonName()}?</div>;
}
