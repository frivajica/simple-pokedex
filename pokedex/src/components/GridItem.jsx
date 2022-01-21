import styled from "styled-components";
const Container = styled.div`
  padding: 1rem 2rem;
  border: grey 2px solid;
  min-width: 12rem;
`;
const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
const mockImg = 'https://media-exp1.licdn.com/dms/image/C4E0BAQECUGocyia18A/company-logo_200_200/0/1519880979070?e=2159024400&v=beta&t=enH3wcEi4IEStEbZUqbxHEgz8QCKiNxvxKQEpllLQd0'

export const GridItem = () => {
  return (
    <Container>
      <Img src={mockImg} alt="Imagen del Pokemon" />
      <h3>Nombre</h3>
      <p>Habilidad</p>
    </Container>
  );
};