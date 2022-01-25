import styled from "styled-components";
import { useEffect } from "react";
import { Search } from "./Search";
import { Button } from "../common/Button";
import { changeView } from "../state/isTable";
import { useSelector, useDispatch } from "react-redux";
import { getSomePokemon } from "../state/rawData";
import { processData } from "../state/data";

export const PokelistHeader = () => {
  const dispatch = useDispatch();
  const { isTable } = useSelector(state => state);
	const { rawData } = useSelector(state => state);
	useEffect(() => {dispatch(getSomePokemon(false))}, [dispatch]);
	useEffect(() => {dispatch(processData())}, [dispatch, rawData]);
  const handleView = (view) => dispatch(changeView(view));
  const handleSearch = (event) => {
    const search = event.target.value.toLowerCase();
    dispatch(getSomePokemon(search));
	};

  return (
    <Container>
      <Search
        name="search"
        onChange={handleSearch}
        placeholder={`🔍︎   Buscar Pokémon`}
      />
      <div>
        <Button x="7rem" 
          isInactive={!isTable} 
          onClick={() => handleView(true)}>
          Lista
        </Button>
        <Button 
          x="7rem"
          isInactive={isTable} 
          onClick={() => handleView(false)}>
          Cuadrícula
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;
