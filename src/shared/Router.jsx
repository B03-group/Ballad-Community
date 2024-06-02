import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
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
            <Route path="/board/:id" element={<Board />} />
            <Route path="/board/:id/:detailId" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
