import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { Search } from "./Search"
import { Button } from "../common/Button"
const Container = styled.div`
	padding: 1rem 0;
	display: flex;
	justify-content: space-between;
`;

export const PokelistHeader = () => {
  return (
    <Container>
			<Search  placeholder={`🔍︎   Buscar Pokémon`}/>
			<div>
				<Button>Lista</Button>
				<Button isInactive>Cuadrícula</Button>
			</div>
    </Container>
  );
};