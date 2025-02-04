import "./App.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type NavBarProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar: React.FC<NavBarProps> = ({ isOpen, setIsOpen }) => {
	const navRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (navRef.current && !navRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	return (
		<>
			<button
				className="navbar-toggle"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? "✖" : "☰"}
			</button>

			<nav
				ref={navRef}
				className={`navbar-container ${isOpen ? "open" : ""}`}
			>
				<Link to="/">Home Page</Link>
				<Link to="/urls">Urls Page</Link>
				<Link to="/guides">Guides Page</Link>
			</nav>
		</>
	);
};

export default NavBar;
