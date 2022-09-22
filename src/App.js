import { useState, useEffect } from "react";

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("https://reqres.in/api/users")
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw new Error("Server says bed response");
			})
			.then((res) => {
				setData(res.data);
				console.log(res);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{" "}
			{data &&
				data.map((userData) => {
					return <div key={userData.id}>{userData.email}</div>;
				})}
		</div>
	);
}

export default App;
