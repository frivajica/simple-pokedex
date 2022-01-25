import styled from "styled-components";

export const TableHeaders = () => {
  return (
    <Container>
      <Item>
        <P>#</P>
        <P>Nombre</P>
        <P>Vista Previa</P>
        <P>Tipos</P>
        <P>Habilidades</P>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  border: #d2dbe4 2px solid;
  background-color: #EFF2F7;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, 5rem);
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;
const P = styled.p`
  font-weight: bold;
`;
