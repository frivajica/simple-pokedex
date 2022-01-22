import styled from "styled-components";
import { TableItem } from "../components/TableItem"

export const PokeTable = ({pokeInfo}) => {
  return (
    <Container>
				<TableItem isTitle />
			{pokeInfo.map((e, i) => 
				{return <TableItem 
					i={i} key={e.id} data={e}
				/>}
			)}
    </Container>
  );
};

const Container = styled.div`
	margin:  0 0 2rem 0;
	display: grid;
`;