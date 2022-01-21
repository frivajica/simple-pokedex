import styled from "styled-components";
const Container = styled.button`
  justify-self: center;
  width: fit-content;
  padding: 0 4vw;
  height: 2.5rem;
  font-size: .9rem;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #47525e;
  :active {
    background-color: #282e35;
  }
`;

export const Button = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};