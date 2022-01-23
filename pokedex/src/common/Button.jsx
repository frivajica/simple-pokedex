import styled from "styled-components";

export const Button = ({ children, isInactive, onClick, type, x, y }) => {
  return (
    <Container x={x} y={y} type={type} isInactive={isInactive} onClick={onClick}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  justify-self: center;
  height: ${({y}) => y || "2.5rem"};
  width: ${({x}) => x || "fit-content"};
  color: ${({isInactive}) => isInactive ? "#47525e" : "white"};
  border: ${({isInactive}) => isInactive ? "#47525e 3px solid" : "none"};
  border-radius: 5px;
  background-color: ${({isInactive}) => isInactive ? "white" : "#47525e"};
  :active {
    border: none;
    background-color: #282e35;
    color: white;
  }
  :hover {
    cursor: pointer;
  }
`;