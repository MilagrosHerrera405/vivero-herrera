import React, {useState} from "react";
import CartWidget from "../CartWidget/CartWidget";

import {
    Container,
    LogoContainer,
    Menu,
    MenuItem,
    MenuItemLink,
    MobileIcon,
    Wrapper
} from "./Navbar.elements";

import {GiFlowerPot} from "react-icons/gi";
import {
    FaBars,
    FaHome,
    FaHeart,
    FaBookmark,
    FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";



const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return(
    <Container>
        <Wrapper>
            <IconContext.Provider value={{style:{fontSize: "2em"}}}>
            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {showMobileMenu ? <FaTimes/> : <FaBars/>}
            </MobileIcon>

            <LogoContainer>
        <GiFlowerPot />
        <p>Vivero</p>
        </LogoContainer>
            <Menu open={showMobileMenu}>

                <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                    <FaHome/>
                    HOME
                </div>
                </MenuItemLink>
                </MenuItem>

                <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                    <FaBookmark/>
                    CATEGORÍAS
                </div>
                </MenuItemLink>
                </MenuItem>

                <MenuItem>
                <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                    <FaHeart/>
                    MIS FAVORITOS
                </div>
                </MenuItemLink>
                </MenuItem>

            </Menu>
            </IconContext.Provider>
            <CartWidget/>
        </Wrapper>
    </Container>
    )
}

export default Navbar