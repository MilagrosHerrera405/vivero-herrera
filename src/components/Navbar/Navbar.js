import React from "react";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from "./Navbar.elements";
import {GiFlowerPot} from "react-icons/gi";
import { IconContext } from "react-icons";

const Navbar = () => {
    return(
    <Container>
        <Wrapper>
            <IconContext.Provider value={{style:{fontSize: "2em"}}}>
            <LogoContainer>
                <GiFlowerPot/>
                <p>Vivero</p>
            </LogoContainer>
            <Menu>
                <MenuItem>
                <MenuItemLink>
                HOME
                </MenuItemLink>
                </MenuItem>

                <MenuItem>
                <MenuItemLink>
                PRODUCTOS
                </MenuItemLink>
                </MenuItem>

                <MenuItem>
                <MenuItemLink>
                POLÍTICA DE DEVOLUCIONES
                </MenuItemLink>
                </MenuItem>

                <MenuItem>
                <MenuItemLink>
                CONTACTO
                </MenuItemLink>
                </MenuItem>
            </Menu>
            </IconContext.Provider>
        </Wrapper>
    </Container>
    )
}

export default Navbar