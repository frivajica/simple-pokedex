import styled from "styled-components";

export const Properties = ({ properties, id, isTitle, title }) => {
  return (
	<Container>
		{isTitle ? (
				<P isTitle={isTitle}>{title}</P>
			) : (
				<>
					{properties?.map((e, i) => <P key={`${id}-${i}`}>{e}</P>)}
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