import { Input } from "../common/Input"
import { Button } from "../common/Button"
import styled from "styled-components";
const Container = styled.div`
  display: grid;
	grid-template-rows: repeat(3 , 5rem);
  justify-content: center;
`

export const LoginForm = () => {
  return (
    <Container>
			<Input 
				placeholder="Correo Electrónico"
			/>
			<Input 
				placeholder="Contraseña"
			/>
			<Button>Iniciar Sesión</Button>
    </Container>
  );
};