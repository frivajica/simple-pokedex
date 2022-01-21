import styled from "styled-components";
import { Button } from "../common/Button";
const Container = styled.div`
	padding: 2rem 5vw 0 5vw;
	height: 4rem;
  display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavBar = () => {
  return (
    <Container>
			<h1>Pokédex</h1>
			<Button>Cerrar Sesión</Button>
    </Container>
  );
};