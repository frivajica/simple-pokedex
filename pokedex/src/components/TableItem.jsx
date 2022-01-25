import styled from "styled-components";
import { Button } from "../common/Button";
import { Properties } from "./Properties";
import { useState } from "react";

export const TableItem = ({ i, data }) => {
  const [isShiny, toggleIsShiny] = useState(false);
  const imgString = !isShiny ? data?.img[4] : data?.img[6];

  return (
    <Container>
      <Item i={i}>
        <p>{data?.id}</p>
        <p>{data?.name}</p>
        <Img src={imgString} alt="Imagen del Pokemon" />
        <Properties id={data?.id} properties={data?.types} />
        <Properties id={data?.id} properties={data?.abilities} />
      </Item>
      <Button x="4rem" y="2rem" onClick={() => toggleIsShiny(!isShiny)}>
        {isShiny ? "Normal" : "Shiny"}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  border: #d2dbe4 2px solid;
  background-color: ${({ i }) => {
    return i % 2 === 1 ? "#F9FAFC" : "white";
  }};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, 5rem);
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;
const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  :hover {
    cursor: pointer;
  }
`;