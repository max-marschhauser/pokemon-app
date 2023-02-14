import React from "react";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__item">
				<span>&nbsp;Page Author:&nbsp;</span>
				<br />
				Max Marschhauser
			</div>
			<div className="footer__item">
				<span>&nbsp;Who's that Pokémon?&nbsp;</span>
				<br />
				Copyright &copy;{+new Date().getFullYear()}.
			</div>
			<div className="footer__item">
				<span>&nbsp;e-mail:&nbsp;</span>
				<br />
				max.marschhauser@gmail.com
			</div>
		</footer>
	);
}
