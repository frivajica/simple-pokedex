import styled from "styled-components";
const P = styled.p`font-weight: ${({isTitle}) => isTitle && "bold"};`;

export const Habilities = ({ habilities, isTitle }) => {
  return (
	<>
		{isTitle ? (
				<P isTitle={isTitle}>Habilidades</P>
			) : (
				habilities?.map(hability => <P>{hability}</P>) || <P>Desconocidas</P>
		)}
	</>
	);
};
				