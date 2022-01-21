import styled from "styled-components";
const Container = styled.div`
	height: 100%;
  display: grid;
	grid-template-rows: repeat(2, 50vh);
`;

export const Pokelist = () => {
  return (
    <Container>
			<h1>Hola</h1>
    </Container>
  );
};