import React from "react";

export default function Header() {
	return (
		<header className="header">
			<audio controls autoplay muted loop>
				<source src="pokemonthemesong.mp3" />
			</audio>
			<div className="header__logo">
				<span>&nbsp;Who's&nbsp;</span>
				<span>&nbsp;that&nbsp;</span>
				<span>&nbsp;POKÉMON?&nbsp;</span>
			</div>
		</header>
	);
}
