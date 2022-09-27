import React from "react";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__item">
				<span>Page Author:</span>
				<br />
				Max Marschhauser
			</div>
			<div className="footer__item">
				<span>Who's that Pokémon?</span>
				<br />
				Copyright &copy;{+new Date().getFullYear()}.
			</div>
			<div className="footer__item">
				<span>e-mail:</span>
				<br />
				max.marschhauser@gmail.com
			</div>
		</footer>
	);
}
