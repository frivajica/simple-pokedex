import styled from "styled-components";
import { PokeTable } from "../components/PokeTable";
import { PokelistHeader } from "../components/PokelistHeader";
import { PokeGrid } from "../components/PokeGrid";
import { useSelector } from "react-redux";

export const Pokelist = () => {
	const { isTable } = useSelector(state => state);

	return (
		<Container >
			<PokelistHeader />
			{isTable ? <PokeTable /> : <PokeGrid />}
		</Container>
	);
};

const Container = styled.div`
	margin: 0 5vw;
	display: grid;
`;