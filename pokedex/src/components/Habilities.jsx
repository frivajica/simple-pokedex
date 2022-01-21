import styled from "styled-components";
const P = styled.p`
	font-size: .8rem;
	font-weight: ${({isTitle}) => isTitle && "bold"};
	width: ${({width}) => width};
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

export const Habilities = ({ properties, isTitle }) => {
	const propertiesRender = 
		properties?.map((h, i) => <P key={`hability-${i}`}>{h}</P>)
			|| <P>Desconocidas</P>

  return (
	<Container>
		{isTitle ? (
				<P isTitle={isTitle} >Habilidades</P>
			) : (
				<>
					{propertiesRender}
				</>
		)}
	</Container>
	);
};
				