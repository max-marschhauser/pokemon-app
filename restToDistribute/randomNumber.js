// returns random number between 1 and 151

function NextPokemon() {
	let number = Math.floor(Math.random() * (152 - 1) + 1);

	console.log(number);
	return number;
}

export default NextPokemon;
