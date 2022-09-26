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
				<span>Who's that Pokemon?</span>
				<br />
				Copyright {}
			</div>
			<div className="footer__item">
				<span>e-mail:</span>
				<br />
				max.marschhauser@gmail.com
			</div>
		</footer>
	);
}
