import { CardProperties } from "./CardProperties";
import { Button } from "../common/Button";
import styled from "styled-components";
import { useState } from "react";

export const Card = ({ data, id }) => {
  const [isShiny, toggleIsShiny] = useState(false);
  const handleClick = () => toggleIsShiny(!isShiny);
  const imgString = !isShiny ? data?.img[4] : data?.img[6];

  return (
    <Container>
      <Img src={imgString} alt="Imagen del Pokemon" />
      <h3>{data?.name[0]}</h3>
      <CardProperties properties={data?.abilities} id={id} />
      <CardBottom>
        <CardProperties properties={data?.types} id={id} />
        <Button onClick={handleClick} x="100%" y="1.5rem">
          {isShiny ? "Normal" : "Shiny"}
        </Button>
      </CardBottom>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  padding: 1rem;
  border: grey 2px solid;
  min-width: 12rem;
`;
const Img = styled.img`
  width: 100%;
  justify-self: center;
  align-self: center;
  max-height: 100%;
  max-width: 100%;
  :hover {
    cursor: pointer;
  }
`;
const CardBottom = styled.div`
  padding: 0 10%;
  display: grid;
  align-items: center;
  align-content: center;
  grid-template-columns: 2fr 1fr;
  column-gap: 20%;
`;