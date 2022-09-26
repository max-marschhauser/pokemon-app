// returns random number between 1 and 151

function randomNumber() {
	let randomNumber = Math.floor(Math.random() * (152 - 1) + 1);

	return randomNumber;
}

export default randomNumber;
