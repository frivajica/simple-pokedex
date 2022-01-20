import styled from "styled-components";
  const Container = styled.button`
    justify-self: center;
    width: fit-content;
    padding: 0 2.5rem;
    height: 3rem;
    font-size: .9rem;
    color: white;
    border: 0 none;
	  border-radius: 5px;
    background-color: #47525e;
    :active {
      background-color: #282e35;
    }
  `

export const Button = ({ children }) => {

  return (
    <Container>
      {children}
    </Container>
  );
};