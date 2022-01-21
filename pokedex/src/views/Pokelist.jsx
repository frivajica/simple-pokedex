import styled from "styled-components";
import { PokeTable } from "../components/PokeTable";
import { PokelistHeader } from "../components/PokelistHeader";
const Container = styled.div`
	margin: 0 5vw;
	display: grid;
`;

export const Pokelist = () => {
  return (
    <Container>
			<PokelistHeader />
			<PokeTable />
    </Container>
  );
};