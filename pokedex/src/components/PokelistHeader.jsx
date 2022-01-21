import styled from "styled-components";
import { Search } from "./Search";
import { Button } from "../common/Button";
import { changeView } from "../state/listMode";
import { useSelector, useDispatch } from "react-redux";
const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

export const PokelistHeader = () => {
  const { listMode } = useSelector((state) => state);
  const dispatch = useDispatch();
  const isTable = listMode === "grid";
  const handleView = (view) => {
    dispatch(changeView(view));
  };

  return (
    <Container>
      <Search placeholder={`🔍︎   Buscar Pokémon`} />
      <div>
        <Button x="7rem" isInactive={isTable} onClick={() => handleView("table")}>
          Lista
        </Button>
        <Button x="7rem" isInactive={!isTable} onClick={() => handleView("grid")}>
          Cuadrícula
        </Button>
      </div>
    </Container>
  );
};
