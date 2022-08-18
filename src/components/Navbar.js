import React from "react";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from "./Navbar.elements";
import {GiFlowerPot} from "react-icons/gi";

const Navbar = () => {
    return(
    <Container>
        <Wrapper>
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
                ABOUT ME
                </MenuItemLink>
                </MenuItem>

                <MenuItem>
                <MenuItemLink>
                PORTFOLIO
                </MenuItemLink>
                </MenuItem>

                <MenuItem>
                <MenuItemLink>
                CONTACT ME
                </MenuItemLink>
                </MenuItem>
            </Menu>
        </Wrapper>
    </Container>
    )
}

export default Navbar