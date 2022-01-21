import { useEffect } from "react"
import { LoginForm } from "../components/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const isLoggedIn = useSelector(({ user }) => !!user.email);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate(`/`);
  }, [isLoggedIn]);

  return (
    <Container>
      <Title>Pokédex</Title>
			<LoginForm />
    </Container>
  );
};