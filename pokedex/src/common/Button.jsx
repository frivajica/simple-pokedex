import styled from "styled-components";

export const Button = ({ children, isInactive, onClick }) => {
  const Container = styled.button`
    justify-self: center;
    width: fit-content;
    height: 2.5rem;
    width : 7rem;
    max-width: 60%;
    font-size: .9rem;
    color: ${isInactive ? "#47525e" : "white"};
    border: ${isInactive ? "#47525e 3px solid" : "none"};
    border-radius: 5px;
    background-color: ${isInactive ? "white" : "#47525e"};
    :active {
      border: none;
      background-color: #282e35;
      color: white;
    }
  `;

  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
};