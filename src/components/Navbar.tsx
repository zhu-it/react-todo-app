import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
	const links = [
		{
			id: 1,
			path: '/',
			text: 'Domowa',
		},
		{
			id: 2,
			path: '/about',
			text: 'O nas',
		},
	];

	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	const closeMenu = () => {
		setNavbarOpen(false);
	};

	return (
		<nav className="navBar">
			<button onClick={handleToggle}>{navbarOpen ? <MdClose color="#fff" size="40px" /> : <FiMenu color="#7b7b7b" size="40px" />}</button>
			<ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
				{links.map((link) => {
					return (
						<li key={link.id}>
							<NavLink to={link.path} activeClassName="active-link" onClick={() => closeMenu()} exact>
								{link.text}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
export default Navbar;
