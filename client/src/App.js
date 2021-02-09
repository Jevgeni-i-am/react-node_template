import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		fetch("/api")
			.then((res) => res.json())
			.then((data) => setData(data.message));
	}, []);

	return (
		<div>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<p>{!data ? "Loading..." : data}</p>
				</header>
			</div>
			<div>
				<a
					className="App-link"
					href="http://liski.online"
					target="_blank"
					rel="noopener noreferrer"
				>
					Liski.Online
				</a>
			</div>
		</div>
	);
}


export default App;


