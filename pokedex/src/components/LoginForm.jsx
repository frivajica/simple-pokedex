import { Input } from "../common/Input"
import { Button } from "../common/Button"
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginRequest } from "../state/user";
import { useForm } from "../hooks/useForm"
const Container = styled.div`
  display: grid;
	grid-template-rows: repeat(3, 5rem);
  justify-content: center;
`;

export const LoginForm = () => {
	const { form, handleChange } = useForm();
	const dispatch = useDispatch();
	const logIn = () => {
		dispatch(loginRequest(form));
	};

  return (
    <Container>
			<Input
				type="email"
				name="email"
				onChange={handleChange}
				placeholder="Correo Electrónico"
			/>
			<Input
				type="password"
				name="password"
				onChange={handleChange}
				placeholder="Contraseña"
			/>
			<Button x="7rem" onClick={logIn}>Iniciar Sesión</Button>
    </Container>
  );
};