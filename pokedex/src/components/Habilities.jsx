import styled from "styled-components";

export const Habilities = ({ habilities, isTitle }) => {
	const P = isTitle ? styled.p`font-weight: bold;` : styled.p``;

  return (
	<>
		{isTitle ? (
				<P>Habilidades</P>
			) : (
				habilities?.map(hability => <P>{hability}</P>) || <P>Desconocidas</P>
		)}
	</>
	);
};
				