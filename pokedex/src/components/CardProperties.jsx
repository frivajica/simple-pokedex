import styled from "styled-components";
const P = styled.p`
	height: 1.5rem;
  font-size: 0.8rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardProperties = ({ properties, id }) => {
  return (
    <Container>
      {properties?.map((h, i) => (
        <P key={`hability-${id}-${i}`}>{h?.ability?.name}</P>
      ))}
    </Container>
  );
};
