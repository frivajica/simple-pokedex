import { Button } from "../common/Button"
import styled from "styled-components";

export const CardBottom = ({ type, clickProp, id, buttonText }) => {
  return (
		<Container>
			<Div>
				{type}
			</Div>
			<Button onClick={clickProp} x="5rem" y="1.5rem">{buttonText}</Button>
		</Container>
	);
};

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