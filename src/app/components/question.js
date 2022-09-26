import getPokemonName from "../utils/getPokemonName";
import randomNumber from "../utils/randomNumber";

export default function Question() {
	return <div>Which one is {getPokemonName(randomNumber())}?</div>;
}
