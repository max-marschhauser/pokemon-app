import "./assets/scss/styles.scss";
import Header from "./layout/header";
import Main from "./layout/main";
import Footer from "./layout/footer";

export default function app() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}
