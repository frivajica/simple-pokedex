import { LoginForm } from "../components/LoginForm"
import styled from "styled-components";
const Container = styled.div`
  display: grid;
	grid-template-rows: repeat(2, 50vh);
`
const Title = styled.h1`
  padding-top: 10vh;
`

export const Login = () => {
  return (
    <Container>
      <Title>Pokedex</Title>
			<LoginForm />
    </Container>
  );
};