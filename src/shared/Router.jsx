import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Board from '../pages/Board';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/board/:category" element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
