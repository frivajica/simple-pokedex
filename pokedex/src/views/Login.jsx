import { LoginForm } from "../components/LoginForm";
import styled from "styled-components";
const Container = styled.div`
  height: 100%;
  display: grid;
	grid-template-rows: repeat(2, 50%);
`;
const Title = styled.h1`
  padding-top: 10vh;
`;

export const Login = () => {
  return (
    <Container>
      <Title>Pokédex</Title>
			<LoginForm />
    </Container>
  );
};