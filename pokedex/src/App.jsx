import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar"
import { Pokelist } from "./views/Pokelist"
import { Login } from "./views/Login"
import styled from "styled-components";
const Content = styled.div`
  height: calc(100vh - 4rem);
`;

export const App = () => {
  return (
    <>
      <NavBar />
      <Content>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Pokelist />} />
        </Routes>
      </Content>
    </>
  );
};