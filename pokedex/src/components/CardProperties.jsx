import styled from "styled-components";

export const CardProperties = ({ properties, id }) => {
  return (
    <Container>
      {properties?.map((e, i) => (
        <P key={`hability-${id}-${i}`}>{e}</P>
      ))}
    </Container>
  );
};

const P = styled.p`
  display: flex;
  align-items: center;
	height: 1.5rem;
  font-size: 0.8rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
`;