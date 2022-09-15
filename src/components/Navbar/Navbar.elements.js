import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 70px;
	background-color: #9eb23b;
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
display: flex;
align-self: center;
align-items: center;
justify-content: center;

	
	span {
		font-size: 1.2rem;
		color: #ac4425;
		margin: 0.5;
	}
	
	svg {
		font-size: 2rem;
		fill: #ac4425;
		margin: 0.5rem;
		
	
	}

	@media screen and (max-width: 960px) {
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: center;
		svg {
			fill: #ac4425;
			margin: 0.5rem;
		}
	}
`;


export const Menu = styled.ul`
	height: 100%;
	display: flex;
	justify-content: center;
	list-style: none;

	@media screen and (max-width: 960px) {
		background-color: #9eb23b;
		position: absolute;
		top: 70px;
		left: ${({ open }) => (open ? '0' : '-100%')}; //import
		width: 100%;
		height: 90vh;
		padding: 0;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		transition: 0.5s all ease;
	}
`;

export const MenuItem = styled.li`
	height: 100%;

	@media screen and (max-width: 960px) {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const MenuItemLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0.5rem 2.5rem;
	text-decoration: none;
	color: #fcf9c6;
	font-family: sans-serif;
	font-size: 1rem;
	font-weight: 300;
	cursor: pointer;
	transition: 0.5s all ease;

	&:hover {
		color: #ac4425;
		background-color: #c7d36f;
		transition: 0.5s all ease;
		div {
			svg {
				fill: #9eb23b;
			}
		}
	}

	div {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: left;
		align-items: center;

		svg {
			display: none;
			fill: #ac4425;
			margin-right: 0.5rem;
		}
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		div {
			width: 30%;
			justify-content: left;

			svg {
				display: flex;
			}
		}
	}

	@media screen and (max-width: 880px) {
		div {
			width: 40%;
			justify-content: left;

			svg {
				display: flex;
			}
		}
	}

	@media screen and (max-width: 500px) {
		div {
			width: 60%;
			justify-content: left;

			svg {
				display: flex;
			}
		}
	}

	@media screen and (max-width: 260px) {
		div {
			width: 100%;
			justify-content: left;

			svg {
				display: flex;
			}
		}
	}
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		svg {
			fill: #ac4425;
			margin: 1.3rem;
		}
	}
`;
