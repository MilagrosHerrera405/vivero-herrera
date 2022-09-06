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

				<Link>
				<LogoContainer className=''>
					<GiFlowerPot />
					<span>Vivero</span>
				</LogoContainer>
				</Link>

				<Menu open={showMobileMenu}>
					<MenuItem>
					
						<MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
							<Link>
								<FaHome />
								HOME
							</Link>
						</MenuItemLink>
						
					</MenuItem>


					<MenuItem>
						<MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
							<Link>
								<FaBookmark />
								CATEGORÍAS
							</Link>
						</MenuItemLink>
					</MenuItem>

					<MenuItem>
						<MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
							<Link>
								<FaHeart />
								MIS FAVORITOS
							</Link>
						</MenuItemLink>

					</MenuItem>
				</Menu>
				
				<CartWidget />
			</Wrapper>
		</Container>
	);
};

export default Navbar;
