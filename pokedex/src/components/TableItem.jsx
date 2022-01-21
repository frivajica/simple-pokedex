import styled from "styled-components";
import { Button } from "../common/Button";
import { Habilities } from "../components/Habilities";
const mockImg = "https://media-exp1.licdn.com/dms/image/C4E0BAQECUGocyia18A/company-logo_200_200/0/1519880979070?e=2159024400&v=beta&t=enH3wcEi4IEStEbZUqbxHEgz8QCKiNxvxKQEpllLQd0";
const Container = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  border: #d2dbe4 2px solid;
  background-color: ${({ isTitle, index }) => {
    return isTitle ? "#EFF2F7" : index % 2 === 1 ? "#F9FAFC" : "white";
  }};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, 5rem);
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;
const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
const P = styled.p`
  font-weight: ${({ isTitle }) => isTitle && "bold"};
`;

export const TableItem = ({ isTitle, index }) => {
  return (
    <Container>
      <Item>
        <P isTitle={isTitle}>#</P>
        <P isTitle={isTitle}>Nombre</P>
        {isTitle ? (
          <P isTitle={isTitle}>Vista Previa</P>
        ) : (
          <Img src={mockImg} alt="Imagen del Pokemon" />
        )}
        <P isTitle={isTitle}>Tipos</P>
        <Habilities isTitle={isTitle} />
      </Item>
      <Button>Shiny</Button>
    </Container>
  );
};
