import pokemonList from "./pokemonList.js";

let Pokedex = [{}];

pokemonList.forEach((item) => {
	let id = parseInt(item.id);
	let name = item.name;
	let pokemon = { id, name };
	Pokedex.push(pokemon);
});

export default Pokedex;
