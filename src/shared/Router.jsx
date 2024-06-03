import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Board from '../pages/Board';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/board/:category" element={<Board />} />
            <Route path="/board/:category/:detailId" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
