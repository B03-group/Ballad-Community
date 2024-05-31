import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import GlobalStyle from "../styles/GlobalStyle";
import Board from "../pages/Board";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/board/:id" element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
