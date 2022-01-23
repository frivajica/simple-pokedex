import { Input } from "../common/Input"
import { Button } from "../common/Button"
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginRequest } from "../state/user";
import { useForm } from "../hooks/useForm"

export const LoginForm = () => {
	const { form, handleChange } = useForm();
	const dispatch = useDispatch();
	const logIn = () => dispatch(loginRequest(form));

  return (
    <Container onSubmit={logIn}>
			<Input type="email" name="email" onChange={handleChange} placeholder="Correo Electrónico" />
			<Input type="password" name="password" onChange={handleChange} placeholder="Contraseña" />
			<Button type={"submit"} x="7rem">Iniciar Sesión</Button>
    </Container>
  );
};

const Container = styled.form`
  display: grid;
	grid-template-rows: repeat(3, 5rem);
  justify-content: center;
`;