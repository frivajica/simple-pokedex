import styled from "styled-components";
import { Card } from "../components/Card";
import { useSelector } from "react-redux"

export const PokeGrid = () => {
	const { data } = useSelector(state => state);

  return (
    <Container>
      {data.map(e => {
        return <Card id={e.id} key={`${e.name}-${e.id}`} data={e} />
      })}
    </Container>
  );
};

const Container = styled.div`
	margin:  0 0 2rem 0;
	display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-auto-rows: minmax(13rem, auto);;
  grid-gap: 2rem;
`;
