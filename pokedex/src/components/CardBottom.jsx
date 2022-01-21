import { Button } from "../common/Button"
import styled from "styled-components";
const P = styled.p`
	text-align: center;
	font-size: .8rem;
`;
const Div = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 3rem;
`;

export const CardBottom = ({ info=['hola', 'hey'], buttonText }) => {
  return (
		<Container>
			<Div>
				{info?.map((e, i) => <P key={`hability-${i}`}>{e}</P>)}
			</Div>
			<Button x="5rem" y="1.5rem">{buttonText}</Button>
		</Container>
	);
};