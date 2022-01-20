import { Routes, Route } from "react-router-dom";
import { Login } from "./views/Login"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};