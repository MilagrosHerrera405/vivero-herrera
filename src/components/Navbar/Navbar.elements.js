import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #9EB23B;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p {
    &:nth-child(2) {
      color: #AC4425;
    }
  }

  svg{
    fill: #AC4425;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const MenuItem = styled.li`
  height: 100%;
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #FCF9C6;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #AC4425;
    background-color: #C7D36F;
    transition: 0.5s all ease;
  }
`;
