import styled from "styled-components";
import { TableItem } from "../components/TableItem"
const Container = styled.div`
	margin:  0 0 2rem 0;
	display: grid;
`;
const loopThis = [1,2, 3, 4, 5, 6, 7, 8];

export const PokeTable = () => {
  return (
    <Container>
				<TableItem isTitle />
			{loopThis.map((e, i) => 
				{return <TableItem 
					index={i}
				/>}
			)}
    </Container>
  );
};