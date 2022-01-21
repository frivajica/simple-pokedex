import styled from "styled-components";
import { Card } from "../components/Card";
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
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};