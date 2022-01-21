import styled from "styled-components";
import { Button } from "../common/Button"
import { Habilities } from "../components/Habilities"

export const TableItem = ({ isTitle, index }) => {
	const Container = styled.div`
		display: grid;
		grid-template-columns: 85% 15%;
		justify-content: center;
		align-items: center;
	`;
		const Item = styled.div`
		border: #D2DBE4 2px solid;
		background-color: ${
			isTitle ? "#EFF2F7" : (index%2 === 1) ? "#F9FAFC" : "white"
			};
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(auto-fill, 5rem);
		text-align: center;
		justify-content: center;
		justify-items: center;
		align-items: center;
	`;
	const Img = styled.img`
		max-height: 100%;
		max-width: 100%;
	`;
	const P = isTitle ? styled.p`font-weight: bold;` : styled.p``;
	const mockImg = 'https://media-exp1.licdn.com/dms/image/C4E0BAQECUGocyia18A/company-logo_200_200/0/1519880979070?e=2159024400&v=beta&t=enH3wcEi4IEStEbZUqbxHEgz8QCKiNxvxKQEpllLQd0'
	
  return (
		<Container>
			<Item>
				<P>#</P>
				<P>Nombre</P>
				{isTitle ? <P>Vista Previa</P> : <Img src={mockImg}/>}
				<P>Tipos</P>
				<Habilities isTitle={isTitle} />
			</Item>
			<Button>Shiny</Button>
		</Container>
  );
};