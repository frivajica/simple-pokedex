import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Pokelist } from "./views/Pokelist";
import { Login } from "./views/Login";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  height: calc(100vh - 4rem);
`;

export const App = () => {
  const isLoggedIn = useSelector(({ user }) => !!user.email);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) navigate(`/login`);
  }, [isLoggedIn]);

  return (
    <>
      {!isLoggedIn ? "" : <NavBar />}
      <Content>
        <Routes>
          <Route exact path="/" element={<Pokelist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Content>
    </>
  );
};