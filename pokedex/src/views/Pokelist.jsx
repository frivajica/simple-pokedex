import styled from "styled-components";
import { PokeTable } from "../components/PokeTable";
import { PokelistHeader } from "../components/PokelistHeader";
import { PokeGrid } from "../components/PokeGrid";
import { useSelector } from "react-redux";
import { extractPokeInfo } from "../utils/extractPokeInfo";
import { useEffect, useState } from "react"
const Container = styled.div`
	margin: 0 5vw;
	display: grid;
`;

export const Pokelist = () => {
	const [ pokeInfo, setPokeInfo ] = useState([]);
  const { listMode } = useSelector((state) => state);
  const { somePokemon } = useSelector(state => state);
	const Content = listMode === 'table' 
		? <PokeTable pokeInfo={pokeInfo}/> 
		: <PokeGrid pokeInfo={pokeInfo}/>;
  useEffect(async () => {
    setPokeInfo(await extractPokeInfo(somePokemon));
  }, []);

  return (
    <Container >
			<PokelistHeader />
			{Content}
    </Container>
  );
};