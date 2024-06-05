import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Board from '../pages/Board';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Update from '../pages/Update';
import Write from '../pages/Write';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/board/:category" element={<Board />} />
            <Route path="/board/:category/:postId" element={<Detail />} />
            <Route path="/write" element={<Write />} />
            <Route path="/update/:postId" element={<Update/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
