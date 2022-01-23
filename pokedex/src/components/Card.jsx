import { CardProperties } from "./CardProperties";
import { CardBottom } from "./CardBottom";
import styled from "styled-components";
import { useState } from "react";

export const Card = ({ data, id }) => {
  const [isShiny, toggleIsShiny] = useState(false);
  const capitalizer = (e) => e?.charAt(0)?.toUpperCase() + e?.slice(1);
  const name = data?.names?.filter((e) => e?.language?.name === "es")[0]?.name;
  const fixedName = capitalizer(name);
  const type = capitalizer(data?.types[0]?.type?.name);
  const imgString = !isShiny
    ? data?.sprites?.front_default
    : data?.sprites?.front_shiny;

  return (
    <Container>
      <Img src={imgString} alt="Imagen del Pokemon" />
      <h3>{fixedName}</h3>
      <CardProperties properties={data?.abilities} id={id} />
      <CardBottom type={type} 
      clickProp={() => toggleIsShiny(!isShiny)} 
      buttonText={isShiny ? "Normal" : "Shiny"}
      />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  padding: 1rem 2rem;
  border: grey 2px solid;
  min-width: 12rem;
`;
const Img = styled.img`
  height: 12rem;
  justify-self: center;
  align-self: center;
  max-height: 100%;
  max-width: 100%;
  :hover {
    cursor: pointer;
  }
`;
