import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import LinksList from "./LinksList";
import NavBar from "./NavBar";
import GuideList from "./Guide";

function App() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className={`content ${isNavOpen ? "shifted" : ""}`}>
			<NavBar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />

			<Routes>
				<Route path="/" element={<div>Home page</div>} />
				<Route path="/urls" element={<LinksList />} />
				<Route path="/guides" element={<GuideList />} />
			</Routes>
		</div>
	);
}

export default App;
