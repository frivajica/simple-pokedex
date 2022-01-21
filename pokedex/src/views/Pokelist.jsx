import styled from "styled-components";
import { PokeTable } from "../components/PokeTable";
import { PokelistHeader } from "../components/PokelistHeader";
import { PokeGrid } from "../components/PokeGrid";
import { useSelector } from "react-redux";
const Container = styled.div`
	margin: 0 5vw;
	display: grid;
`;

export const Pokelist = () => {
  const { listMode } = useSelector((state) => state);
	const Content = listMode === 'table' ? <PokeTable /> : <PokeGrid />;

  return (
    <Container>
			<PokelistHeader />
			{Content}
    </Container>
  );
};