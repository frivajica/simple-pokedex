import styled from "styled-components";
const Container = styled.button`
  justify-self: center;
  width: fit-content;
  height: 2.5rem;
  width : 7rem;
  max-width: 60%;
  color: ${({isInactive}) => isInactive ? "#47525e" : "white"};
  border: ${({isInactive}) => isInactive ? "#47525e 3px solid" : "none"};
  border-radius: 5px;
  background-color: ${({isInactive}) => isInactive ? "white" : "#47525e"};
  :active {
    border: none;
    background-color: #282e35;
    color: white;
  }
`;

export const Button = ({ children, isInactive, onClick }) => {
  return (
    <Container isInactive={isInactive} onClick={onClick}>
      {children}
    </Container>
  );
};