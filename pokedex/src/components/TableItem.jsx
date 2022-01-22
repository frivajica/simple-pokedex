import styled from "styled-components";
import { Button } from "../common/Button";
import { Habilities } from "../components/Habilities";
import { useState } from "react";

export const TableItem = ({ isTitle, i, key, data }) => {
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
      <Item i={i} isTitle={isTitle}>
        <P isTitle={isTitle}>{isTitle ? "#" : data.id}</P>
        <P isTitle={isTitle}>{isTitle ? "Nombre" : fixedName}</P>
        {isTitle ? (
          <P isTitle={isTitle}>Vista Previa</P>
        ) : (
          <Img src={imgString} alt="Imagen del Pokemon" />
        )}
        <P isTitle={isTitle}>{isTitle ? "Tipos" : type}</P>
        <Habilities isTitle={isTitle} id={key} properties={data?.abilities} />
      </Item>
      {isTitle || (
        <Button x="4rem" y="2rem" onClick={() => toggleIsShiny(!isShiny)}>
          {isShiny ? "Normal" : "Shiny"}
        </Button>
      )}
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
  background-color: ${({ isTitle, i }) => {
    return isTitle ? "#EFF2F7" : i % 2 === 1 ? "#F9FAFC" : "white";
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
const P = styled.p`
  font-weight: ${({ isTitle }) => isTitle && "bold"};
`;