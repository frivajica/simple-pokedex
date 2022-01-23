import styled from "styled-components";
import { TableItem } from "../components/TableItem";
import { useSelector } from "react-redux"

export const PokeTable = () => {
	const { data } = useSelector(state => state);

  return (
    <Container>
				<TableItem isTitle />
			{data.map((e, i) => <TableItem i={i} key={e.id} data={e} />
			)}
    </Container>
  );
};

const Container = styled.div`
	margin:  0 0 2rem 0;
	display: grid;
`;