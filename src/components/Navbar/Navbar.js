import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';

import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from './Navbar.elements';

import { GiFlowerPot } from 'react-icons/gi';
import { FaBars, FaHome, FaHeart, FaBookmark, FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<Container>
			<Wrapper>
				<MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
					{showMobileMenu ? <FaTimes /> : <FaBars />}
				</MobileIcon>

				
				<LogoContainer>
				<Link to="/">
					<GiFlowerPot />
					<span>Vivero</span>
				</Link>
				</LogoContainer>
				

				<Menu open={showMobileMenu}>
					
					<MenuItem>
						<Link to="/">
						<MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
								<FaHome />
								HOME
						</MenuItemLink>
						</Link>
					</MenuItem>


					<MenuItem>
					<Link to="/">
						<MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
								<FaBookmark />
								CATEGORÍAS
						</MenuItemLink>
					</Link>
					</MenuItem>

					<MenuItem>
					<Link to="/">
						<MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
								<FaHeart />
								MIS FAVORITOS
						</MenuItemLink>
						</Link>
					</MenuItem>
				</Menu>
				
				<CartWidget />
			</Wrapper>
		</Container>
	);
};

export default Navbar;
