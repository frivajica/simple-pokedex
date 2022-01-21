import styled from "styled-components";
import { GridItem } from "../components/GridItem";
const Container = styled.div`
	margin:  0 0 2rem 0;
	display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-auto-rows: minmax(13rem, auto);;
  grid-gap: 2rem;
`;

export const PokeGrid = () => {
  return (
    <Container>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </Container>
  );
};