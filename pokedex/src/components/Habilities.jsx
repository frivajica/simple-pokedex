import styled from "styled-components";

export const Habilities = ({ properties, key, isTitle }) => {
  const capitalizer = (e) => e?.charAt(0)?.toUpperCase() + e?.slice(1);
	const propertiesRender = 
		properties?.map((h, i) => <P key={`${key}-${i}`}>{capitalizer(h?.ability?.name)}</P>)
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

const P = styled.p`
	font-size: .8rem;
	padding: .3rem 0;
	font-weight: ${({isTitle}) => isTitle && "bold"};
	width: 100%;
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;