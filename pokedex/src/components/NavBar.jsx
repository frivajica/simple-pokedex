import styled from "styled-components";
import { Button } from "../common/Button";
import { useDispatch } from 'react-redux';
import { logoutRequest } from "../state/user";

export const NavBar = () => {
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(logoutRequest());
	};

  return (
    <Container>
			<h1>Pokédex</h1>
			<Button onClick={logOut}>Cerrar Sesión</Button>
    </Container>
  );
};

const Container = styled.div`
	padding: 2rem 5vw 0 5vw;
	height: 4rem;
  display: flex;
	justify-content: space-between;
	align-items: center;
`;