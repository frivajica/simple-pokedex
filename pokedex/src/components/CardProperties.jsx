import styled from "styled-components";
const P = styled.p`
	font-size: .8rem;
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	justify-items: center;
	align-items: center;
	flex-wrap: wrap;
`;

export const CardProperties = ({ properties }) => {
  return (
		<Container>
			{properties?.map((h, i) => <P key={`hability-${i}`}>{h}</P>)}
		</Container>
	);
};
				